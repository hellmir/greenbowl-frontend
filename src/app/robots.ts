import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://greenbowl-eta.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/fridge/tip/*", "/recipe/*", "/onboarding/*", "/login/*"],
        disallow: [
          "/api/*",
          "/_next/*",
          "/my-page/*",
          "/fridge/my-ingredient/*",
          "/fridge/add-ingredient",
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}
