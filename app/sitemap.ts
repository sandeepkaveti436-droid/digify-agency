import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use your current live domain
  const baseUrl = "https://digify-agency.vercel.app";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
