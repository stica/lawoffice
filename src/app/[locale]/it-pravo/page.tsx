import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import ItLaw from "@/components/LawTypes/ItLaw";

const supportedLanguages = ['en', 'sr'];

const itLawJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://www.natasaticalawoffice.com/sr/it-pravo',
      name: 'IT pravo | Advokatska kancelarija Nataša Tica',
      description: 'Pravna podrška za IT kompanije i startupe — NDA, SaaS ugovori, softverske licence, SLA i zaštita intelektualne svojine u Republici Srpskoj.',
      url: 'https://www.natasaticalawoffice.com/sr/it-pravo',
      telephone: '+38765231276',
      email: 'natasa.tica@natasaticalawoffice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jevrejska 24',
        addressLocality: 'Banja Luka',
        addressCountry: 'BA',
      },
      areaServed: 'BA',
      serviceType: 'IT Law',
      provider: {
        '@type': 'Attorney',
        name: 'Nataša Tica',
        url: 'https://www.natasaticalawoffice.com/sr',
        jobTitle: 'Advokat',
        worksFor: {
          '@type': 'LegalService',
          name: 'Advokatska kancelarija Nataša Tica',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jevrejska 24',
            addressLocality: 'Banja Luka',
            addressCountry: 'BA',
          },
        },
      },
    },
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

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const base = 'https://www.natasaticalawoffice.com';
  const path = '/it-pravo';
  return {
    title: "IT pravo | Advokat Banja Luka | SaaS, NDA, Softverske licence i IT ugovori",
    description: "Advokat u Banjoj Luci specijalizovan za IT pravo i tehnološke kompanije. Pružamo pravnu podršku za softverske licence, NDA ugovore, SaaS, PaaS, IaaS modele, SLA ugovore i zaštitu intelektualne svojine u IT sektoru.",
    keywords: [
      "IT pravo", "advokat Banja Luka", "IT pravo Banja Luka", "advokat za IT kompanije",
      "NDA", "SaaS ugovori", "softverske licence", "SLA", "PaaS", "IaaS",
      "pravna zaštita softvera", "IT ugovori", "advokat Banja Luka IT pravo",
      "tehnološko pravo", "startup advokat", "software licensing", "IT pravo Republika Srpska"
    ],
    openGraph: {
      title: "IT pravo | Advokat Banja Luka | Softverski ugovori i pravna zaštita",
      description: "Stručna pravna podrška za IT kompanije i startape - SaaS, NDA, softverske licence i tehnološki ugovori.",
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
