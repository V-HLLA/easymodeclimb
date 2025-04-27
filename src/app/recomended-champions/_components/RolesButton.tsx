"use client";
import { ROLES } from "@/lib/constants";

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

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function RolesButton() {
  const [selected, setSelected] = useState<string | null>();

  const handleClick = (role: string) => {
    if (role === selected) {
      setSelected(null);
    } else {
      setSelected(role);
    }
  };

  return (
    <div className="flex space-x-4">
      {ROLES.map(({ roleName, svgIcon }) => (
        <Button
          onClick={() => handleClick(`${roleName}`)}
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
