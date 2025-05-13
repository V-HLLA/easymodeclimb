//Archives the current patch for the current patch table to be updated
import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { BASEURL, EASY_CHAMPS_LIST } from "@/lib/constants";

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    // gets current/now old patch number
    const patchRes =
      await sql`SELECT DISTINCT patch FROM easychampions_stats ORDER BY patch DESC LIMIT 1`;
    const patch = patchRes[0]?.patch;
    const tableName = `easychampions_stats_patch_${patch.replaceAll(".", "_")}`;

    const createTable = await sql`
  CREATE TABLE IF NOT EXISTS ${sql.unsafe(tableName)} (
    id SERIAL PRIMARY KEY,
    patch TEXT,
    name TEXT,
    winrate TEXT,
    pickrate TEXT,
    banrate TEXT,
    role TEXT
  )`;

    const insertToTable = await sql`
      INSERT INTO ${sql.unsafe(
        tableName
      )} (id, patch, name, winrate, pickrate, banrate, role)
      SELECT id, patch, name, winrate, pickrate, banrate, role
      FROM easychampions_stats
      WHERE name = ANY(${[...EASY_CHAMPS_LIST]})
      ORDER BY winrate DESC
      ON CONFLICT (id) 
      DO UPDATE SET 
        patch = EXCLUDED.patch,
        winrate = EXCLUDED.winrate,
        pickrate = EXCLUDED.pickrate,
        banrate = EXCLUDED.banrate;
    `;

    const response = NextResponse.json(
      `NEW TABLE WITH OLD PATCH VALUES WAS CREATED SUCCESSFULLY ${createTable}, ${insertToTable}`
    );
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
