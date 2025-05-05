import React from "react";
import NavbarTwo from "../../../../components/Layouts/NavbarTwo";
import Footer from "../../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import Blog2 from "@/components/Blog/Blog2";

const supportedLanguages = ['en', 'sr']; // List of supported languages

export default async function Page({ params }: { params: { locale: string } }) {

  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';  
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />

      <Blog2 messages={messages} locale={lang} />

      <Footer />
    </>
  );
}


// Fetch messages for the given locale
async function fetchMessages(locale: string) {
  try {
    const messages = await import(`../../../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to a default locale (e.g., 'en')
    const defaultMessages = await import(`../../../../dictionaries/en.json`);
    return defaultMessages.default;
  }
}

// Generate static paths for all supported locales
export async function generateStaticParams() {
  return [
    { lang: 'en' }, // Pre-render English page
    { lang: 'sr' }, // Pre-render Spanish page
  ];
}

export const metadata = {
  title: "Tokenizuj svoj biznis – Pretvori ideju u kapital",
  description: "Saznajte više o tokenizaciji i kako može pomoći vašem poslovanju. Alternativno finansiranje, niži troškovi i veća likvidnost - sve to je moguće kroz tokenizaciju.",
  openGraph: {
    title: "Tokenizuj svoj biznis – Pretvori ideju u kapital",
    description: "Saznajte više o tokenizaciji i kako može pomoći vašem poslovanju. Alternativno finansiranje, niži troškovi i veća likvidnost - sve to je moguće kroz tokenizaciju.",
    images: [{ url: '/images/new/tokenization.png' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en',
      'sr': 'https://www.natasaticalawoffice.com/sr',
    },
  },
  linkedin: {
    title: "Tokenizuj svoj biznis – Pretvori ideju u kapital",
    description: "Saznajte više o tokenizaciji i kako može pomoći vašem poslovanju. Alternativno finansiranje, niži troškovi i veća likvidnost - sve to je moguće kroz tokenizaciju.",
    image: '/images/new/tokenization.png',
  },
};
