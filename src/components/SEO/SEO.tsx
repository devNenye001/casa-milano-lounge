import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  image?: string;
  type?: 'website' | 'restaurant' | 'article';
  schema?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'Casa Milano Lounge | Premium Lounge, Restaurant & Nightclub in Minna';
const DEFAULT_DESCRIPTION =
  'Experience luxury dining, signature cocktails, vibrant nightlife, swimming pool parties, and exclusive events at Casa Milano Lounge in Minna, Niger State.';
const DEFAULT_IMAGE = '/event-page-banner.jpg';
const SITE_URL = 'https://casa-milano-lounge.vercel.app';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [
    'Casa Milano',
    'Casa Milano Lounge',
    'Casa Milano Minna',
    'Lounge in Minna',
    'Restaurant in Minna',
    'Nightclub Minna',
    'Minna nightlife',
    'Pool party Minna',
    'Dining in Niger State',
    'Cocktail bar Minna',
    'VIP lounge Minna',
    'Event venue Minna',
  ],
  canonicalPath = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
}) => {
  const fullTitle = title
    ? `${title} | Casa Milano Lounge`
    : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace(/[\[\]"]/g, '').split('=');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper for link tags (canonical)
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[name="keywords"]', 'content', keywords.join(', '));
    updateMeta('meta[name="author"]', 'content', 'Casa Milano Lounge');
    updateMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large');

    // Canonical
    updateLink('canonical', canonicalUrl);

    // Open Graph Tags
    updateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:type"]', 'content', type);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
    updateMeta('meta[property="og:image"]', 'content', fullImageUrl);
    updateMeta('meta[property="og:site_name"]', 'content', 'Casa Milano Lounge');
    updateMeta('meta[property="og:locale"]', 'content', 'en_NG');

    // Twitter Card Tags
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', 'content', fullTitle);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    updateMeta('meta[name="twitter:image"]', 'content', fullImageUrl);

    // Dynamic JSON-LD Structured Data
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, keywords, canonicalUrl, fullImageUrl, type, schema]);

  return null;
};

export default SEO;
