import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import CommercialLaw from "@/components/LawTypes/CommercialLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <CommercialLaw messages={messages} locale={lang} />
      <Footer />
    </>
  );
}

async function fetchMessages(locale: string) {
  try {
    const messages = await import(`../../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    const defaultMessages = await import(`../../../dictionaries/en.json`);
    return defaultMessages.default;
  }
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'sr' },
  ];
}

export const metadata = {
  title: "Privredno pravo | Osnivanje DOO | Advokat Banja Luka",
  description: "Advokat Banja Luka za privredno pravo – osnivanje DOO, registracija firme, korporativno upravljanje, M&A, radno pravo i nekretnine. Brza i stručna pravna podrška u Republici Srpskoj.",
  keywords: [
    "privredno pravo",
    "osnivanje",
    "osnivanje DOO",
    "osnivanje firme",
    "osnivanje firme Banja Luka",
    "DOO",
    "doo Banja Luka",
    "registracija firme",
    "registracija DOO",
    "radno pravo",
    "radno pravo Banja Luka",
    "nekretnine",
    "nekretnine Banja Luka",
    "privredno pravo Banja Luka",
    "advokat Banja Luka",
    "advokat za privredno pravo",
    "korporativno upravljanje",
    "M&A",
    "komercijalni ugovori",
    "poslovni advokat Banja Luka",
    "privredno pravo Republika Srpska",
    "commercial law",
    "company formation Bosnia"
  ],
  openGraph: {
    title: "Privredno pravo | Osnivanje DOO | Advokat Banja Luka",
    description: "Advokat Banja Luka za privredno pravo – osnivanje DOO, registracija firme, korporativno upravljanje, M&A, radno pravo i nekretnine.",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en/privredno-pravo',
      'sr': 'https://www.natasaticalawoffice.com/sr/privredno-pravo',
    },
  },
};
