// Central sitemap route configuration.
// To add/remove a page from the sitemap, edit this list.
// Pages excluded here (admin, drafts, payment, duplicates) will NOT be indexed.

export type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: ChangeFreq;
}

export const SITE_URL = "https://dnstrainer.com";

// Indexable routes only. Excludes: /payment, /book-session, /booking-terms
export const SITEMAP_ROUTES: SitemapRoute[] = [
  // Home — highest priority
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // Service / Core pages
  { path: "/what-is-dns", priority: 0.9, changefreq: "monthly" },
  { path: "/move-better", priority: 0.9, changefreq: "monthly" },
  { path: "/injury-rehabilitation", priority: 0.9, changefreq: "monthly" },
  { path: "/sports-performance", priority: 0.9, changefreq: "monthly" },
  { path: "/chronic-pain", priority: 0.9, changefreq: "monthly" },
];
