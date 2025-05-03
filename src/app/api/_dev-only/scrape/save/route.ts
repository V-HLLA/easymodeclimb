import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { BASEURL, EASY_CHAMPS_LIST } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);

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
  // updates db with the scraped results
  try {
    const rows = await sql`
      INSERT INTO easychampions_stats (id, patch, name, winrate, pickrate, banrate)
      SELECT id, patch, name, winrate, pickrate, banrate
      FROM champion_stats
      WHERE name = ANY(${[...EASY_CHAMPS_LIST]})
      ORDER BY winrate DESC
      ON CONFLICT (id) 
      DO UPDATE SET 
        patch = EXCLUDED.patch,
        winrate = EXCLUDED.winrate,
        pickrate = EXCLUDED.pickrate,
        banrate = EXCLUDED.banrate;
    `;

    const response = NextResponse.json(`INSERT WAS SUCCESSFUL ${rows}`);
    response.headers.set("Access-Control-Allow-Origin", `${BASEURL}`);

    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorResponse = NextResponse.json(
      { message: "Failed to fetch easy champions data", error: errorMessage },
      { status: 500 }
    );
    errorResponse.headers.set("Access-Control-Allow-Origin", `${BASEURL}`);
    return errorResponse;
  }
}
