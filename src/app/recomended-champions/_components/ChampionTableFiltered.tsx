"use client";
import { useState } from "react";
import { RolesButton } from "./RolesButton";
import ChampionTable from "./ChampionTable";
import { useQuery } from "@tanstack/react-query";
import { fetchAllChampions } from "@/app/recomended-champions/_components/FetchAllChampions";

export default function ChampionTableFiltered() {
  const [selectedRole, setSelectedRole] = useState<string>();

  // Use selectedRole as a variable in useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["champions-stats-data", selectedRole], // Add selectedRole to the query key
    queryFn: () => fetchAllChampions(selectedRole), // Pass selectedRole to fetchAllChampions
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading champions</div>;

  return (
    <>
      <RolesButton setSelectedRoleAction={setSelectedRole} />
      {data ? <ChampionTable data={data} /> : null}
    </>
  );
}
