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
  "Lane",
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

export const ROLES = [
  {
    roleName: "Top",
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7871.71 7977.56"
        fill="currentColor"
        width="15"
        height="15"
      >
        <g id="Layer_x0020_1">
          <g id="_2914206434640">
            <polygon points="-0,0 -0,7758.64 1380.61,6273.59 1378.98,1424.44 6319.07,1424.44 7713.2,0 " />
            <rect x="3119.27" y="3222.39" width="1751.68" height="1751.68" />
            <polygon points="7871.71,7977.56 7871.71,885.77 6576.8,2243.18 6578.33,6675.55 1944.9,6675.55 637.31,7977.56 " />
            <polygon points="-0,0 -0,7758.64 1380.61,6273.59 1378.98,1424.44 6319.07,1424.44 7713.2,0 " />
          </g>
        </g>
      </svg>
    ),
  },

  {
    roleName: "Jungle",
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7871.7 8524.79"
        fill="currentColor"
        width="15"
        height="15"
      >
        <g id="Layer_x0020_1">
          <g id="_2914202355744">
            <path d="M3898.87 8524.79c-835.63,-898.44 -1673.7,-1726.94 -2514.83,-2453.79 39.92,-1343.39 -324.42,-2583.15 -1384.04,-3644.66 1152.89,535.45 2102.27,1309.84 2606.62,2606.62 275.29,-1048.43 -267.32,-2861.98 -871.88,-4733.51 2005.4,2905.2 3262.49,5715.13 2164.13,8225.33z" />
            <path d="M4832.96 5097.61l429.37 -946.87c-44.04,-1410.83 464.12,-2784.04 1067.97,-4150.74l-2135.93 3397.44 638.59 1700.17z" />
            <path d="M7871.7 2422.18c-1467.31,1025.72 -2345.84,2295.59 -2609.37,3820.45l0 1034.95c396.36,-389.03 792.72,-778.04 1189.08,-1167.07 35.34,-1732.46 592.16,-2866.13 1420.3,-3688.33z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    roleName: "Mid",
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7871.71 7847.24"
        fill="currentColor"
        width="15"
        height="15"
      >
        <g id="Layer_x0020_1">
          <g id="_2950364995600">
            <polygon points="-0,7847.24 -0,6410.74 6411.77,0 7871.71,0 7871.71,1523.5 1497.77,7847.24 " />
            <polygon points="7865.38,7847.24 7865.38,2796.03 6664.16,3915.07 6664.16,6652.22 3936.46,6652.22 2722.33,7847.24 " />
            <polygon points="-0,0 -0,5051.21 1201.21,3932.17 1201.21,1195.02 3928.92,1195.02 5143.05,0 " />
          </g>
        </g>
      </svg>
    ),
  },
  {
    roleName: "Bot",
    svgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7871.71 7977.57"
        fill="currentColor"
        width="15"
        height="15"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2914208719376">
            <polygon points="7871.71,7977.57 7871.71,218.92 6491.1,1703.97 6492.73,6553.12 1552.64,6553.12 158.51,7977.57 " />
            <rect x="3000.76" y="3003.5" width="1751.68" height="1751.68" />
            <polygon points="-0,0 -0,7091.8 1294.91,5734.39 1293.38,1302.02 5926.81,1302.02 7234.4,0 " />
            <polygon points="7871.71,7977.57 7871.71,218.92 6491.1,1703.97 6492.73,6553.12 1552.64,6553.12 158.51,7977.57 " />
          </g>
        </g>
      </svg>
    ),
  },
  {
    roleName: "Support",
    svgIcon: (
      // support icon
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7871.71 6591.11"
        fill="currentColor"
        width="15"
        height="15"
      >
        <g id="Layer_1">
          <g id="_2914228572672">
            <polygon points="3716.12,2518.11 4234.45,2518.11 4869.38,5897.57 3974.86,6591.11 3042.8,5897.57" />
            <polygon points="0,1417.38 2527.22,1417.36 3258.04,2137.04 2789.42,3771.65 1629.01,3303.03 2309.64,2360.19 1461.66,2365.78" />
            <polygon points="7871.71,1417.38 5344.49,1417.36 4613.67,2137.04 5082.29,3771.65 6242.7,3303.03 5562.07,2360.19 6410.05,2365.78" />
            <path d="M3974.86 0h-953.78l-221.33 437.01 1175.12 1390.51V0zm0 0h953.78l221.33 437.01-1175.12 1390.51V0z" />
          </g>
        </g>
      </svg>
    ),
  },
];
