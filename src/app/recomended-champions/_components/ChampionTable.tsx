"use client";
import Loading from "@/app/Loading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
};

export default function ChampionTable() {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const tableHeadData = [
    // "Tier",
    "Name",
    "Win rate",
    // "Pick rate",
    // "Ban rate",
    // "Lane",
  ];

  useEffect(() => {
    const fetchChamps = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/champions");
        const data = await res.json();
        setChampions(data);
      } catch (err) {
        console.error("Failed to fetch champions", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChamps();
  }, []);

  if (isLoading) return <Loading />;

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
        {champions.map((champion) => (
          <TableRow key={champion.id}>
            {/* <TableCell>{item.championTier}</TableCell> */}
            <TableCell>{champion.championname}</TableCell>
            <TableCell
              className={`${
                Number(champion.championwinrate) >= 52 && "text-green-300"
              } ${Number(champion.championwinrate) <= 50 && "text-red-300"}`}
            >
              {champion.championwinrate}%
            </TableCell>
            {/* <TableCell>{item.championPickRate}%</TableCell>
            <TableCell>{item.championBanRate}%</TableCell>
            <TableCell>{item.championPreferedLane}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
