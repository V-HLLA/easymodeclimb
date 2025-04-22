import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, patch, name as championName, winrate as championWinRate
      FROM champion_stats
      ORDER BY winrate DESC;
    `;

    return NextResponse.json(rows);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: "Failed to fetch champion data", error: errorMessage },
      { status: 500 }
    );
  }
}
