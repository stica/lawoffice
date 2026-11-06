import type { Metadata } from "next";

export const SITE_URL = "https://www.natasaticalawoffice.com";
export const LOCALES = ["sr", "en"] as const;
export const DEFAULT_LOCALE = "sr";
export const OG_IMAGE = `${SITE_URL}/images/new/logojpg.jpg`;

export const BUSINESS = {
  name: "Advokatska kancelarija Nataša Tica",
  nameEn: "Law Office Nataša Tica",
  attorney: "Nataša Tica",
  telephone: "+38765231276",
  email: "natasa.tica@natasaticalawoffice.com",
  streetAddress: "Jovana Dučića 69",
  postalCode: "78000",
  city: "Banja Luka",
  region: "Republika Srpska",
  country: "BA",
  // Approximate coordinates for Jovana Dučića, Banja Luka — verify against Google Maps pin
  latitude: 44.7666,
  longitude: 17.1873,
  linkedin: "https://www.linkedin.com/in/nata%C5%A1a-tica-302b03153/",
};

type Locale = (typeof LOCALES)[number];
type Localized = { title: string; description: string; keywords?: string[] };

export type PageSeo = {
  path: string; // without locale, "" for home
  sr: Localized;
  en: Localized;
  image?: string;
  type?: "website" | "article";
};

const BASE_KEYWORDS_SR = ["advokat Banja Luka", "advokatska kancelarija Banja Luka", "advokat u Banjoj Luci"];
const BASE_KEYWORDS_EN = ["lawyer Banja Luka", "attorney Banja Luka", "law firm Banja Luka"];

export function buildMetadata(locale: string, page: PageSeo): Metadata {
  const lang: Locale = locale === "en" ? "en" : "sr";
  const t = page[lang];
  const url = `${SITE_URL}/${lang}${page.path}`;
  const image = page.image ? `${SITE_URL}${page.image}` : OG_IMAGE;
  const baseKeywords = lang === "sr" ? BASE_KEYWORDS_SR : BASE_KEYWORDS_EN;

  return {
    title: t.title,
    description: t.description,
    keywords: Array.from(new Set([...(t.keywords ?? []), ...baseKeywords])),
    openGraph: {
      type: page.type ?? "website",
      locale: lang === "sr" ? "sr_BA" : "en_US",
      alternateLocale: lang === "sr" ? ["en_US"] : ["sr_BA"],
      url,
      siteName: "Advokat Banja Luka - Nataša Tica",
      title: t.title,
      description: t.description,
      images: [{ url: image, width: 1200, height: 630, alt: t.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: {
        sr: `${SITE_URL}/sr${page.path}`,
        en: `${SITE_URL}/en${page.path}`,
        "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${page.path}`,
      },
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
};

export const ORG_ID = `${SITE_URL}/#legalservice`;
export const PERSON_ID = `${SITE_URL}/#natasa-tica`;

/** Site-wide structured data: the law office, the attorney and the website. */
export function siteJsonLd(locale: string) {
  const lang = locale === "en" ? "en" : "sr";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": ORG_ID,
        name: BUSINESS.name,
        alternateName: ["Advokat Banja Luka - Nataša Tica", BUSINESS.nameEn, "Lawyer Banja Luka - Nataša Tica"],
        description:
          lang === "sr"
            ? "Advokat u Banjoj Luci — IT pravo, zaštita ličnih podataka (GDPR), privredno, obligaciono, porodično, nasljedno i radno pravo, nekretnine i kripto pravo. Certified Data Protection Officer."
            : "Lawyer in Banja Luka — IT law, data protection (GDPR), commercial, contract, family, inheritance and labour law, real estate and crypto law. Certified Data Protection Officer.",
        url: `${SITE_URL}/${lang}`,
        logo: OG_IMAGE,
        image: OG_IMAGE,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        priceRange: "$$",
        address: postalAddress,
        geo: { "@type": "GeoCoordinates", latitude: BUSINESS.latitude, longitude: BUSINESS.longitude },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.city}`
        )}`,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "16:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Banja Luka" },
          { "@type": "State", name: "Republika Srpska" },
          { "@type": "Country", name: "Bosnia and Herzegovina" },
        ],
        knowsLanguage: ["sr", "en"],
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        sameAs: [BUSINESS.linkedin],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: lang === "sr" ? "Pravne usluge" : "Legal services",
          itemListElement: SERVICE_PAGES.map((p) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: p[lang].title.split(" | ")[0],
              url: `${SITE_URL}/${lang}${p.path}`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: BUSINESS.attorney,
        jobTitle: lang === "sr" ? "Advokat" : "Attorney at law",
        url: `${SITE_URL}/${lang}/o-advokatu`,
        email: BUSINESS.email,
        telephone: BUSINESS.telephone,
        worksFor: { "@id": ORG_ID },
        address: postalAddress,
        hasCredential: "Certified Data Protection Officer (CDPO)",
        sameAs: [BUSINESS.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Advokat Banja Luka - Nataša Tica",
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** Breadcrumb + Service structured data for a practice-area page. */
export function servicePageJsonLd(locale: string, page: PageSeo) {
  const lang = locale === "en" ? "en" : "sr";
  const url = `${SITE_URL}/${lang}${page.path}`;
  const name = page[lang].title.split(" | ")[0];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description: page[lang].description,
        url,
        serviceType: name,
        provider: { "@id": ORG_ID },
        areaServed: [
          { "@type": "City", name: "Banja Luka" },
          { "@type": "State", name: "Republika Srpska" },
        ],
      },
      breadcrumb(lang, [{ name, url }]),
    ],
  };
}

export function articleJsonLd(
  locale: string,
  page: PageSeo,
  opts: { datePublished: string; dateModified?: string }
) {
  const lang = locale === "en" ? "en" : "sr";
  const url = `${SITE_URL}/${lang}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: page[lang].title,
        description: page[lang].description,
        url,
        mainEntityOfPage: url,
        image: page.image ? `${SITE_URL}${page.image}` : OG_IMAGE,
        datePublished: opts.datePublished,
        dateModified: opts.dateModified ?? opts.datePublished,
        inLanguage: lang,
        author: { "@id": PERSON_ID },
        publisher: { "@id": ORG_ID },
      },
      breadcrumb(lang, [
        { name: "Blog", url: `${SITE_URL}/${lang}/blog` },
        { name: page[lang].title, url },
      ]),
    ],
  };
}

export function breadcrumb(lang: string, items: { name: string; url: string }[]) {
  const home = { name: lang === "sr" ? "Advokat Banja Luka" : "Lawyer Banja Luka", url: `${SITE_URL}/${lang}` };
  return {
    "@type": "BreadcrumbList",
    itemListElement: [home, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Per-page SEO copy
// ---------------------------------------------------------------------------

export const HOME_SEO: PageSeo = {
  path: "",
  sr: {
    title: "Advokat Banja Luka | Advokatska kancelarija Nataša Tica",
    description:
      "Advokat Banja Luka — Nataša Tica. Pravna pomoć i savjet za privredno, IT, GDPR, porodično, nasljedno, radno pravo i nekretnine. Jovana Dučića 69, Banja Luka. ☎ +387 65 231-276",
    keywords: [
      "advokat Banja Luka",
      "advokati Banja Luka",
      "advokat u Banjoj Luci",
      "advokatska kancelarija Banja Luka",
      "pravna pomoć Banja Luka",
      "pravni savjet Banja Luka",
      "dobar advokat Banja Luka",
      "advokat Republika Srpska",
      "Nataša Tica advokat",
    ],
  },
  en: {
    title: "Lawyer Banja Luka | Law Office Nataša Tica | Attorney in Banja Luka",
    description:
      "English-speaking lawyer in Banja Luka, Bosnia and Herzegovina — Nataša Tica. Company formation, IT and GDPR, contracts, real estate, family and inheritance law. ☎ +387 65 231-276",
    keywords: [
      "lawyer Banja Luka",
      "attorney Banja Luka",
      "English speaking lawyer Banja Luka",
      "lawyer Bosnia and Herzegovina",
      "lawyer Republika Srpska",
      "advokat Banja Luka",
    ],
  },
};

export const SERVICE_PAGES: PageSeo[] = [
  {
    path: "/privredno-pravo",
    sr: {
      title: "Privredno pravo i osnivanje DOO | Advokat Banja Luka",
      description:
        "Advokat Banja Luka za privredno pravo – osnivanje DOO, registracija firme, korporativno upravljanje, M&A, ugovori i statusne promjene. Brza i stručna podrška u Republici Srpskoj.",
      keywords: ["privredno pravo Banja Luka", "osnivanje DOO Banja Luka", "registracija firme Banja Luka", "osnivanje firme Republika Srpska", "M&A", "korporativno pravo"],
    },
    en: {
      title: "Commercial Law & Company Formation | Lawyer Banja Luka",
      description:
        "Commercial lawyer in Banja Luka – company (LLC/DOO) formation, business registration, corporate governance, M&A and commercial contracts in Republika Srpska and BiH.",
      keywords: ["company formation Bosnia", "register company Banja Luka", "commercial lawyer Banja Luka", "corporate law Bosnia and Herzegovina"],
    },
  },
  {
    path: "/it-pravo",
    sr: {
      title: "IT pravo | Advokat Banja Luka | SaaS, NDA i softverske licence",
      description:
        "Advokat u Banjoj Luci za IT pravo i tehnološke kompanije: softverske licence, NDA, SaaS/PaaS/IaaS ugovori, SLA i zaštita intelektualne svojine u IT sektoru.",
      keywords: ["IT pravo Banja Luka", "IT advokat", "SaaS ugovor", "NDA ugovor", "softverske licence", "intelektualna svojina"],
    },
    en: {
      title: "IT Law | Lawyer Banja Luka | SaaS, NDA & Software Licensing",
      description:
        "IT and technology lawyer in Banja Luka: software licensing, NDAs, SaaS/PaaS/IaaS agreements, SLAs and intellectual property protection for tech companies and startups.",
      keywords: ["IT lawyer Bosnia", "software licensing lawyer", "SaaS agreement", "tech lawyer Banja Luka"],
    },
  },
  {
    path: "/zastita-licnih-podataka-gdpr",
    sr: {
      title: "Zaštita ličnih podataka i GDPR | Advokat Banja Luka | DPO",
      description:
        "Advokat u Banjoj Luci za zaštitu ličnih podataka i GDPR. Certified Data Protection Officer – usklađenost sa Zakonom o zaštiti ličnih podataka BiH, DPO usluge i politike privatnosti.",
      keywords: ["GDPR advokat Banja Luka", "zaštita ličnih podataka", "DPO Banja Luka", "službenik za zaštitu podataka", "Zakon o zaštiti ličnih podataka BiH"],
    },
    en: {
      title: "Data Protection & GDPR | Lawyer Banja Luka | Certified DPO",
      description:
        "GDPR and data protection lawyer in Banja Luka. Certified Data Protection Officer – compliance with the BiH Personal Data Protection Act, outsourced DPO and privacy policies.",
      keywords: ["GDPR lawyer Bosnia", "data protection officer Bosnia", "DPO Banja Luka", "privacy lawyer"],
    },
  },
  {
    path: "/obligaciono-pravo",
    sr: {
      title: "Obligaciono pravo | Advokat Banja Luka | Ugovori i naplata potraživanja",
      description:
        "Advokat u Banjoj Luci za obligaciono pravo: izrada i revizija ugovora, naplata potraživanja, naknada štete, medijacija i zastupanje u sporovima.",
      keywords: ["obligaciono pravo Banja Luka", "izrada ugovora Banja Luka", "naplata potraživanja", "naknada štete advokat"],
    },
    en: {
      title: "Contract Law | Lawyer Banja Luka | Contracts & Debt Collection",
      description:
        "Contract lawyer in Banja Luka: drafting and review of contracts, debt collection, damages claims, mediation and representation in disputes.",
      keywords: ["contract lawyer Banja Luka", "debt collection Bosnia", "contract drafting Bosnia"],
    },
  },
  {
    path: "/nekretnine",
    sr: {
      title: "Advokat za nekretnine Banja Luka | Kupoprodaja i uknjižba",
      description:
        "Advokat za nekretnine u Banjoj Luci: kupoprodaja stanova i kuća, ugovori o zakupu, zemljišnoknjižni upisi, provjera tereta (due diligence) i imovinski sporovi.",
      keywords: ["advokat za nekretnine Banja Luka", "kupoprodajni ugovor stan", "uknjižba Banja Luka", "zemljišnoknjižni upis"],
    },
    en: {
      title: "Real Estate Lawyer Banja Luka | Property Purchase & Registration",
      description:
        "Real estate lawyer in Banja Luka: buying apartments and houses, lease agreements, land registry entries, property due diligence and property disputes.",
      keywords: ["real estate lawyer Banja Luka", "buy property Bosnia", "property lawyer Bosnia and Herzegovina"],
    },
  },
  {
    path: "/nasljedno-pravo",
    sr: {
      title: "Nasljedno pravo | Advokat Banja Luka | Testament i ostavina",
      description:
        "Advokat u Banjoj Luci za nasljedno pravo: izrada testamenta, ostavinski postupak, podjela nasljedstva, nasljednički sporovi i nužni dio.",
      keywords: ["nasljedno pravo Banja Luka", "ostavinski postupak Banja Luka", "testament advokat", "nasljedni sporovi"],
    },
    en: {
      title: "Inheritance Law | Lawyer Banja Luka | Wills & Probate",
      description:
        "Inheritance lawyer in Banja Luka: drafting wills, probate proceedings, division of estates and inheritance disputes, including for heirs living abroad.",
      keywords: ["inheritance lawyer Bosnia", "probate Banja Luka", "will lawyer Bosnia"],
    },
  },
  {
    path: "/porodicno-pravo",
    sr: {
      title: "Porodično pravo | Advokat za razvod Banja Luka | Alimentacija",
      description:
        "Advokat u Banjoj Luci za porodično pravo: razvod braka, starateljstvo i povjeravanje djece, alimentacija, podjela bračne imovine i zaštita od nasilja u porodici.",
      keywords: ["advokat za razvod Banja Luka", "porodično pravo Banja Luka", "razvod braka", "alimentacija", "starateljstvo"],
    },
    en: {
      title: "Family Law | Divorce Lawyer Banja Luka | Custody & Support",
      description:
        "Family lawyer in Banja Luka: divorce, child custody, child support, division of marital property and protection from domestic violence.",
      keywords: ["divorce lawyer Banja Luka", "family lawyer Bosnia", "child custody Bosnia"],
    },
  },
  {
    path: "/radno-pravo",
    sr: {
      title: "Radno pravo | Advokat Banja Luka | Ugovori o radu i otkazi",
      description:
        "Advokat u Banjoj Luci za radno pravo: ugovori o radu, pravilnici i interni akti, otkazi, otpremnine i zastupanje poslodavaca i zaposlenih u radnim sporovima.",
      keywords: ["radno pravo Banja Luka", "advokat za radne sporove", "ugovor o radu", "otkaz ugovora o radu", "otpremnina"],
    },
    en: {
      title: "Labour Law | Lawyer Banja Luka | Employment Contracts & Disputes",
      description:
        "Employment lawyer in Banja Luka: employment contracts, internal rulebooks, dismissals, severance and representation of employers and employees in labour disputes.",
      keywords: ["employment lawyer Banja Luka", "labour law Bosnia"],
    },
  },
  {
    path: "/crypto-pravo",
    sr: {
      title: "Kripto i blockchain pravo | Advokat Banja Luka | Tokenizacija",
      description:
        "Advokat u Banjoj Luci za kripto pravo, blockchain i digitalnu imovinu: kriptovalute, tokenizacija, NFT, DeFi, pametni ugovori i regulatorna usklađenost.",
      keywords: ["kripto pravo", "blockchain advokat", "kriptovalute BiH", "tokenizacija", "digitalna imovina Republika Srpska"],
    },
    en: {
      title: "Crypto & Blockchain Law | Lawyer Banja Luka | Tokenization",
      description:
        "Crypto and blockchain lawyer in Banja Luka: cryptocurrencies, tokenization, NFTs, DeFi, smart contracts and regulatory compliance in Bosnia and Herzegovina.",
      keywords: ["crypto lawyer Bosnia", "blockchain lawyer", "tokenization lawyer"],
    },
  },
];

export const servicePage = (path: string) => SERVICE_PAGES.find((p) => p.path === path)!;

export const STATIC_PAGES: Record<string, PageSeo> = {
  about: {
    path: "/o-advokatu",
    sr: {
      title: "O advokatu Nataši Tici | Advokat Banja Luka",
      description:
        "Nataša Tica – advokat u Banjoj Luci i Certified Data Protection Officer. Iskustvo u privrednom, IT pravu i zaštiti ličnih podataka, predavač i autor stručnih publikacija.",
      keywords: ["Nataša Tica", "Nataša Tica advokat", "advokat Banja Luka biografija"],
    },
    en: {
      title: "About Attorney Nataša Tica | Lawyer Banja Luka",
      description:
        "Nataša Tica – attorney at law in Banja Luka and Certified Data Protection Officer, experienced in commercial law, IT law and data protection.",
      keywords: ["Nataša Tica", "Nataša Tica lawyer"],
    },
  },
  contact: {
    path: "/kontakt",
    sr: {
      title: "Kontakt | Advokat Banja Luka | Jovana Dučića 69",
      description:
        "Kontaktirajte advokata u Banjoj Luci: Jovana Dučića 69, 78000 Banja Luka. Telefon +387 65 231-276, e-mail natasa.tica@natasaticalawoffice.com. Zakažite konsultacije.",
      keywords: ["advokat Banja Luka kontakt", "advokat Banja Luka telefon", "zakazivanje konsultacija advokat"],
    },
    en: {
      title: "Contact | Lawyer Banja Luka | Jovana Dučića 69",
      description:
        "Contact our law office in Banja Luka: Jovana Dučića 69, 78000 Banja Luka. Phone +387 65 231-276, e-mail natasa.tica@natasaticalawoffice.com. Book a consultation.",
      keywords: ["contact lawyer Banja Luka"],
    },
  },
  partners: {
    path: "/partneri",
    sr: {
      title: "Partneri i klijenti | Advokat Banja Luka",
      description: "Kompanije i partneri sa kojima sarađuje advokatska kancelarija Nataša Tica iz Banje Luke.",
    },
    en: {
      title: "Partners & Clients | Lawyer Banja Luka",
      description: "Companies and partners working with the Law Office Nataša Tica in Banja Luka.",
    },
  },
  publications: {
    path: "/publikacije",
    sr: {
      title: "Publikacije, intervjui i predavanja | Advokat Banja Luka",
      description:
        "Stručni radovi, kolumne, intervjui i predavanja advokata Nataše Tice o digitalnoj imovini, kriptovalutama, zaštiti podataka i pravu u Republici Srpskoj.",
    },
    en: {
      title: "Publications, Interviews & Talks | Lawyer Banja Luka",
      description:
        "Articles, columns, interviews and lectures by attorney Nataša Tica on digital assets, crypto, data protection and law in Republika Srpska.",
    },
  },
  blog: {
    path: "/blog",
    sr: {
      title: "Pravni blog | Advokat Banja Luka",
      description:
        "Pravni blog advokata iz Banje Luke: startapi i privredna društva, tokenizacija, zaštita ličnih podataka i aktuelne zakonske izmjene u Republici Srpskoj i BiH.",
    },
    en: {
      title: "Legal Blog | Lawyer Banja Luka",
      description:
        "Legal blog by a Banja Luka attorney: startups and companies, tokenization, data protection and recent legislative changes in Republika Srpska and BiH.",
    },
  },
};

export const BLOG_POSTS: Record<string, PageSeo & { datePublished: string }> = {
  startup: {
    path: "/blog/startup_NIJE_svako_novoosnovano_privredno_drustvo",
    image: "/images/new/startup-legal.png",
    type: "article",
    datePublished: "2026-05-18",
    sr: {
      title: "Startup NIJE svako novoosnovano privredno društvo",
      description:
        "Zakon o inovacionoj djelatnosti RS iz 2025. godine po prvi put definiše pojam startupa. Saznajte zašto pravni okvir nije administrativni teret već infrastruktura za stabilan rast.",
      keywords: ["startup Republika Srpska", "Zakon o inovacionoj djelatnosti", "osnivanje startupa"],
    },
    en: {
      title: "A Startup Is NOT Every Newly Founded Company",
      description:
        "Republika Srpska's 2025 Innovation Activity Act defines a startup for the first time — why the legal framework is infrastructure for growth, not red tape.",
    },
  },
  tokenize: {
    path: "/blog/tokenizuj-svoj-biznis-pretvori-ideju-u-kapital",
    image: "/images/new/tokenization.png",
    type: "article",
    datePublished: "2025-05-04",
    sr: {
      title: "Tokenizuj svoj biznis – Pretvori ideju u kapital",
      description:
        "Saznajte više o tokenizaciji i kako može pomoći vašem poslovanju. Alternativno finansiranje, niži troškovi i veća likvidnost - sve to je moguće kroz tokenizaciju.",
      keywords: ["tokenizacija", "tokenizacija biznisa", "alternativno finansiranje"],
    },
    en: {
      title: "Tokenize Your Business – Turn Your Idea into Capital",
      description:
        "How tokenization can help your business: alternative financing, lower costs and greater liquidity.",
    },
  },
  dpo: {
    path: "/blog/zakon-o-zastiti-licnih-podataka",
    type: "article",
    datePublished: "2025-04-10",
    sr: {
      title: "Zakon o zaštiti ličnih podataka BiH: zašto je imenovanje DPO važno",
      description:
        "Saznajte više o značaju imenovanja službenika za zaštitu podataka (DPO) prema Zakonu o zaštiti ličnih podataka BiH i kako to može uticati na vašu organizaciju.",
      keywords: ["Zakon o zaštiti ličnih podataka BiH", "DPO", "službenik za zaštitu podataka"],
    },
    en: {
      title: "BiH Personal Data Protection Law: Why Appointing a DPO Matters",
      description:
        "Why appointing a Data Protection Officer (DPO) matters under the BiH Personal Data Protection Act and how it affects your organisation.",
    },
  },
};
