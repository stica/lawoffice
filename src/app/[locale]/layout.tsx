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
  title: "Law Office Nataša Tica | Family Law, Business Law, Real Estate",
  description: "Law Office Nataša Tica offers modern, innovative legal solutions with personalized attention...",
  openGraph: {
    title: "Law Office Nataša Tica | Family Law, Business Law, Real Estate",
    description: "Law Office Nataša Tica offers modern, innovative legal solutions...",
    images: [{ url: '/images/new/logojpg.jpg' }],
  },
  alternates: {
    languages: {
      'en': 'https://www.natasaticalawoffice.com/en',
      'sr': 'https://www.natasaticalawoffice.com/sr',
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: string;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  const messages = useMessages();
  const t = useTranslations("Layout");

    // Prepare schema data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Law Office Nataša Tica",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jevrejska 24",
        "addressLocality": "Banja Luka",
        "postalCode": "78000",
        "addressCountry": "Bosnia and Herzegovina"
      },
      "telephone": "+38765231276",
      "url": `https://www.natasaticalawoffice.com/${locale}`,
      "description": t('schemaDescription'),
      "openingHours": "Mo-Fri 8:00-16:00"
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

        {/* JSON-LD structured data with translations */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Law Office Nataša Tica",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jevrejska 24",
              "addressLocality": "Banja Luka",
              "postalCode": "78000",
              "addressCountry": "Bosnia and Herzegovina"
            },
            "telephone": "+38765231276",
            "url": "https://www.natasaticalawoffice.com/${locale}",
            "description": "${t('schemaDescription')}",
            "openingHours": "Mo-Fri 8:00-16:00"
          }
          `
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

