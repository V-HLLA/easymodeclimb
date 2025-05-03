"use server";
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { BASEURL } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);
// export const revalidate = 60 * 60 * 24 * 7; // 7 days in seconds

export async function GET() {
  try {
    const rows = await sql`
  SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate, role
  FROM easychampions_stats
  ORDER BY winrate DESC;
  `;
    const response = NextResponse.json(rows);
    response.headers.set("Access-Control-Allow-Origin", `${BASEURL}`);
    response.headers.set("Access-Control-Allow-Methods", "GET");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

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
