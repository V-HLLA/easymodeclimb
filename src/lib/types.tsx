export type Champion = {
  id: number;
  patch: string;
  championname: string;
  championwinrate: string;
  championpickrate: string;
  championbanrate: string;
  roles: string[];
};

export type ChampionsStats = Champion[];
