import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectsGrid({ limit }: { limit?: number }) {
  const visible =
    typeof limit === "number" ? projects.slice(0, limit) : projects;
  return (
    <div className="projects-grid">
      {visible.map((p, i) => (
        <Reveal
          key={p.title}
          className={`project-card ${i % 3 === 0 ? "project-card--large" : ""}`}
        >
          <div
            className={`project-image ${i % 3 === 0 ? "project-image--large" : ""}`}
            style={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className="project-meta">
            <div>
              <span>{p.category}</span>
              <h3>{p.title}</h3>
            </div>
            <ArrowUpRight />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
