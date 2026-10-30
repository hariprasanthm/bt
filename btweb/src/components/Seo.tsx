import { COMPANY } from '@/constants/company';
import { Helmet } from '@umijs/max';
import React from 'react';

const SITE_URL = COMPANY.websiteUrl;
const SITE_NAME = COMPANY.name;
const DEFAULT_IMAGE = `${SITE_URL}${COMPANY.logoUrl}`;

export type SeoProps = {
  /** Page title without the site suffix, e.g. "About Us" */
  title: string;
  /** Optional brand name used in titles and social metadata */
  siteName?: string;
  /** Meta description, ideally 140-160 characters */
  description: string;
  /** Route path used for the canonical URL, e.g. "/about" */
  path: string;
  /** Comma-separated keywords (optional) */
  keywords?: string;
  /** Absolute URL of the social share image */
  image?: string | null;
  /** Open Graph type, defaults to "website" */
  type?: 'website' | 'article';
  /** Set on private/utility pages that must not be indexed */
  noindex?: boolean;
  /** Optional JSON-LD structured data */
  jsonLd?: Record<string, any>;
};

const Seo: React.FC<SeoProps> = ({
  title,
  siteName = SITE_NAME,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}) => {
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image ? <meta property="og:image" content={image} /> : null}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image} /> : null}
      {jsonLd ? <script type="application/ld+json">{JSON.stringify(jsonLd)}</script> : null}
    </Helmet>
  );
};

export default Seo;
