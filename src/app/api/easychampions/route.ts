import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const role = url.searchParams.get("role");
    let rows: Record<string, number>[] = [];
    if (role) {
      // const filteredByRole = `'${role}'`;
      const formattedRole =
        role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
      rows = await sql`
    SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate, roles as championRoles 
    FROM easychampions_stats
    WHERE ${formattedRole} = ANY(roles)
    ORDER BY winrate DESC;
  `;
    } else {
      rows = await sql`
  SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate, roles
  FROM easychampions_stats
  ORDER BY winrate DESC;
  `;
    }

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
