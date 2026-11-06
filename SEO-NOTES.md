# SEO notes — 2026-11-06

Summary of the SEO review and changes made to natasaticalawoffice.com, with the goal of ranking higher for **"Advokat Banja Luka"**.

## What was changed

All SEO text and business data now live in one file: **`src/lib/seo.ts`**. It is not a page and visitors never see it. Each page file calls `buildMetadata(...)` from it to get its title, description, canonical, hreflang and Open Graph tags.

To change how a page appears in Google, edit that page's entry in `seo.ts`:
- `HOME_SEO`: homepage
- `SERVICE_PAGES`: practice areas (privredno, IT, GDPR, obligaciono, nekretnine, nasljedno, porodično, radno, kripto)
- `STATIC_PAGES`: o-advokatu, kontakt, partneri, publikacije, blog
- `BLOG_POSTS`: individual blog posts
- `BUSINESS`: address, phone, email, coordinates, LinkedIn (change these in one place)

### Bugs fixed
1. **Five pages told Google they were copies of the homepage.** The layout set a site-wide canonical to the homepage, so Kontakt, O advokatu, Partneri, Publikacije and Blog were being ignored. Every page now has its own canonical.
2. **`/en` showed Serbian titles with a `/sr` canonical.** All pages now have real English titles and descriptions.
3. **`<html lang>` was always empty.** It's now set to `sr` or `en`.
4. **The sitemap had broken hreflang links** (e.g. `/en/it-pravo/en/it-pravo`) and was missing the newest blog post. Both are fixed, and `x-default` was added (36 URLs).
5. **The old address (Jevrejska 24) was in the structured data and dictionaries.** It's replaced with **Jovana Dučića 69** everywhere.
6. **The business schema was duplicated 2–3 times per page.** It's now one clean block: law office, attorney, website, opening hours, services.

### Pushing "Advokat Banja Luka"
- Homepage title and description rewritten around that phrase.
- Practice pages target local searches ("Advokat za nekretnine Banja Luka", "Advokat za razvod Banja Luka", "Osnivanje DOO").
- Short intro paragraph added under "Naše usluge" on the homepage (`Services.seoIntro` in the dictionaries).
- Breadcrumb and service schema on practice pages, article schema on blog posts.

## Will it help?

Yes, but gradually. The canonical fix matters most: five pages can now rank on their own. The English pages can now show up for "lawyer Banja Luka". Titles, descriptions and schema help Google understand the site but won't move it to the top on their own.

For a local, competitive search like "advokat Banja Luka", the **map results** matter most. They depend on:
1. **Google Business Profile:** correct address, category "Advokat", photos, opening hours
2. **Reviews:** how many, how good, how recent
3. **Links and mentions** from other sites: directories, the Bar Association listing, media, partners
4. **Regular new content:** blog posts on topics people search for, e.g. "kako osnovati DOO u RS", "ostavinski postupak Banja Luka"

Expect a few weeks for Google to re-crawl, and ranking changes over 1–3 months. No one can guarantee a #1 spot.

## To do (owner)
- [ ] Check the map coordinates in `BUSINESS` (`src/lib/seo.ts`); they are estimated for Jovana Dučića.
- [ ] Update the address in Google Business Profile; ask clients for reviews.
- [ ] Verify the site in Google Search Console (placeholder in `src/app/[locale]/layout.tsx`), submit `sitemap.xml`, request re-indexing.
- [ ] **Security:** `.env.production` with the real email password is committed to git. Change the password, remove the file from the repo, add it to `.gitignore`.
