import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greenbowl-eta.vercel.app";
  const tipIds = [1, 2, 3, 4, 5, 6];
  const lastModified = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/recipe`,
      lastModified,
    },
    {
      url: `${baseUrl}/fridge/tip`,
      lastModified,
    },
    ...tipIds.map((id) => ({
      url: `${baseUrl}/fridge/tip/${id}`,
      lastModified,
    })),
  ];
}
