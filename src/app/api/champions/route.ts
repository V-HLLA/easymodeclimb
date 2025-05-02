import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (token !== process.env.SCRAPE_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 });
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
