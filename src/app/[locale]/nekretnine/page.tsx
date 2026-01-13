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
  title: "Nekretnine | Advokat Banja Luka | Kupoprodaja, zakup i zemljišnoknjižni upisi",
  description: "Advokat u Banjoj Luci specijalizovan za pravo nekretnina. Pravna podrška za kupoprodaju stanova i kuća, zakupe, zemljišnoknjižne upise, due diligence i rješavanje imovinskih sporova.",
  keywords: [
    "nekretnine",
    "advokat Banja Luka",
    "nekretnine Banja Luka",
    "kupoprodaja nekretnina",
    "kupoprodaja stanova",
    "zakup",
    "due diligence",
    "zemljišne knjige",
    "imovinski sporovi",
    "advokat za nekretnine",
    "real estate lawyer",
    "advokat Banja Luka nekretnine",
    "pravo nekretnina Republika Srpska"
  ],
  openGraph: {
    title: "Nekretnine | Advokat Banja Luka",
    description: "Stručna pravna podrška za promet nekretnina - kupoprodaja, zakupi i zemljišnoknjižni upisi.",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en/nekretnine',
      'sr': 'https://www.natasaticalawoffice.com/sr/nekretnine',
    },
  },
};
