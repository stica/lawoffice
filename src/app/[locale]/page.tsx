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
  title: "Advokatska Kancelarija Nataša Tica – Advokat Banja Luka",
  description: "Advokatska Kancelarija Nataša Tica: Pravna pomoć i zastupanje u radnom, obligacionom, IT, porodičnom, nasljednom i privrednom pravu. Kontaktirajte nas!",
};

const supportedLanguages = ['en', 'sr'];

export default async function Home({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <MainBanner messages={messages} />
      <div id="main-content" style={{ minHeight: '100vh' }}>
        <Suspense fallback={<LoadingFallback />}>
          <Services messages={messages} />
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