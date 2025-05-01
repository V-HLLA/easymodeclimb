import { ColumnDef } from "@tanstack/react-table";

export type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
  championpickrate: string;
  championbanrate: string;
  role: string;
};

export type Role =
  | "Top"
  | "Mid"
  | "Jungle"
  | "Bot"
  | "Support"
  | "All"
  | string;

export type ChampionTableProps = {
  columns: ColumnDef<Champion>[];
  data: Champion[];
};
