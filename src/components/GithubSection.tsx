import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function GithubSection() {
  return (
    <section id="github" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="08 · GitHub"
          title="Open Source & Code"
          description="Both projects are public — the code is there to read."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className="h-full">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group h-full flex flex-col transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="size-5 text-muted" />
                  <h3 className="font-mono text-sm font-semibold">
                    {new URL(project.github).pathname.slice(1)}
                  </h3>
                  <ArrowUpRight
                    className="ml-auto size-4 text-subtle transition-colors group-hover:text-accent"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {project.tagline} — {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-lg"
          >
            <GithubIcon className="size-4" /> View GitHub Profile
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
