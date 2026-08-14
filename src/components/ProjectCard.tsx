"use client";

import { Fragment, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Globe } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const MAX_TILT = 3.5;
const FEATURE_PREVIEW_COUNT = 6;

export default function ProjectCard({
  project,
  index,
  onOpenDetails,
}: {
  project: Project;
  index: number;
  onOpenDetails: (p: Project) => void;
}) {
  const reduceMotion = useReducedMotion();

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 220, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 220, damping: 24 });
  const parallaxX = useTransform(rotateY, [-MAX_TILT, MAX_TILT], [-6, 6]);
  const parallaxY = useTransform(rotateX, [-MAX_TILT, MAX_TILT], [6, -6]);

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-py * MAX_TILT * 2);
    tiltY.set(px * MAX_TILT * 2);
  };

  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const previewFeatures = project.keyFeatures.slice(0, FEATURE_PREVIEW_COUNT);
  const hiddenFeatureCount = project.keyFeatures.length - previewFeatures.length;

  return (
    <Reveal delay={index * 0.08}>
      <div style={{ perspective: 1000 }} className="[transform-style:preserve-3d]">
        <motion.div
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={reduceMotion ? undefined : { rotateX, rotateY }}
          className={cn(
            "card group overflow-hidden p-6 transition-colors hover:border-line-strong sm:p-8 lg:p-10",
            "[transform-style:preserve-3d]",
          )}
        >
          <div className="items-center gap-10 lg:grid lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                {project.featured ? (
                  <span className="chip-accent">Featured Project</span>
                ) : null}
                <span className="chip">{project.tagline}</span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {previewFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {hiddenFeatureCount > 0 ? (
                <p className="mt-2 text-xs text-subtle">
                  +{hiddenFeatureCount} more in details
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onOpenDetails(project)}
                  className="btn-primary btn-md"
                >
                  View Details
                  <ArrowRight className="size-4" aria-hidden />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-md"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline btn-md"
                  >
                    <Globe className="size-4" aria-hidden />
                    Live Demo
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden>
              <motion.div
                style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
                className="overflow-hidden rounded-xl border border-line bg-surface-raised shadow-inner"
              >
                <div className="flex gap-1.5 border-b border-line px-4 py-3">
                  <span className="size-2.5 rounded-full bg-line-strong" />
                  <span className="size-2.5 rounded-full bg-line-strong" />
                  <span className="size-2.5 rounded-full bg-line-strong" />
                </div>
                <div className="p-5 font-mono text-xs leading-6">
                  {project.architecture.map((layer, i) => (
                    <Fragment key={layer}>
                      {i > 0 ? <div className="text-subtle">│</div> : null}
                      <div>
                        <span className="text-accent">{">"}</span> {layer}
                      </div>
                    </Fragment>
                  ))}
                  <div className="h-6" />
                  <div className="text-subtle">
                    {"// " + project.technologies.slice(0, 3).join(" · ")}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}
