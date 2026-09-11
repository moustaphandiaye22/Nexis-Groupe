import type { MetadataRoute } from "next";
import { sectors } from "@/data/sectors";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nexisgroupe.com";
  return [
    "",
    "/groupe",
    "/activites",
    "/realisations",
    "/actualites",
    "/contact",
    ...sectors.map((s) => `/activites/${s.slug}`),
  ].map((url) => ({
    url: `${base}${url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: url === "" ? 1 : 0.8,
  }));
}
