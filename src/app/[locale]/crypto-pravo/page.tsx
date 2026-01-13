import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import CryptoLaw from "@/components/LawTypes/CryptoLaw";


const supportedLanguages = ['en', 'sr']; // List of supported languages

export default async function Page({ params }: { params: { locale: string } }) {

  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';  
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />

      <CryptoLaw messages={messages} locale={lang} />

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
    title: "Kripto i Blockchain pravo | Advokat Banja Luka | Digitalna imovina i tokenizacija",
    description: "Advokat u Banjoj Luci specijalizovan za kripto pravo, blockchain tehnologiju i digitalnu imovinu. Pravna podrška za kriptovalute, tokenizaciju, NFT, DeFi, pametne ugovore i usklađenost sa regulacijama.",
    keywords: [
      "kripto pravo",
      "blockchain pravo",
      "advokat Banja Luka",
      "digitalna imovina",
      "tokenizacija",
      "pametni ugovori",
      "kriptovalute",
      "NFT",
      "DeFi",
      "smart contracts",
      "bitcoin",
      "ethereum",
      "crypto advokat",
      "advokat Banja Luka kripto",
      "blockchain advokat",
      "crypto pravo Banja Luka",
      "digitalna imovina Republika Srpska",
      "kriptovalute BiH"
    ],
    openGraph: {
      title: "Kripto i Blockchain pravo | Advokat Banja Luka",
      description: "Stručna pravna podrška za kriptovalute, blockchain projekte, tokenizaciju i digitalnu imovinu.",
      images: [{ url: '/images/new/logojpg.jpg' }],
    },
    alternates: {
      languages: {
        'en': 'https://www.natasaticalawoffice.com/en/crypto-pravo',
        'sr': 'https://www.natasaticalawoffice.com/sr/crypto-pravo',
      },
    },
}
