import { ArrowUpRight, Download, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import CopyEmailButton from "@/components/CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-site">
        <Reveal className="card relative mx-auto max-w-3xl overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(40rem circle at 50% 0%, var(--glow), transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <p className="eyebrow">09 · Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s Build Something Great
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted leading-relaxed">
              {profile.openTo} The fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary btn-lg">
                <Mail className="size-4" aria-hidden /> Email Me
              </a>
              <CopyEmailButton />
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-md"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline btn-md"
              >
                <GithubIcon className="size-4" /> GitHub
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
              <a
                href={profile.resumePath}
                download={profile.resumeFileName}
                className="btn-outline btn-md"
              >
                <Download className="size-4" aria-hidden /> Download Resume
              </a>
            </div>

            <p className="mt-6">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-sm text-subtle transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {profile.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
