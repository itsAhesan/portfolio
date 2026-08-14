"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Download,
  MapPin,
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const GRADIENT_TAIL = "Java & Spring";

const CORE_STACK = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Spring Data JPA",
  "Hibernate",
  "MySQL",
  "AWS S3",
].join(" · ");

const floatingTokens: { label: string; position: string; delay: string }[] = [
  { label: "Spring Boot", position: "left-[6%] top-[22%]", delay: "0s" },
  { label: "REST API", position: "right-[8%] top-[17%]", delay: "-1.5s" },
  { label: "{ Java }", position: "right-[5%] top-[44%]", delay: "-3s" },
  { label: "MySQL", position: "left-[10%] bottom-[26%]", delay: "-4.5s" },
  { label: "JPA", position: "right-[13%] bottom-[20%]", delay: "-6s" },
  { label: "CI/CD", position: "left-[4%] top-[54%]", delay: "-7.5s" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const heading: string = profile.heroHeading;
  const tailStart = heading.lastIndexOf(GRADIENT_TAIL);
  const headingLead = tailStart === -1 ? heading : heading.slice(0, tailStart);
  const headingTail = tailStart === -1 ? "" : heading.slice(tailStart);

  const locationParts = profile.location.split(", ");
  const shortLocation =
    locationParts.length > 1
      ? `${locationParts[0]}, ${locationParts[locationParts.length - 1]}`
      : profile.location;

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        {/* Gradient blobs */}
        <div className="absolute -top-24 -right-24 size-[28rem] rounded-full bg-sky-500/10 blur-3xl animate-float-slow dark:bg-sky-500/15" />
        <div className="absolute -bottom-28 -left-24 size-[26rem] rounded-full bg-blue-600/10 blur-3xl animate-float-slow [animation-delay:-4s]" />

        {/* Faint engineering grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 55%, transparent 100%)",
          }}
        />

        {/* API request lines */}
        <svg
          className="absolute inset-x-0 top-1/3 h-64 w-full opacity-30"
          viewBox="0 0 1200 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 C 300 20, 500 180, 720 120 S 1050 60, 1200 110"
            stroke="var(--line-strong)"
            strokeWidth="1"
            strokeDasharray="6 6"
            className="animate-dash-flow"
          />
          <path
            d="M0 220 C 250 260, 550 140, 800 200 S 1080 250, 1200 180"
            stroke="var(--line-strong)"
            strokeWidth="1"
            strokeDasharray="6 6"
            className="animate-dash-flow"
            style={{ animationDelay: "-0.8s" }}
          />
        </svg>

        {/* Floating tech tokens */}
        <div className="hidden lg:block">
          {floatingTokens.map((token) => (
            <span
              key={token.label}
              className={cn(
                "chip absolute bg-surface/70 font-mono opacity-70 animate-float-slow",
                token.position,
              )}
              style={{ animationDelay: token.delay }}
            >
              {token.label}
            </span>
          ))}
        </div>
      </div>

      <div className="container-site">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          {/* Status row */}
          <motion.div
            variants={item}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="chip">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Open to Java Backend Developer roles
            </span>
            <span className="chip">
              <MapPin className="size-3.5" aria-hidden />
              {shortLocation}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {headingLead}
            {headingTail ? (
              <span className="text-gradient">{headingTail}</span>
            ) : null}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.heroSubtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <a href="#projects" className="btn-primary btn-lg">
                View My Projects
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </MagneticButton>
            <a
              href={profile.resumePath}
              download={profile.resumeFileName}
              className="btn-outline btn-lg"
            >
              <Download className="size-4" aria-hidden />
              Download Resume
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-lg"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-lg"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </motion.div>

          {/* Core stack line */}
          <motion.p variants={item} className="mt-14 font-mono text-xs text-subtle">
            {CORE_STACK}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full p-1 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:block"
      >
        <motion.span
          className="flex"
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="size-5 text-subtle" aria-hidden />
        </motion.span>
      </a>
    </section>
  );
}
