import React from "react";
import "../../../public/styles/bootstrap.min.css";
// import "../../../public/styles/animate.min.css";
// import "animate.css";
import "../../../public/styles/all.min.css";
import "../../../public/styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../../../public/styles/software-home-page.css";
// App Showcase Home Style
import "../../../public/styles/app-home-page.css";
// Digital Marketing Home Page Style
import "../../../public/styles/digital-marketing-home-page.css";
// Personal Portfolio Home Style
import "../../../public/styles/personal-portfolio-home-page.css";
// Business Consulting Home Page Style
import "../../../public/styles/business-consulting-home-page.css";
// SaaS Startup Home Page Style
import "../../../public/styles/saas-startup-home-page.css";
// Freelancer Portfolio Home Page Style
import "../../../public/styles/freelancer-portfolio-home-page.css";
// Cyber Security Agency Home Page Style
import "../../../public/styles/cyber-security-agency-home-page.css";

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
});

export const metadata: Metadata = {
  title: "Law Office Nataša Tica | Family Law, Business Law, Real Estate",
  description: "Law Office Nataša Tica offers modern, innovative legal solutions with personalized attention. Specializing in [practice areas such as family law, business law, real estate law], we combine advanced technology and expert counsel to meet your legal needs. Serving Banja Luka, we are committed to providing exceptional legal support and results.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  const messages = useMessages();
  const t = useTranslations("Layout");

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>

        <head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta property="og:description" content={t('description')} />
        <meta property="og:image" content="/images/new/logojpg.jpg" />
        <meta name="twitter:image" content="/images/new/logojpg.jpg" />
        {/* hreflang for English */}
        <link rel="alternate" href="https://www.natasaticalawoffice.com/en" hrefLang="en" />
        
        {/* hreflang for Serbian */}
        <link rel="alternate" href="https://www.natasaticalawoffice.com/sr" hrefLang="sr" />

        {/* JSON-LD structured data with translations */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Law Office Nataša Tica",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Novice Cerovića 32",
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
        <body className={poppins.className}>
          {children}
          <AosAnimation />
          <GoTop />
        </body>
      </NextIntlClientProvider>

    </html>
  );
}

