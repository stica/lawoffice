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
  title: "Privredno pravo | Advokat Banja Luka | Osnivanje firmi, M&A i korporativno upravljanje",
  description: "Advokat u Banjoj Luci specijalizovan za privredno pravo. Pravna podrška za osnivanje društava, korporativno upravljanje, M&A transakcije, komercijalne ugovore i poslovne sporove.",
  keywords: [
    "privredno pravo",
    "advokat Banja Luka",
    "privredno pravo Banja Luka",
    "osnivanje društva",
    "osnivanje firme",
    "korporativno upravljanje",
    "M&A",
    "komercijalni ugovori",
    "advokat za privredno pravo",
    "poslovni advokat",
    "company law",
    "commercial law",
    "advokat Banja Luka privredno pravo",
    "privredno pravo Republika Srpska"
  ],
  openGraph: {
    title: "Privredno pravo | Advokat Banja Luka",
    description: "Stručna pravna podrška za preduzeća - osnivanje firmi, M&A, korporativno upravljanje i komercijalni ugovori.",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en/privredno-pravo',
      'sr': 'https://www.natasaticalawoffice.com/sr/privredno-pravo',
    },
  },
};
