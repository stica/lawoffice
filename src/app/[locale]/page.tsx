// app/[lang]/page.tsx
import { Suspense, lazy } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import MainBanner from "@/components/AppComponents/MainBanner";

// Lazy load non-critical components
const Services = lazy(() => import("@/components/AppComponents/Services"));
const PartnerTwo = lazy(() => import("@/components/AppComponents/PartnerTwo"));
const Footer = lazy(() => import("@/components/Layouts/Footer"));

// Loading fallbacks
const LoadingFallback = () => <div className="loading-placeholder">Loading...</div>;

export const metadata = {
  title: "Advokat Banja Luka | Nataša Tica | IT, GDPR, Privredno i Porodično pravo",
  description: "Advokat u Banjoj Luci - Nataša Tica. Stručna pravna pomoć: IT pravo, GDPR (Certified Data Protection Officer), privredno, obligaciono, porodično, nasljedno i radno pravo. Jevrejska 24, Banja Luka. ☎ +387 65 231-276",
  keywords: [
    "advokat Banja Luka",
    "advokat",
    "Banja Luka",
    "advokatska kancelarija Banja Luka",
    "pravna pomoć Banja Luka",
    "pravni savjet",
    "IT pravo Banja Luka",
    "GDPR advokat Banja Luka",
    "privredno pravo Banja Luka",
    "porodično pravo Banja Luka",
    "nasljedno pravo Banja Luka",
    "radno pravo Banja Luka",
    "advokat za nekretnine Banja Luka",
    "advokat Republika Srpska",
    "lawyer Banja Luka",
    "attorney Banja Luka",
    "Nataša Tica advokat",
  ],
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://www.natasaticalawoffice.com/sr',
    siteName: 'Advokat Banja Luka - Nataša Tica',
    title: "Advokat Banja Luka | Nataša Tica | IT, GDPR, Privredno pravo",
    description: "Advokat u Banjoj Luci sa iskustvom u IT pravu, GDPR-u, privrednom i porodičnom pravu. Certified Data Protection Officer. Kontakt: +387 65 231-276",
    images: [
      {
        url: 'https://www.natasaticalawoffice.com/images/new/logojpg.jpg',
        width: 1200,
        height: 630,
        alt: 'Advokat Banja Luka - Advokatska kancelarija Nataša Tica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Advokat Banja Luka | Nataša Tica",
    description: "Stručna pravna pomoć - IT pravo, GDPR, privredno, porodično i nasljedno pravo u Banjoj Luci.",
    images: ['https://www.natasaticalawoffice.com/images/new/logojpg.jpg'],
  },
  alternates: {
    canonical: 'https://www.natasaticalawoffice.com/sr',
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en',
      'sr': 'https://www.natasaticalawoffice.com/sr',
    },
  },
};

const supportedLanguages = ['en', 'sr'];

export default async function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <MainBanner messages={messages} lang={lang}/>
      <div id="main-content" style={{ minHeight: '100vh' }}>
        <Suspense fallback={<LoadingFallback />}>
          <Services messages={messages} locale={lang} />
          <PartnerTwo messages={messages} />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

// Optimize messages fetching with caching
async function fetchMessages(locale: string) {
  try {
    const messages = await import(`../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const defaultMessages = await import(`../../dictionaries/en.json`);
    return defaultMessages.default;
  }
}

export const generateStaticParams = () => [
  { lang: 'en' },
  { lang: 'sr' },
];

// Add page-level metadata
// export const generateMetadata = ({ params }: { params: { locale: string } }) => ({
//   alternates: {
//     languages: {
//       [params.locale]: `https://www.natasaticalawoffice.com/${params.locale}`,
//     },
//   },
// });