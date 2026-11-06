import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import ItLaw from "@/components/LawTypes/ItLaw";
import { buildMetadata, servicePage, servicePageJsonLd } from "@/lib/seo";

const supportedLanguages = ['en', 'sr'];
const seo = servicePage('/it-pravo');

const itLawJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Da li nudite fiksne cene za ugovore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, nudimo i fiksne i po satu obračunate usluge u zavisnosti od obima posla.',
          },
        },
        {
          '@type': 'Question',
          name: 'Da li možete pregledati strane ugovore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Da, sarađujemo sa međunarodnim partnerima i pregledamo ugovore na engleskom jeziku.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itLawJsonLd) }}
      />
      <NavbarTwo />
      <ItLaw messages={messages} locale={lang} />
      <Footer />
    </>
  );
}

async function fetchMessages(locale: string) {
  try {
    const messages = await import(`../../../dictionaries/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
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
