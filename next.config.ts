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
};

export default nextConfig;
