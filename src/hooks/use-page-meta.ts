import { useEffect } from "react";
import { SITE_URL } from "@/lib/seo";

interface UsePageMetaOptions {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Imperatively manage SEO-critical tags in <head> for an SPA.
 * Updates: document.title, meta[name=description], og:title, og:description,
 * og:url, twitter:title, twitter:description, link[rel=canonical], robots,
 * and one or more JSON-LD <script type="application/ld+json"> blocks.
 *
 * Cleans up only the tags it injected (canonical + JSON-LD) on unmount so the
 * next page can take over without leftover stale structured data.
 */
export function usePageMeta({
  title,
  description,
  canonical,
  noindex,
  jsonLd,
}: UsePageMetaOptions) {
  useEffect(() => {
    const fullCanonical = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical}`
      : undefined;

    // <title>
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (
      selector: string,
      attr: "name" | "property",
      key: string,
      value: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    if (fullCanonical) {
      setMeta('meta[property="og:url"]', "property", "og:url", fullCanonical);
    }
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );

    // robots
    let robotsEl = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    );
    if (noindex) {
      if (!robotsEl) {
        robotsEl = document.createElement("meta");
        robotsEl.setAttribute("name", "robots");
        document.head.appendChild(robotsEl);
      }
      robotsEl.setAttribute("content", "noindex, nofollow");
    } else if (robotsEl) {
      robotsEl.parentNode?.removeChild(robotsEl);
    }

    // canonical
    let canonicalEl: HTMLLinkElement | null = null;
    if (fullCanonical) {
      canonicalEl = document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute("href", fullCanonical);
    }

    // JSON-LD (one script per object)
    const jsonLdBlocks = jsonLd
      ? Array.isArray(jsonLd)
        ? jsonLd
        : [jsonLd]
      : [];
    // Remove any pre-existing JSON-LD blocks injected by this hook (e.g.
    // from a prerendered HTML snapshot) before adding fresh ones to prevent
    // duplicate schemas on hydration.
    document.head
      .querySelectorAll('script[type="application/ld+json"][data-page-meta="true"]')
      .forEach((el) => el.parentNode?.removeChild(el));

    const injectedScripts: HTMLScriptElement[] = [];
    jsonLdBlocks.forEach((block) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-meta", "true");
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
      injectedScripts.push(script);
    });

    return () => {
      document.title = previousTitle;
      injectedScripts.forEach((s) => s.parentNode?.removeChild(s));
    };
  }, [title, description, canonical, noindex, JSON.stringify(jsonLd)]);
}

export function buildBreadcrumbJsonLd(
  breadcrumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url.startsWith("http") ? c.url : `${SITE_URL}${c.url}`,
    })),
  };
}
