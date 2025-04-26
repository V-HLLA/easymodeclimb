import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableHeadData } from "@/lib/constants";

type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
  championpickrate: string;
  championbanrate: string;
};

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://easymode-climb.vercel.app";

export default async function ChampionTable() {
  const response = await fetch(`${baseUrl}/api/easychampions`, {
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
    <Table className="max-w-3xl justify-self-center bg-purple-200 dark:bg-neutral-700 m-2">
      <TableCaption>
        Champion Tier List Patch: {championStats[0]?.patch}
      </TableCaption>
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
        {championStats.map((champion) => (
          <TableRow key={champion.id}>
            {/* <TableCell>{item.championTier}</TableCell> */}
            <TableCell className="whitespace-pre-wrap">
              {champion.championname}
            </TableCell>
            <TableCell
              className={`${
                Number(champion.championwinrate) >= 52 && "text-green-300"
              } ${Number(champion.championwinrate) >= 53 && "text-green-600"} ${
                Number(champion.championwinrate) <= 51 && "text-red-300"
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
