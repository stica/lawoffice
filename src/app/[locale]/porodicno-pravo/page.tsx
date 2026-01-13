import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import FamilyLaw from "@/components/LawTypes/FamilyLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <FamilyLaw messages={messages} locale={lang} />
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
  title: "Porodično pravo | Advokat Banja Luka | Razvod, starateljstvo i alimentacija",
  description: "Advokat u Banjoj Luci specijalizovan za porodično pravo. Stručna pravna pomoć u porodičnim predmetima: razvod braka, starateljstvo nad djecom, alimentacija, podjela bračne imovine i mjere zaštite od nasilja.",
  keywords: [
    "porodično pravo",
    "advokat Banja Luka",
    "porodično pravo Banja Luka",
    "razvod",
    "razvod braka",
    "starateljstvo",
    "alimentacija",
    "bračna imovina",
    "zaštita od nasilja",
    "advokat za porodično pravo",
    "family law",
    "advokat Banja Luka porodično pravo",
    "porodično pravo Republika Srpska"
  ],
  openGraph: {
    title: "Porodično pravo | Advokat Banja Luka",
    description: "Stručna pravna pomoć u porodičnim predmetima - razvod, starateljstvo, alimentacija i zaštita.",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en/porodicno-pravo',
      'sr': 'https://www.natasaticalawoffice.com/sr/porodicno-pravo',
    },
  },
};
