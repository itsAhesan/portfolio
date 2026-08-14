import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/utils";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-site py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 font-mono text-xs font-bold text-white"
              >
                AC
              </div>
              <p className="font-medium">{profile.name}</p>
            </div>
            <p className="mt-3 text-sm text-subtle">
              {profile.title.replace(" | ", " · ")}
            </p>
            <p className="mt-1 text-xs text-subtle">{profile.location}</p>
          </div>

          <nav aria-label="Footer sections">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-subtle">
              Sections
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-subtle">
              Connect
            </p>
            <div className="flex flex-col items-start gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                GitHub <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                LinkedIn <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row">
          <p>
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
