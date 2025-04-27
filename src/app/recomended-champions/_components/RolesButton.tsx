// "use client";
// import { BASEURL } from "@/lib/constants";

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

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export function RolesButton() {
//   const [selected, setSelected] = useState<string>("");

//   const handleClick = (value: string) => {
//     setSelected(value);
//   };

//   const roles = ["top", "mid", "jungle", ""];

//   return (
//     <div className="flex space-x-4">
//       <Button
//         onClick={() => handleClick({ roleName })}
//         variant={selected === roleName ? "default" : "secondary"}
//       >
//         <Image
//           src={`images/${roleeName}.svg`}
//           alt={`${roleName} route icon`}
//           width={15}
//           height={15}
//           unoptimized
//         />
//       </Button>
//     </div>
//   );
// }
