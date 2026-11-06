import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import CommercialLaw from "@/components/LawTypes/CommercialLaw";
import { buildMetadata, servicePage, servicePageJsonLd } from "@/lib/seo";

const supportedLanguages = ['en', 'sr'];
const seo = servicePage('/privredno-pravo');

const commercialLawJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li pomažete oko registracije firme?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, pružamo kompletnu podršku pri osnivanju — od izbora pravne forme do registracije DOO u Republici Srpskoj.',
          },
        },
        {
          '@type': 'Question',
          name: 'Da li radite ugovore članova?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, izrađujemo i revidiramo ugovore članova i investicione ugovore.',
          },
        },
      ],
    },
  ],
};

export default async function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);
  const lang = supportedLanguages.includes(params.locale) ? params.locale : 'en';
  const messages = await fetchMessages(params.locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageJsonLd(params.locale, seo)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialLawJsonLd) }}
      />
      <NavbarTwo />
      <CommercialLaw messages={messages} locale={lang} />
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

export function generateMetadata({ params }: { params: { locale: string } }) {
  return buildMetadata(params.locale, seo);
}
