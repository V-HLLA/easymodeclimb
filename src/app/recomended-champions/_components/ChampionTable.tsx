import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useId } from "react";

export default function ChampionTable() {
  const tableHeadData = [
    "Tier",
    "Name",
    "Win rate",
    "Pick rate",
    "Ban rate",
    "Lane",
  ];

  const championData = [
    {
      championTier: "S",
      championName: "Miss fortune",
      championWinRate: 52.09,
      championPickRate: 2,
      championBanRate: 6,
      championPreferedLane: "Bottom",
      id: useId(),
    },
  ];

  return (
    <Table className="max-w-3xl justify-self-center bg-purple-200 dark:bg-neutral-700 m-2">
      <TableCaption>Champion Tier List</TableCaption>
      <TableHeader className="bg-neutral-800">
        <TableRow>
          {tableHeadData.map((label) => (
            <TableHead className="text-center" key={label}>
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {championData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.championTier}</TableCell>
            <TableCell>{item.championName}</TableCell>
            <TableCell
              className={`${item.championWinRate >= 52 && "text-green-300"} ${
                item.championWinRate <= 50 && "text-red-300"
              }`}
            >
              {item.championWinRate}%
            </TableCell>
            <TableCell>{item.championPickRate}%</TableCell>
            <TableCell>{item.championBanRate}%</TableCell>
            <TableCell>{item.championPreferedLane}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
