"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChampionTableFiltered from "./_components/ChampionTableFiltered";

const queryClient = new QueryClient();

export default function RecomendedChampions() {
  return (
    <main className="flex flex-col flex-1 justify-start items-center px-4 py-4 text-center gap-2">
      <h1 className="text-3xl sm:text-2xl font-extrabold tracking-tight max-w-3xl dark:text-white">
        Easy champions in the Meta right now:
      </h1>
      <h6 className="dark:text-white">Filter By Role:</h6>
      <QueryClientProvider client={queryClient}>
        <ChampionTableFiltered />
      </QueryClientProvider>
    </main>
  );
}
