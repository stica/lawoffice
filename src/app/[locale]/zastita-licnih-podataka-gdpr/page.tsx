import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import DataProtectionLaw from "@/components/LawTypes/DataProtectionLaw";


const supportedLanguages = ['en', 'sr']; // List of supported languages

export default async function Page({ params }: { params: { locale: string } }) {

  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';  
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />

      <DataProtectionLaw messages={messages} locale={lang} />

      <Footer />
    </>
  );
}

// Fetch messages for the given locale
async function fetchMessages(locale: string): Promise<any> {

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
    { lang: 'sr' }, // Pre-render Serbian page
  ];
}

export const metadata = {
    title: "Zaštita ličnih podataka GDPR | Advokat Banja Luka | Data Protection Officer",
    description: "Advokat u Banjoj Luci specijalizovan za zaštitu ličnih podataka i GDPR pravo. Certified Data Protection Officer (CDPO) - usklađenost sa GDPR propisima, pravna podrška za zaštitu privatnosti i obrada podataka.",
    keywords: [
      "GDPR pravo",
      "zaštita ličnih podataka",
      "advokat Banja Luka",
      "data protection",
      "GDPR advokat",
      "licni podaci",
      "CDPO",
      "certified data protection officer",
      "usklađenost sa GDPR",
      "privatnost",
      "obrada podataka",
      "advokat Banja Luka GDPR",
      "GDPR pravo Banja Luka",
      "zaštita podataka Republika Srpska",
      "GDPR BiH"
    ],
    openGraph: {
      title: "Zaštita ličnih podataka GDPR | Advokat Banja Luka",
      description: "Stručna pravna podrška za GDPR i zaštitu ličnih podataka. Certified Data Protection Officer sa iskustvom u usklađenosti.",
      images: [{ url: '/images/new/logojpg.jpg' }],
    },
    alternates: {
      languages: {
        'en': 'https://www.natasaticalawoffice.com/en/zastita-licnih-podataka-gdpr',
        'sr': 'https://www.natasaticalawoffice.com/sr/zastita-licnih-podataka-gdpr',
      },
    },
}
