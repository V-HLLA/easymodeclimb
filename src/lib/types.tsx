export type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
  championpickrate: string;
  championbanrate: string;
  role: string;
};

export type ChampionsStats = Champion[];

export type Role =
  | "Top"
  | "Mid"
  | "Jungle"
  | "Bot"
  | "Support"
  | "All"
  | string;
