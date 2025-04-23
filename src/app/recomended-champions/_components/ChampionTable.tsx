import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  const response = await fetch(`${baseUrl}/api/champions`);
  if (!response.ok) {
    throw new Error("Failed to fetch champions stats");
  }

  const championStats = (await response.json()) as Champion[];
  if (response.ok) {
    console.log(championStats);
  }
  const tableHeadData = [
    // "Tier",
    "Name",
    "Win rate",
    "Pick rate",
    "Ban rate",
    // "Lane",
  ];

  return (
    <Table className="max-w-3xl justify-self-center bg-purple-200 dark:bg-neutral-700 m-2">
      <TableCaption>Champion Tier List Patch:{}</TableCaption>
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
            <TableCell>{champion.championname}</TableCell>
            <TableCell
              className={`${
                Number(champion.championwinrate) >= 52 && "text-green-300"
              } ${Number(champion.championwinrate) <= 50 && "text-red-300"}`}
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
