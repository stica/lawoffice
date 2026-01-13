import React from "react";
import "../../../public/styles/bootstrap.min.css";
// import "../../../public/styles/animate.min.css";
// import "animate.css";
import "../../../public/styles/all.min.css";
// import "react-accessible-accordion/dist/fancy-example.css";

// Global Style
import "../../../public/styles/style.scss";
import "../../../public/styles/responsive.css";
import "./../globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { useTranslations } from "next-intl";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Advokat Banja Luka | Advokatska Kancelarija Nataša Tica | Pravni Savjet",
  description: "Advokat u Banjoj Luci - Advokatska kancelarija Nataša Tica. Stručna pravna pomoć u IT, GDPR, privredno, porodično, nasljedno i radno pravo. Certified Data Protection Officer. Pozovite +387 65 231-276",
  keywords: [
    "advokat Banja Luka",
    "advokat",
    "Banja Luka",
    "advokatska kancelarija Banja Luka",
    "pravna pomoć Banja Luka",
    "pravni savjet Banja Luka",
    "advokat IT pravo",
    "advokat GDPR",
    "advokat za privredno pravo",
    "advokat Republika Srpska",
    "najbolji advokat Banja Luka",
    "advokat u Banjoj Luci",
  ],
  authors: [{ name: "Nataša Tica" }],
  creator: "Nataša Tica",
  publisher: "Law Office Nataša Tica",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: 'https://www.natasaticalawoffice.com',
    siteName: 'Advokat Banja Luka - Nataša Tica',
    title: "Advokat Banja Luka | Advokatska Kancelarija Nataša Tica",
    description: "Iskusan advokat u Banjoj Luci. Specijalizovani za IT pravo, GDPR, privredno, porodično i nasljedno pravo. Certified Data Protection Officer.",
    images: [
      {
        url: '/images/new/logojpg.jpg',
        width: 1200,
        height: 630,
        alt: 'Advokat Banja Luka - Nataša Tica',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Advokat Banja Luka | Nataša Tica",
    description: "Stručna pravna pomoć u Banjoj Luci - IT pravo, GDPR, privredno i porodično pravo.",
    images: ['/images/new/logojpg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.natasaticalawoffice.com',
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en',
      'sr': 'https://www.natasaticalawoffice.com/sr',
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: string;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  const messages = useMessages();
  const t = useTranslations("Layout");

    // Prepare enhanced schema data for local SEO
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Attorney",
      "name": "Advokatska kancelarija Nataša Tica",
      "alternateName": "Advokat Banja Luka - Nataša Tica",
      "description": "Advokat u Banjoj Luci specijalizovan za IT pravo, GDPR, privredno, porodično i nasljedno pravo. Certified Data Protection Officer.",
      "url": `https://www.natasaticalawoffice.com/${locale}`,
      "telephone": "+387-65-231-276",
      "email": "natasa.tica@natasaticalawoffice.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jevrejska 24",
        "addressLocality": "Banja Luka",
        "addressRegion": "Republika Srpska",
        "postalCode": "78000",
        "addressCountry": "BA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "44.7722",
        "longitude": "17.1910"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "16:00"
        }
      ],
      "priceRange": "$$",
      "areaServed": {
        "@type": "City",
        "name": "Banja Luka"
      },
      "serviceArea": [
        {
          "@type": "City",
          "name": "Banja Luka"
        },
        {
          "@type": "State",
          "name": "Republika Srpska"
        }
      ],
      "knowsAbout": [
        "IT Law",
        "GDPR",
        "Data Protection",
        "Commercial Law",
        "Family Law",
        "Inheritance Law",
        "Labor Law",
        "Real Estate Law",
        "Obligation Law",
        "Crypto Law",
        "Blockchain Law"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Legal Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Pravo",
              "description": "Pravna podrška za IT kompanije, SaaS, NDA, softverske licence"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GDPR i zaštita podataka",
              "description": "Certified Data Protection Officer - usklađenost sa GDPR propisima"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Privredno pravo",
              "description": "Osnivanje firmi, M&A, korporativno upravljanje"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Porodično pravo",
              "description": "Razvod, starateljstvo, alimentacija"
            }
          }
        ]
      }
    };
    
  return (
    <html lang={locale}  className={poppins.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>

        <head>
        <link 
            rel="preload" 
            href="/images/new/logojpg.jpg" 
            as="image"
            fetchPriority="high"
          />

        {/* Enhanced Local Business Schema for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            "name": "Advokatska kancelarija Nataša Tica",
            "alternateName": "Advokat Banja Luka",
            "description": "Advokat u Banjoj Luci - IT pravo, GDPR, privredno, porodično i nasljedno pravo",
            "url": `https://www.natasaticalawoffice.com/${locale}`,
            "telephone": "+387-65-231-276",
            "email": "natasa.tica@natasaticalawoffice.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jevrejska 24",
              "addressLocality": "Banja Luka",
              "addressRegion": "Republika Srpska",
              "postalCode": "78000",
              "addressCountry": "BA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.7722",
              "longitude": "17.1910"
            },
            "areaServed": "Banja Luka"
          })
        }} />
        </head>
        <body>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <AosAnimation />
          <GoTop />
        </body>
      </NextIntlClientProvider>

    </html>
  );
}

