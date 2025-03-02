import route from "@/constants/route";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: route.onboarding.root,
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
      {
        protocol: "http",
        hostname: "img1.kakaocdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
