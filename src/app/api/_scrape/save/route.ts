import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { EASY_CHAMPS_LIST } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
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
