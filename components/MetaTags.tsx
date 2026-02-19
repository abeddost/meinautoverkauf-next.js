import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, canonicalUrl }) => {
  const fullUrl = `https://meinautoverkauf.de${canonicalUrl || ''}`;
  const defaultOgImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200';
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Meinautoverkauf.de",
    url: "https://meinautoverkauf.de",
    logo: "https://meinautoverkauf.de/logo.webp"
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Meinautoverkauf.de",
    url: "https://meinautoverkauf.de"
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Meinautoverkauf.de" />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:image:alt" content="Auto verkaufen online bei Meinautoverkauf.de" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
      <meta name="twitter:image:alt" content="Auto verkaufen online bei Meinautoverkauf.de" />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default MetaTags;
