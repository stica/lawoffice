import React from "react";
import NavbarTwo from "../../../../components/Layouts/NavbarTwo";
import Footer from "../../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Blog3 from "@/components/Blog/Blog3";

const supportedLanguages = ["en", "sr"];

export default async function Page({
  params,
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale)
    ? params.locale
    : "en";
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <NavbarTwo />
      <Blog3 messages={messages} locale={lang} />
      <Footer />
    </>
  );
}

async function fetchMessages(locale: string) {
  try {
    const messages = await import(`../../../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const defaultMessages = await import(`../../../../dictionaries/en.json`);
    return defaultMessages.default;
  }
}

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "sr" },
  ];
}

export const metadata = {
  title:
    "Startup NIJE svako novoosnovano privredno društvo",
  description:
    "Zakon o inovacionoj djelatnosti RS iz 2025. godine po prvi put normativno definiše pojam startupa. Saznajte zašto pravni okvir nije administrativni teret već infrastruktura za stabilan rast.",
  openGraph: {
    title: "Startup NIJE svako novoosnovano privredno društvo",
    description:
      "Zakon o inovacionoj djelatnosti RS iz 2025. godine po prvi put normativno definiše pojam startupa. Saznajte zašto pravni okvir nije administrativni teret već infrastruktura za stabilan rast.",
    images: [{ url: "/images/new/startup-legal.png", width: 1200, height: 630, alt: "Startup NIJE svako novoosnovano privredno društvo" }],
  },
  alternates: {
    languages: {
      en: "https://www.natasaticalawoffice.com/en",
      sr: "https://www.natasaticalawoffice.com/sr",
    },
  },
};
