import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/favicons/icon1.png",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=86400, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/favicons/icon0.svg",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=86400, immutable",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/manifest.json",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=86400, immutable",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
