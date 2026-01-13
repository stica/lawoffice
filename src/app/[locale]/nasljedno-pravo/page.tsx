import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import InheritanceLaw from "@/components/LawTypes/InheritanceLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <InheritanceLaw messages={messages} locale={lang} />
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
  title: "Nasljedno pravo | Advokat Banja Luka | Testament, ostavina i nasljedni sporovi",
  description: "Advokat u Banjoj Luci specijalizovan za nasljedno pravo. Pouzdana pravna podrška u nasljednim pitanjima: izrada testamenta, ostavinski postupci, podela nasledstva i rješavanje nasljednih sporova.",
  keywords: [
    "nasljedno pravo",
    "advokat Banja Luka",
    "nasljedno pravo Banja Luka",
    "testament",
    "ostavinski postupak",
    "nasljedni sporovi",
    "nasledstvo",
    "ostavina",
    "izrada testamenta",
    "advokat za nasledno pravo",
    "inheritance law",
    "advokat Banja Luka nasljedno pravo",
    "nasljedno pravo Republika Srpska"
  ],
  openGraph: {
    title: "Nasljedno pravo | Advokat Banja Luka",
    description: "Pouzdana pravna podrška u nasljednim pitanjima - testament, ostavinski postupci i sporovi.",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en/nasljedno-pravo',
      'sr': 'https://www.natasaticalawoffice.com/sr/nasljedno-pravo',
    },
  },
};
