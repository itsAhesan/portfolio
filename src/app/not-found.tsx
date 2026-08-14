import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found | Ahesan Chowdhury",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-5 px-6 text-center">
      <p className="font-mono text-7xl font-semibold text-gradient">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-muted">
        This page doesn&apos;t exist. The portfolio lives on the home page.
      </p>
      <Link href="/" className="btn-primary btn-lg">
        <ArrowLeft className="size-4" aria-hidden /> Back to portfolio
      </Link>
    </main>
  );
}
