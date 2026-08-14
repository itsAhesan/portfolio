import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Briefcase, Clock, Mail, Languages as LanguagesIcon, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const facts: { icon: LucideIcon; label: string; value: ReactNode }[] = [
  {
    icon: Briefcase,
    label: "Currently",
    value: "Software Engineer at Trigent Software",
  },
  {
    icon: Clock,
    label: "Experience",
    value: "Close to 2 years",
  },
  {
    icon: Mail,
    label: "Email",
    value: (
      <a
        href={`mailto:${profile.email}`}
        className="break-all rounded-sm transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        {profile.email}
      </a>
    ),
  },
  {
    icon: LanguagesIcon,
    label: "Languages",
    value: profile.languages.map((lang) => lang.name).join(" · "),
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-site">
        <SectionHeading eyebrow="01 · About" title="About Me" />
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal>
            <div className="relative w-full max-w-[320px]">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-accent/10 blur-2xl"
                aria-hidden
              />
              <Image
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={800}
                height={800}
                sizes="(min-width: 768px) 320px, 80vw"
                className="relative aspect-square w-full max-w-[320px] rounded-3xl border border-line object-cover"
              />
            </div>
            <p className="chip mt-4">
              <MapPin className="size-3.5" aria-hidden />
              {profile.location}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="card flex items-start gap-3 p-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <fact.icon className="size-4" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-subtle">{fact.label}</p>
                    <p className="mt-0.5 text-sm font-medium">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
