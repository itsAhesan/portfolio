/** Join class names, skipping falsy values. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Reference-counted body scroll lock, shared by the mobile menu and the
 * project modal so overlapping open/close sequences can't strand the page
 * in a locked state.
 */
let bodyScrollLocks = 0;

export function lockBodyScroll(): void {
  bodyScrollLocks += 1;
  document.body.style.overflow = "hidden";
}

export function unlockBodyScroll(): void {
  bodyScrollLocks = Math.max(0, bodyScrollLocks - 1);
  if (bodyScrollLocks === 0) document.body.style.overflow = "";
}

/** Section ids used by the navbar, active-section tracking and smooth scroll. */
export const sectionIds = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "expertise",
  "architecture",
  "education",
  "github",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const navItems: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
