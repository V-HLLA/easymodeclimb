"use client";
import { useState } from "react";
import { RolesButton } from "./RolesButton";
import ChampionTable from "./ChampionTable";
import { useQuery } from "@tanstack/react-query";
import { fetchAllChampions } from "@/app/recomended-champions/_components/FetchAllChampions";
import { Role } from "@/lib/types";
import Loading from "@/app/Loading";

export default function ChampionTableFiltered() {
  const [selectedRole, setSelectedRole] = useState<Role>("All");

  const { data, isLoading, error } = useQuery({
    queryKey: ["champions-stats-data"],
    queryFn: fetchAllChampions,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading champions</div>;

  const filterData = () => {
    if (selectedRole === "All") {
      return data;
    } else {
      // Dynamically filter by the selected role
      return data?.filter(({ role }) => role.includes(selectedRole));
    }
  };

  const filteredData = filterData();

  return (
    <>
      <RolesButton setSelectedRoleAction={setSelectedRole} />
      {filteredData && <ChampionTable data={filteredData} />}
    </>
  );
}
