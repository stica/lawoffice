import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import ContactInfo from "../../../components/Contact/ContactInfo";
import ContactForm from "../../../components/Contact/ContactForm";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';

const supportedLanguages = ['en', 'sr']; // List of supported languages


export default async function Page({ params }: { params: { locale: string } }) {
  // Fetch messages based on the locale from the URL
  unstable_setRequestLocale(params.locale);

  // Validate the `lang` parameter
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';  const messages = await fetchMessages(params.locale);

  return (
    <main>
      <NavbarTwo/>
      <ContactInfo messages={messages} />
      <ContactForm />
      <Footer />
    </main>
  );
}


// Fetch messages for the given locale
async function fetchMessages(locale: string) {

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
    { lang: 'sr' }, // Pre-render Spanish page
  ];
}