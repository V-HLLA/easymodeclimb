import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ROLES, tableHeadData } from "@/lib/constants";
import { ChampionsStats } from "@/lib/types";

type ChampionTableProps = {
  data: ChampionsStats;
};

export default function ChampionTable({ data }: ChampionTableProps) {
  return (
    <Table className="max-w-3xl justify-self-center m-2 bg-zinc-100 dark:bg-zinc-800 max-sm:text-xs">
      <TableCaption>Champion Tier List Patch: {data[0]?.patch}</TableCaption>
      <TableHeader className="bg-zinc-500 dark:bg-black">
        <TableRow>
          {tableHeadData.map((label) => (
            <TableHead
              className="text-center text-white max-sm:px-0 w-16"
              key={label}
            >
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-gray-900 dark:text-white">
        {data.map((championStats) => (
          <TableRow
            key={championStats.id}
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
          >
            {/* <TableCell>{item.championTier}</TableCell> */}
            <TableCell className="whitespace-pre-wrap max-sm:px-0 max-sm:w-16">
              {championStats.championname}
            </TableCell>
            <TableCell
              className={`${
                Number(championStats.championwinrate) >= 52 &&
                "text-green-500 dark:text-green-300"
              } ${
                Number(championStats.championwinrate) >= 53 &&
                "text-green-700 dark:text-green-600"
              } ${
                Number(championStats.championwinrate) <= 51 &&
                "text-red-400 dark:text-red-300"
              } max-sm:px-1`}
            >
              {championStats.championwinrate}%
            </TableCell>
            <TableCell>{championStats.championpickrate}%</TableCell>
            <TableCell>{championStats.championbanrate}%</TableCell>
            <TableCell className="grid justify-center">
              {
                ROLES.find((role) => role.roleName === championStats.role)
                  ?.svgIcon
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
