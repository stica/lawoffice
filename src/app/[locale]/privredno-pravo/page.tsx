import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import Footer from "../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from 'next-intl/server';
import CommercialLaw from "@/components/LawTypes/CommercialLaw";

const supportedLanguages = ['en', 'sr'];

const commercialLawJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://www.natasaticalawoffice.com/sr/privredno-pravo',
      name: 'Privredno pravo | Osnivanje DOO | Advokatska kancelarija Nataša Tica',
      description: 'Advokat Banja Luka za privredno pravo — osnivanje DOO, registracija firme, korporativno upravljanje, M&A, radno pravo i nekretnine u Republici Srpskoj.',
      url: 'https://www.natasaticalawoffice.com/sr/privredno-pravo',
      telephone: '+38765231276',
      email: 'natasa.tica@natasaticalawoffice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jevrejska 24',
        addressLocality: 'Banja Luka',
        addressCountry: 'BA',
      },
      areaServed: 'BA',
      serviceType: 'Commercial Law',
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

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const base = 'https://www.natasaticalawoffice.com';
  const path = '/privredno-pravo';
  return {
    title: "Privredno pravo | Osnivanje DOO | Advokat Banja Luka",
    description: "Advokat Banja Luka za privredno pravo – osnivanje DOO, registracija firme, korporativno upravljanje, M&A, radno pravo i nekretnine. Brza i stručna pravna podrška u Republici Srpskoj.",
    keywords: [
      "privredno pravo", "osnivanje", "osnivanje DOO", "osnivanje firme",
      "osnivanje firme Banja Luka", "DOO", "doo Banja Luka", "registracija firme",
      "registracija DOO", "privredno pravo Banja Luka", "advokat Banja Luka",
      "advokat za privredno pravo", "korporativno upravljanje", "M&A",
      "komercijalni ugovori", "poslovni advokat Banja Luka",
      "privredno pravo Republika Srpska", "commercial law", "company formation Bosnia"
    ],
    openGraph: {
      title: "Privredno pravo | Osnivanje DOO | Advokat Banja Luka",
      description: "Advokat Banja Luka za privredno pravo – osnivanje DOO, registracija firme, korporativno upravljanje, M&A, radno pravo i nekretnine.",
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
