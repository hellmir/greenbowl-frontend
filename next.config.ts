import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/myFridge",
        permanent: true,
      },
      {
        source: "/myFridge",
        destination: "/myFridge/myIngredient",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
