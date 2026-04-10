import Head from "next/head";

type SeoProps = {
  /** Page title without the site suffix */
  title: string;
  /** 1-2 sentence description */
  description: string;
  /** Path starting with "/" (e.g. "/about") */
  path: string;
  /** Override site URL; defaults to production domain */
  siteUrl?: string;
  /** Absolute image URL for OG/Twitter */
  image?: string;
  /** Set true for pages you don't want indexed */
  noindex?: boolean;
  /** JSON-LD object to embed */
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_SITE_URL = "https://www.georgeonisiforou.com";
const DEFAULT_OG_IMAGE = `${DEFAULT_SITE_URL}/images/app-cover.png`;

export default function Seo({
  title,
  description,
  path,
  siteUrl = DEFAULT_SITE_URL,
  image = DEFAULT_OG_IMAGE,
  noindex,
  jsonLd,
}: SeoProps) {
  const canonical = `${siteUrl}${path}`;
  const fullTitle = `${title} | George Onisiforou`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Head>
  );
}

