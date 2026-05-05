// Central sitemap route configuration.
export type ChangeFreq =
  | "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
}

export const SITE_URL = "https://dnstrainer.com";

export const SITEMAP_ROUTES: SitemapRoute[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/what-is-dns", priority: 0.9, changefreq: "monthly" },
  { path: "/chronic-pain-movement-assessment", priority: 0.9, changefreq: "monthly" },
  { path: "/performance-longevity-dns", priority: 0.9, changefreq: "monthly" },
  { path: "/dns-breathing-training", priority: 0.9, changefreq: "monthly" },
  { path: "/posture", priority: 0.8, changefreq: "monthly" },
  { path: "/core-stability", priority: 0.8, changefreq: "monthly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/book-session", priority: 0.6, changefreq: "monthly" },
];
