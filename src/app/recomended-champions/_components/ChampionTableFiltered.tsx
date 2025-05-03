"use client";
import { useState } from "react";
import { RolesButton } from "./RolesButton";
import ChampionTable from "./ChampionTable";
import { Champion, Role } from "@/lib/types";
import { columns } from "./columns";

export default function ChampionTableFiltered({
  initialData,
}: {
  initialData: Champion[] | null;
}) {
  const [selectedRole, setSelectedRole] = useState<Role>("All");

  if (initialData === null) {
    return <p>Failed to load champion statistics. Please try again later.</p>;
  }

  const filterData = () => {
    if (selectedRole === "All") {
      return initialData;
    } else {
      // Dynamically filter by the selected role
      return initialData?.filter(({ role }) => role === selectedRole);
    }
  };

  const filteredData = filterData();

  return (
    <>
      <RolesButton setSelectedRoleAction={setSelectedRole} />
      {filteredData && <ChampionTable columns={columns} data={filteredData} />}
    </>
  );
}
