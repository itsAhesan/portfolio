"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Featured Projects"
          description="Systems I designed and built end to end. Every highlight below is taken from the source — the code is on GitHub."
        />
        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpenDetails={(project) => setActive(project)}
            />
          ))}
        </div>
        <ProjectModal project={active} onClose={() => setActive(null)} />
      </div>
    </section>
  );
}
