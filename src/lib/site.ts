/**
 * Canonical site URL used for metadata, Open Graph, robots and the sitemap.
 * After deploying, set NEXT_PUBLIC_SITE_URL in Vercel (or edit the fallback)
 * to your real domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahesan-chowdhury.vercel.app";

export const SITE_NAME = "Ahesan Chowdhury — Portfolio";

export const SITE_TITLE =
  "Ahesan Chowdhury | Java Backend Developer | Software Engineer";

export const SITE_DESCRIPTION =
  "Portfolio of Ahesan Chowdhury, Software Engineer and Java Backend Developer specializing in Java, Spring Boot, REST APIs, Hibernate, JPA, MySQL and AWS.";
