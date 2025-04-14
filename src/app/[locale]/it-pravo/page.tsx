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
    title: "IT pravo: Ugovori o softveru, NDA, SaaS, PaaS i pravna zaštita u IT sektoru",
    description: "Pružamo pravnu podršku za kompanije u IT sektoru, uključujući ugovore o poverljivosti (NDA), softverske licence, SaaS, PaaS, IaaS modele i SLA ugovore.",
    keywords: [
      "IT pravo", 
      "NDA", 
      "SaaS ugovori", 
      "softverske licence", 
      "SLA", 
      "PaaS", 
      "IaaS", 
      "pravna zaštita softvera", 
      "specifikacije obima rada", 
      "Statements of Work", 
      "IT ugovori"
    ],
    openGraph: {
      title: "IT pravo: Ugovori o softveru, NDA, SaaS, PaaS i pravna zaštita u IT sektoru",
      description: "Saznajte kako zaštititi IT poslovanje kroz pravno regulisane ugovore – od NDA do SaaS i SLA modela.",
      images: [{ url: '/images/new/logojpg.jpg' }],
    },
    alternates: {
      languages: {
        'en': 'https://www.natasaticalawoffice.com/en/it-law',
        'sr': 'https://www.natasaticalawoffice.com/sr/it-pravo',
      },
    },
    linkedin: {
      title: "IT pravo: Pravni ugovori za softver i digitalne servise",
      description: "Otkrijte kako pravno zaštititi softver i digitalne servise kroz NDA, SaaS, PaaS, IaaS i druge ključne IT ugovore.",
      image: '/images/new/logojpg.jpg',
    },
  };
  
