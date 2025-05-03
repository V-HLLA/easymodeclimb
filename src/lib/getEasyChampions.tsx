import { neon } from "@neondatabase/serverless";
import { Champion } from "@/lib/types";

const sql = neon(process.env.DATABASE_URL!);

export default async function getEasyChampions() {
  try {
    const rows = await sql`
  SELECT id, patch, name as championName, winrate as championWinRate, pickrate as championPickrate , banrate as championBanrate, role
  FROM easychampions_stats
  ORDER BY winrate DESC;
  `;
    return rows as Champion[];
  } catch (error) {
    console.error("Failed to fetch champion stats:", error);
    return null;
  }
}
