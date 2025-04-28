"use client";
import { ROLES } from "@/lib/constants";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Role } from "@/lib/types";

type RolesButtonProps = {
  setSelectedRoleAction: React.Dispatch<SetStateAction<Role | string>>;
};

export function RolesButton({ setSelectedRoleAction }: RolesButtonProps) {
  const [selected, setSelected] = useState<string | null>();

  const handleClick = (roleName: string) => {
    if (roleName === selected) {
      setSelected(null);
      setSelectedRoleAction("All");
    } else {
      setSelectedRoleAction(roleName);
      setSelected(roleName);
    }
  };

  return (
    <div className="flex space-x-4">
      {ROLES.map(({ roleName, svgIcon }) => (
        <Button
          onClick={() => handleClick(roleName)}
          key={roleName}
          className={
            selected === roleName
              ? "dark:bg-purple-900 dark:text-white bg-purple-900 hover:cursor-pointer"
              : "dark:bg-black dark:hover:bg-purple-900 text-white hover:bg-purple-900 hover:cursor-pointer"
          }
        >
          {svgIcon}
        </Button>
      ))}
    </div>
  );
}

// // Corrected handleClick function
// const handleClick = () => {
//   // Send the role as a query parameter in the URL
//   fetch(`${BASEURL}/api/easychampions?role=mid`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data); // Handle the response data
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
// };
