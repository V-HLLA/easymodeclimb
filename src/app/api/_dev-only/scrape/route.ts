import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { chromium } from "playwright";

export async function GET(req: Request) {
  // Only run this code in "development"
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not in dev", { status: 404 });
  }

  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (token !== process.env.SCRAPE_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  let browser;
  try {
    // Launch the browser
    browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://lolalytics.com/lol/tierlist/", {
      waitUntil: "domcontentloaded",
    });

    // Wait for the patch element to load
    await page.waitForSelector(".font-bold.items-center.uppercase.pt-1", {
      timeout: 10000,
    });

    // Scrape current patch
    const currentPatch = await page
      .locator(".font-bold.items-center.uppercase.pt-1")
      .textContent();

    await page.waitForTimeout(5000); // wait to ensure data is loaded

    // Scrape champion names (top and lower)
    const topNames = await page.$$eval('a[q\\:key="SO_0"]', (els) =>
      els.map((el) => el.textContent?.trim() || "")
    );

    // Scroll the page to load more content
    await page.evaluate(async () => {
      const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
      let totalHeight = 0;
      const distance = 300;
      while (totalHeight < document.body.scrollHeight) {
        window.scrollBy(0, distance);
        totalHeight += distance;
        await delay(200); // allow content to load
      }
    });

    const lowerNames = await page.evaluate(() => {
      const elements = document.querySelectorAll(
        'div.flex.h-\\[52px\\].justify-between.text-\\[13px\\].text-\\[\\#ccc\\].odd\\:bg-\\[\\#181818\\].even\\:bg-\\[\\#101010\\] div[style="width: 110px;"] a'
      );
      return Array.from(elements).map((el) =>
        (el as HTMLElement).innerText.trim()
      );
    });

    const allChampionNames = [...topNames, ...lowerNames];

    // Scrape winrates
    // Top stats (win, pick, ban rates)
    const topStatsRaw = await page.$$eval(
      'div[q\\:key="5"], div[q\\:key="6"], div[q\\:key="7"]',
      (elements) => {
        return elements.slice(3).map((el) => {
          const text = el.textContent?.trim() || "";
          return text.length > 5 ? text.slice(0, 5) : text;
        });
      }
    );

    // Lower stats (win, pick, ban rates)
    const lowerStats = await page.$$eval(
      'div.my-auto.justify-center.flex[style="width: 48px;"]',
      (elements) => {
        return elements.map((el) => {
          const text = el.textContent?.trim() || "";
          return text.length > 5 ? text.slice(0, 5) : text;
        });
      }
    );

    const championsStats = [...topStatsRaw, ...lowerStats];

    // Build champion data
    const championData = allChampionNames.map((name, index) => {
      const start = index * 3;
      return {
        name,
        winRate: championsStats[start],
        pickRate: championsStats[start + 1],
        banRate: championsStats[start + 2],
      };
    });

    // Close browser after scraping
    await browser.close();

    // Connect to Neon DB
    const sql = neon(process.env.DATABASE_URL!);

    // Save to DB (upsert instead of truncate)
    for (const champ of championData) {
      await sql`
    INSERT INTO champion_stats (patch, name, winrate, pickrate, banrate)
    VALUES (${currentPatch}, ${champ.name}, ${champ.winRate}, ${champ.pickRate}, ${champ.banRate})
    ON CONFLICT (patch, name)
    DO UPDATE SET
      winrate = EXCLUDED.winrate,
      pickrate = EXCLUDED.pickrate,
      banrate = EXCLUDED.banrate
  `;
    }

    return NextResponse.json({
      message: "Scraped and inserted successfully",
      patch: currentPatch,
      "Champion data": championData,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error during scraping or database operation", errorMessage);

    return NextResponse.json(
      {
        message: "Error during scraping or database operation",
        error: errorMessage,
      },
      { status: 500 }
    );
  } finally {
    // Ensure the browser is closed in case of an error
    if (browser) {
      await browser.close();
    }
  }
}
