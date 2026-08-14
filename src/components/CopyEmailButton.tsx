"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Copies the contact email to the clipboard with visible + screen-reader feedback. */
export default function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(resetTimeout.current);
      resetTimeout.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — leave the mailto link as fallback.
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className={cn("btn-outline btn-md", className)}
      aria-label={copied ? "Email copied" : `Copy email address ${profile.email}`}
    >
      {copied ? (
        <Check className="size-4 text-accent" aria-hidden />
      ) : (
        <Copy className="size-4" aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
    </button>
  );
}
