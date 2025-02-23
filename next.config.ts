import route from "@/constants/route";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: route.recipe.root,
        permanent: false,
      },
      {
        source: route.myFridge.root,
        destination: route.myFridge.myIngredient,
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
