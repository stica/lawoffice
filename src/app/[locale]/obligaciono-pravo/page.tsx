import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import ObligationLaw from "@/components/LawTypes/ObligationLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <ObligationLaw messages={messages} locale={lang} />
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
    { locale: 'en' },
    { locale: 'sr' },
  ];
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const base = 'https://www.natasaticalawoffice.com';
  const path = '/obligaciono-pravo';
  return {
    title: "Obligaciono pravo | Advokat Banja Luka | Ugovori, potraživanja i sporovi",
    description: "Advokat u Banjoj Luci specijalizovan za obligaciono pravo. Stručna pravna podrška u ugovornim odnosima: izrada i revizija ugovora, naplata potraživanja, medijacija i zastupanje u sporovima.",
    keywords: [
      "obligaciono pravo", "advokat Banja Luka", "obligaciono pravo Banja Luka",
      "ugovori", "izrada ugovora", "naplata potraživanja", "medijacija", "sporovi",
      "ugovorno pravo", "advokat za obligaciono pravo",
      "advokat Banja Luka obligaciono pravo", "obligation law",
      "obligaciono pravo Republika Srpska"
    ],
    openGraph: {
      title: "Obligaciono pravo | Advokat Banja Luka",
      description: "Stručna pravna podrška u ugovornim odnosima - izrada ugovora, naplata potraživanja i sporovi.",
      images: [{ url: `${base}/images/new/logojpg.jpg` }],
    },
    alternates: {
      canonical: `${base}/${params.locale}${path}`,
      languages: {
        'en': `${base}/en${path}`,
        'sr': `${base}/sr${path}`,
      },
    },
  };
}
