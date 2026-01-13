import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import ItLaw from "@/components/LawTypes/ItLaw";

const supportedLanguages = ['en', 'sr']; // List of supported languages

export default async function Page({ params }: { params: { locale: string } }) {

  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';  
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />

      <ItLaw messages={messages} locale={lang} />

      <Footer />
    </>
  );
}

// Fetch messages for the given locale
async function fetchMessages(locale: string) {

  try {
    const messages = await import(`../../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to a default locale (e.g., 'en')
    const defaultMessages = await import(`../../../dictionaries/en.json`);
    return defaultMessages.default;
  }
}

// Generate static paths for all supported locales
export async function generateStaticParams() {
  return [
    { lang: 'en' }, // Pre-render English page
    { lang: 'sr' }, // Pre-render Spanish page
  ];
}

export const metadata = {
    title: "IT pravo | Advokat Banja Luka | SaaS, NDA, Softverske licence i IT ugovori",
    description: "Advokat u Banjoj Luci specijalizovan za IT pravo i tehnološke kompanije. Pružamo pravnu podršku za softverske licence, NDA ugovore, SaaS, PaaS, IaaS modele, SLA ugovore i zaštitu intelektualne svojine u IT sektoru.",
    keywords: [
      "IT pravo",
      "advokat Banja Luka",
      "IT pravo Banja Luka",
      "advokat za IT kompanije",
      "NDA",
      "SaaS ugovori",
      "softverske licence",
      "SLA",
      "PaaS",
      "IaaS",
      "pravna zaštita softvera",
      "IT ugovori",
      "advokat Banja Luka IT pravo",
      "tehnološko pravo",
      "startup advokat",
      "software licensing",
      "IT pravo Republika Srpska"
    ],
    openGraph: {
      title: "IT pravo | Advokat Banja Luka | Softverski ugovori i pravna zaštita",
      description: "Stručna pravna podrška za IT kompanije i startape - SaaS, NDA, softverske licence i tehnološki ugovori.",
      images: [{ url: '/images/new/logojpg.jpg' }],
    },
    alternates: {
      languages: {
        'en': 'https://www.natasaticalawoffice.com/en/it-pravo',
        'sr': 'https://www.natasaticalawoffice.com/sr/it-pravo',
      },
    },
  };
  
