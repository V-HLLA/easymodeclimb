"use client";
import { useState } from "react";
import { RolesButton } from "./RolesButton";
import ChampionTable from "./ChampionTable";
import { useQuery } from "@tanstack/react-query";
import { fetchAllChampions } from "@/app/recomended-champions/_components/FetchAllChampions";

export default function ChampionTableFiltered() {
  const [selectedRole, setSelectedRole] = useState<string>("all");

  const { data, isLoading, error } = useQuery({
    queryKey: ["champions-stats-data"],
    queryFn: fetchAllChampions,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading champions</div>;
  console.log(data);
  return (
    <>
      <RolesButton
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      {data ? <ChampionTable data={data} /> : null}
    </>
  );
}
