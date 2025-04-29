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
        xmlSpace="preserve"
        width="15px"
        height="15px"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 15 15.2"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2271745442864">
            <polygon
              fill="currentColor"
              points="0,0 0,14.78 2.63,11.95 2.63,2.71 12.04,2.71 14.69,0 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="5.94,6.14 9.28,6.14 9.28,9.48 5.94,9.48 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="15,15.2 15,1.69 12.53,4.27 12.53,12.72 3.71,12.72 1.21,15.2 "
            />
            <polygon
              fill="currentColor"
              points="0,0 0,14.78 2.63,11.95 2.63,2.71 12.04,2.71 14.69,0 "
            />
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
        xmlSpace="preserve"
        width="15px"
        height="15px"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 15 14.95"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2271476979712">
            <polygon
              fill="currentColor"
              points="0,14.95 0,12.21 12.21,0 15,0 15,2.9 2.85,14.95 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="14.98,14.95 14.98,5.33 12.7,7.46 12.7,12.67 7.5,12.67 5.19,14.95 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="0,0 0,9.62 2.29,7.49 2.29,2.28 7.48,2.28 9.8,0 "
            />
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
        xmlSpace="preserve"
        width="15px"
        height="15px"
        version="1.1"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 15 15.2"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer" />
          <g id="_2271746213664">
            <polygon
              fill="currentColor"
              points="15,15.2 15,0.42 12.37,3.25 12.37,12.48 2.96,12.48 0.3,15.2 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="9.05,9.06 5.72,9.06 5.72,5.72 9.05,5.72 "
            />
            <polygon
              fill="currentColor"
              fillOpacity="0.50"
              points="0,0 0,13.51 2.47,10.92 2.46,2.48 11.29,2.48 13.78,0 "
            />
            <polygon
              fill="currentColor"
              points="15,15.2 15,0.42 12.37,3.25 12.37,12.48 2.96,12.48 0.3,15.2 "
            />
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
