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
  title: "Privredno pravo: Osnivanje firmi, korporativno upravljanje, ugovori",
  description: "Pravna podrška za preduzeća i preduzetnike: osnivanje firmi, M&A, korporativno upravljanje, komercijalni ugovori.",
  keywords: [
    "privredno pravo",
    "osnivanje društva",
    "korporativno upravljanje",
    "M&A",
    "komercijalni ugovori"
  ]
};
