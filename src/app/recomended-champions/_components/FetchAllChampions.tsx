import { BASEURL } from "@/lib/constants";
import { Champion } from "@/lib/types";

export async function fetchAllChampions() {
  const res = await fetch(`${BASEURL}/api/easychampions`);
  if (!res.ok) {
    <div>Failed to fetch easy champions stats</div>;
    throw new Error("Failed to fetch champions");
  }
  const championsStats = (await res.json()) as Champion[];

  return championsStats;
}
