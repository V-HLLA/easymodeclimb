import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { EASY_CHAMPS_LIST } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    const rows = await sql`
  SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate FROM champion_stats
  WHERE name = ANY(${EASY_CHAMPS_LIST.names})
  ORDER BY winrate DESC;
`;

    const response = NextResponse.json(rows);
    response.headers.set(
      "Access-Control-Allow-Origin",
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://easymode-climb.vercel.app"
    );

    return response;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorResponse = NextResponse.json(
      { message: "Failed to fetch easy champions data", error: errorMessage },
      { status: 500 }
    );
    errorResponse.headers.set(
      "Access-Control-Allow-Origin",
      "http://localhost:3000"
    );
    return errorResponse;
  }
}
