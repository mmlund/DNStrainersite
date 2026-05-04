import { Helmet } from "react-helmet-async";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { usePageMeta, buildBreadcrumbJsonLd } from "@/hooks/use-page-meta";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  noindex?: boolean;
  breadcrumbs?: { name: string; url: string }[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  keywords,
  noindex,
  breadcrumbs,
  jsonLd,
}: SEOHeadProps) => {
  const fullCanonical = `${SITE_URL}${canonical}`;

  const breadcrumbSchema = breadcrumbs
    ? buildBreadcrumbJsonLd(breadcrumbs)
    : null;

  // Combine breadcrumb schema with any custom jsonLd from the caller.
  const allJsonLd = [
    ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  // Imperatively keep head tags in sync — guarantees crawlers see the
  // correct title/description/canonical/JSON-LD for the current SPA route
  // even if Helmet hydration is delayed.
  usePageMeta({
    title,
    description,
    canonical,
    noindex,
    jsonLd: allJsonLd.length ? allJsonLd : undefined,
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content="DNS Training North Vancouver" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;
