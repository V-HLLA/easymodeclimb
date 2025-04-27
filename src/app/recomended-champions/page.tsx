import { Suspense } from "react";
import ChampionTable from "./_components/ChampionTable";
import Loading from "../Loading";
import FilterByRole from "./_components/FilterByRole";

export default function RecomendedChampions() {
  return (
    <main className="flex flex-col flex-1 justify-start items-center px-4 py-12 text-center gap-1">
      <h1 className="text-4xl sm:text-3xl font-extrabold tracking-tight max-w-3xl dark:text-white">
        Easy champions in the Meta right now:
      </h1>
      <FilterByRole />
      <Suspense fallback={<Loading />}>
        <ChampionTable />
      </Suspense>
    </main>
  );
}
