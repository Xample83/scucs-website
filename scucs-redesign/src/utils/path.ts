/**
 * Prefix an internal path with Astro's configured `base`.
 * Required so links work on GitHub Pages (e.g. /scucs-website/donate).
 * Leave external, mailto, tel, and hash links unchanged.
 */
export function path(href: string): string {
  if (
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("data:")
  ) {
    return href;
  }

  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
  const normalized = href.startsWith("/") ? href.slice(1) : href;
  return `${base}${normalized}`;
}
