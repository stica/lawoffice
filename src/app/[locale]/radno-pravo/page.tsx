import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import LaborLaw from "@/components/LawTypes/LaborLaw";

const supportedLanguages = ['en', 'sr'];

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <LaborLaw messages={messages} locale={lang} />
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
  const path = '/radno-pravo';
  return {
    title: "Radno pravo | Advokat Banja Luka | Ugovori o radu, otpremnine i radni sporovi",
    description: "Advokat u Banjoj Luci specijalizovan za radno pravo. Pravna podrška za poslodavce i zaposlene: izrada ugovora o radu, interni akti, otpremnine, otkazi, usklađenost sa zakonima i zastupanje u radnim sporovima.",
    keywords: [
      "radno pravo", "advokat Banja Luka", "radno pravo Banja Luka",
      "ugovor o radu", "interni akti", "radni sporovi", "otkaz", "otpremnina",
      "usklađenost", "advokat za radno pravo", "labor law", "employment law",
      "advokat Banja Luka radno pravo", "radno pravo Republika Srpska"
    ],
    openGraph: {
      title: "Radno pravo | Advokat Banja Luka",
      description: "Pravna podrška u oblasti radnog prava - ugovori o radu, otpremnine i radni sporovi.",
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
