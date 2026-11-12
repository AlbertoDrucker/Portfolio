import type { APIRoute } from 'astro';
import { localePath, type Lang } from '../i18n/ui';
import { labProjects } from '../content/lab';
import { caseStudies } from '../content/cases';

/** Every public page in both languages, each with its translation as an alternate. */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://adrucker.vercel.app');
  const slugs = ['', 'lab', 'how-i-work', 'work', 'about', ...caseStudies.en.map((s) => `work/${s.id}`), ...labProjects.map((p) => `lab/${p.slug}`)];
  const today = new Date().toISOString().slice(0, 10);
  const href = (lang: Lang, slug: string) => new URL(localePath(lang, slug), base).href;
  const priority = (slug: string) => (slug === '' ? '1.0' : slug.includes('/') ? '0.7' : '0.8');
  const urls = slugs.flatMap((slug) =>
    (['en', 'es'] as Lang[]).map(
      (lang) => `  <url>
    <loc>${href(lang, slug)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(slug)}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${href('en', slug)}"/>
    <xhtml:link rel="alternate" hreflang="es-MX" href="${href('es', slug)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${href('en', slug)}"/>
  </url>`,
    ),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
