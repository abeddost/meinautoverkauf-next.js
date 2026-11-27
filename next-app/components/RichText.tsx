import React from 'react';
import Link from 'next/link';

/**
 * Renders content strings with two lightweight inline markers:
 *   **bold**            → <strong>
 *   [Label](/pfad)      → internal <Link>
 * Strings without markers are returned unchanged, so existing content is unaffected.
 */
const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)\s]+)\)$/;

export function renderRichText(text: string): React.ReactNode {
  if (!text.includes('**') && !text.includes('](')) return text;

  return text.split(TOKEN_PATTERN).map((part, index) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(LINK_PATTERN);
    if (link) {
      return (
        <Link key={index} href={link[2]} className="text-brand-orange font-bold hover:underline">
          {link[1]}
        </Link>
      );
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

/** Plain-text version for structured data and meta tags. */
export function stripRichText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');
}
