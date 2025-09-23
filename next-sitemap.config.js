// next-sitemap.config.js
/**
 * This configuration generates sitemap.xml and robots.txt into the public/ folder.
 * We explicitly enumerate localized routes using additionalPaths so both
 * Serbian (sr) and English (en) URLs are included after build.
 */

const siteUrl = 'https://www.natasaticalawoffice.com'
const locales = ['en', 'sr']

// Top-level and section routes (without leading slash). Empty string for locale root.
const staticPaths = [
  '',
  'o-advokatu',
  'partneri',
  'kontakt',
  'publikacije',
  'blog',
]

// Law pages (without leading slash)
const lawPaths = [
  'it-pravo',
  'crypto-pravo',
  'zastita-licnih-podataka-gdpr',
  'privredno-pravo',
  'obligaciono-pravo',
  'nekretnine',
  'nasljedno-pravo',
  'porodicno-pravo',
  'radno-pravo',
]

// Known blog post slugs (without leading slash)
const blogPosts = [
  'tokenizuj-svoj-biznis-pretvori-ideju-u-kapital',
  'zakon-o-zastiti-licnih-podataka',
]

module.exports = {
  siteUrl,
  // Keep your hand-authored robots.txt; do not overwrite it
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  outDir: './public',
  exclude: [],
  // Force a single sitemap file (no index or numbered files)
  generateIndexSitemap: false,
  autoLastmod: true,

  // Ensure homepage and locale roots get higher priority
  transform: async (config, path) => {
    const isHome = path === '/' || path === '/en' || path === '/sr'
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: isHome ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  // Explicitly enumerate localized routes so they always appear in the sitemap
  additionalPaths: async (config) => {
    const entries = []
    const now = new Date().toISOString()

    const pushPath = (loc, priority = 0.8, changefreq = 'weekly') => {
      entries.push({ loc, lastmod: now, priority, changefreq })
    }

    for (const locale of locales) {
      for (const seg of staticPaths) {
        const loc = seg ? `/${locale}/${seg}` : `/${locale}`
        pushPath(loc, seg === '' ? 1.0 : 0.8)
      }

      for (const seg of lawPaths) {
        pushPath(`/${locale}/${seg}`, 0.8)
      }

      for (const slug of blogPosts) {
        pushPath(`/${locale}/blog/${slug}`, 0.6, 'monthly')
      }
    }

    return entries
  },
}
  