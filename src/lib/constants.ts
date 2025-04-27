export const BASEURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://easymode-climb.vercel.app";

export const tableHeadData = [
  // "Tier",
  "Name",
  "Win rate",
  "Pick rate",
  "Ban rate",
  // "Lane",
];

export const EASY_CHAMPS_LIST = [
  // top lane champions
  "Garen",
  "Malphite",
  "Teemo",
  "Jax",
  "Kayle",
  "Wukong",
  "Quinn",
  "Tryndamere",
  "Sion",
  "Nasus",
  "Tahm Kench",
  "Trundle",
  "Pantheon",
  "Dr. Mundo",
  "Cho'Gath",
  // jungle lane champions
  "Volibear",
  "Amumu",
  "Master Yi",
  "Warwick",
  "Nunu & Willump",
  "Rammus",
  "Maokai",
  "Nocturne",
  "Shyvana",
  "Udyr",
  // mid lane champions
  "Veigar",
  "Annie",
  "Malzahar",
  "Swain",
  "Aurelion Sol",
  "Galio",
  "Naafiri",
  "Talon",
  "Twisted Fate",
  // bot lane champions
  "Ashe",
  "Miss Fortune",
  "Sivir",
  "Tristana",
  "Ziggs",
  "Xayah",
  "Jinx",
  // sup lane champions
  "Yuumi",
  "Morgana",
  "Blitzcrank",
  "Seraphine",
  "Lux",
  "Taric",
  "Sona",
  "Nautilus",
  "Soraka",
  "Milio",
  "Zyra",
];
