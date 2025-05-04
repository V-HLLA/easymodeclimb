import ChampionTableFiltered from "./_components/ChampionTableFiltered";
import { getEasyChampions } from "../../lib/getEasyChampions";

export const revalidate = 604800; // 7 days in seconds

export default async function RecomendedChampions() {
  const championsStats = await getEasyChampions();

  return (
    <main className="flex flex-col flex-1 justify-start items-center px-4 py-4 text-center gap-2">
      <h1 className="text-3xl sm:text-2xl font-extrabold tracking-tight max-w-3xl dark:text-white">
        Easy champions in the Meta right now:
      </h1>
      <h6 className="dark:text-white">Filter By Role:</h6>
      <ChampionTableFiltered initialData={championsStats} />
    </main>
  );
}
