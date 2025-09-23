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
    title: "Kripto i Blockchain pravo: Pravna zaštita za kriptovalute, tokenizaciju i blockchain projekte",
    description: "Pružamo stručnu pravnu podršku za kriptovalute, blockchain tehnologiju, tokenizaciju i digitalna sredstva. Obezbjeđujemo usklađenost sa globalnim regulacijama i lokalnim zakonodavstvom.",
    keywords: [
      "kripto pravo",
      "blockchain pravo",
      "tokenizacija",
      "pametni ugovori",
      "regulatorna usklađenost",
      "kriptovalute",
      "NFT",
      "DeFi",
      "digitalna imovina",
      "GDPR",
      "licni podaci",
      "data protection",
    ]
}
