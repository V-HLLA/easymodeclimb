import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ROLES } from "@/lib/constants";
import { ChampionTableProps } from "@/lib/types";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export default function ChampionTable({ data, columns }: ChampionTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table className="max-w-3xl justify-self-center bg-zinc-100 dark:bg-zinc-800 max-sm:text-xs">
      <TableCaption>
        Champion Tier List Patch:{" "}
        <span className="text-violet-600">{data[0]?.patch}</span>
      </TableCaption>
      <TableHeader className="bg-zinc-500 dark:bg-black max-sm:h-fit max-sm:w-fit max-sm:content-center table-header-group">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="max-sm:h-14">
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="text-center text-white p-0 "
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="text-gray-900 dark:text-white">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => {
            const championStats = row.original;
            return (
              <TableRow
                key={championStats.id}
                className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
              >
                <TableCell className="whitespace-pre-wrap max-sm:px-0.5 max-[31rem]:w-16">
                  {championStats.championname}
                </TableCell>
                <TableCell
                  className={`
  ${
    Number(championStats.championwinrate) >= 53
      ? "text-green-700 dark:text-green-600"
      : Number(championStats.championwinrate) >= 52.5
      ? "text-green-500 dark:text-green-300"
      : Number(championStats.championwinrate) <= 51
      ? "text-red-400 dark:text-red-300"
      : ""
  }
  max-sm:p-0 max-[31rem]:w-16
`}
                >
                  {championStats.championwinrate}%
                </TableCell>
                <TableCell className="max-sm:p-0">
                  {championStats.championpickrate}%
                </TableCell>
                <TableCell className="max-sm:p-0">
                  {championStats.championbanrate}%
                </TableCell>
                <TableCell className="grid justify-center">
                  {
                    ROLES.find((role) => role.roleName === championStats.role)
                      ?.svgIcon
                  }
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

// {
//             const championStats = row.original;
//             return (
//               <TableRow
//                 key={championStats.id}
//                 className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
//                 data-state={row.getIsSelected() && "selected"}
//               >
//                 <TableCell className="whitespace-pre-wrap max-sm:px-0.5 max-[30rem]:w-36">
//                   {championStats.championname}
//                 </TableCell>
//                 <TableCell
//                   className={`${
//                     Number(championStats.championwinrate) >= 52 &&
//                     "text-green-500 dark:text-green-300"
//                   } ${
//                     Number(championStats.championwinrate) >= 53 &&
//                     "text-green-700 dark:text-green-600"
//                   } ${
//                     Number(championStats.championwinrate) <= 51 &&
//                     "text-red-400 dark:text-red-300"
//                   } max-sm:px-1`}
//                 >
//                   {championStats.championwinrate}%
//                 </TableCell>
//                 <TableCell>{championStats.championpickrate}%</TableCell>
//                 <TableCell>{championStats.championbanrate}%</TableCell>
//                 <TableCell className="grid justify-center">
//                   {
//                     ROLES.find((role) => role.roleName === championStats.role)
//                       ?.svgIcon
//                   }
//                 </TableCell>
//               </TableRow>
//             );
//           }
