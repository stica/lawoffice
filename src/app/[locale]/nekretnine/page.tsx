import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import RealEstateLaw from "@/components/LawTypes/RealEstateLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <RealEstateLaw messages={messages} locale={lang} />
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
  title: "Nekretnine: Kupoprodaje, zakupi, due diligence i imovinski sporovi",
  description: "Pravna podrška za promet nekretnina: ugovori, zemljišnoknjižni upisi, zakupi, due diligence i rješavanje sporova.",
  keywords: [
    "nekretnine",
    "kupoprodaja",
    "zakup",
    "due diligence",
    "zemljišne knjige",
    "imovinski sporovi"
  ]
};
