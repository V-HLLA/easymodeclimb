import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BASEURL, tableHeadData } from "@/lib/constants";

type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
  championpickrate: string;
  championbanrate: string;
};

export default async function ChampionTable() {
  const response = await fetch(`${BASEURL}/api/easychampions`, {
    cache: "no-store",
  });
  // needs to change to ISR once website dev is over
  // const response = await fetch(`${baseUrl}/api/champions`, {
  //   next: { revalidate: 1296000 },
  // });
  if (!response.ok) {
    return <div>Failed to fetch easy champions stats</div>;
  }

  const championStats = (await response.json()) as Champion[];

  return (
    <Table className="max-w-3xl justify-self-center m-2 bg-zinc-100 dark:bg-zinc-800">
      <TableCaption>
        Champion Tier List Patch: {championStats[0]?.patch}
      </TableCaption>
      <TableHeader className="bg-zinc-500 dark:bg-black">
        <TableRow>
          {tableHeadData.map((label) => (
            <TableHead className="text-center text-white" key={label}>
              {label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="text-gray-900 dark:text-white">
        {championStats.map((champion) => (
          <TableRow
            key={champion.id}
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700"
          >
            {/* <TableCell>{item.championTier}</TableCell> */}
            <TableCell className="whitespace-pre-wrap">
              {champion.championname}
            </TableCell>
            <TableCell
              className={`${
                Number(champion.championwinrate) >= 52 &&
                "text-green-500 dark:text-green-300"
              } ${
                Number(champion.championwinrate) >= 53 &&
                "text-green-700 dark:text-green-600"
              } ${
                Number(champion.championwinrate) <= 51 &&
                "text-red-400 dark:text-red-300"
              }`}
            >
              {champion.championwinrate}%
            </TableCell>
            <TableCell>{champion.championpickrate}%</TableCell>
            <TableCell>{champion.championbanrate}%</TableCell>
            {/* <TableCell>{item.championPreferedLane}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
