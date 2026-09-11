import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sectors, getSector } from "@/data/sectors";
import { EditorialLayout } from "@/components/sectors/EditorialLayout";
import { TechnicalLayout } from "@/components/sectors/TechnicalLayout";
import { CommerceLayout } from "@/components/sectors/CommerceLayout";
import { ServiceLayout } from "@/components/sectors/ServiceLayout";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: sector.name,
    description: sector.description,
    openGraph: {
      title: `${sector.name} — NEXIS GROUPE`,
      description: sector.description,
    },
  };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const currentIndex = sectors.findIndex((item) => item.slug === sector.slug);
  const next = sectors[(currentIndex + 1) % sectors.length];

  switch (sector.visualMode) {
    case "editorial":
      return <EditorialLayout sector={sector} next={next} />;
    case "technical":
      return <TechnicalLayout sector={sector} next={next} />;
    case "commerce":
      return <CommerceLayout sector={sector} next={next} />;
    case "service":
      return <ServiceLayout sector={sector} next={next} />;
    default:
      return <EditorialLayout sector={sector} next={next} />;
  }
}
