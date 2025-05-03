// Gets all champions data from champion_stats table
import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(req: NextRequest) {
  // Only run this code in "development"
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse("Not in dev", { status: 404 });
  }

  // this needs to commented out if trying to access by the browser
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (token !== process.env.SCRAPE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Simple CORS check so browsers can’t call it cross‑origins
  const origin = req.headers.get("origin");
  if (origin && origin !== "http://localhost:3000") {
    return new NextResponse("Origin is not correct", { status: 403 });
  }

  try {
    const rows = await sql`
      SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate
      FROM champion_stats
      ORDER BY winrate DESC;
    `;

    const response = NextResponse.json(rows);
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set(
      "Access-Control-Allow-Origin",
      "http://localhost:3000"
    );
    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorResponse = NextResponse.json(
      { message: "Failed to fetch champion data", error: errorMessage },
      { status: 500 }
    );
    errorResponse.headers.set(
      "Access-Control-Allow-Origin",
      "http://localhost:3000"
    );
    return errorResponse;
  }
}
