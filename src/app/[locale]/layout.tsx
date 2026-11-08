// Global styles: keep first and in this order (vendor → theme → overrides),
// so component CSS (e.g. aos.css in AosAnimation) still loads after them.
import "../../../public/styles/bootstrap.min.css";
import "../../../public/styles/all.min.css";
import "../../../public/styles/style.scss";
import "../../../public/styles/responsive.css";
import "../globals.css";

import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import { BUSINESS, OG_IMAGE, SITE_URL, siteJsonLd } from "@/lib/seo";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// Defaults only — every page sets its own title, description, canonical and hreflang.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Advokat Banja Luka | Advokatska kancelarija Nataša Tica",
  description: "Advokat Banja Luka — advokatska kancelarija Nataša Tica. Pravna pomoć za privredno, IT, GDPR, porodično, nasljedno, radno pravo i nekretnine. ☎ +387 65 231-276",
  applicationName: "Advokat Banja Luka - Nataša Tica",
  authors: [{ name: "Nataša Tica", url: `${SITE_URL}/sr/o-advokatu` }],
  creator: "Nataša Tica",
  publisher: "Advokatska kancelarija Nataša Tica",
  category: "legal",
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Advokat Banja Luka - Nataša Tica',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Advokat Banja Luka - Nataša Tica' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
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
  other: {
    'geo.region': 'BA-SRP',
    'geo.placename': 'Banja Luka',
    'geo.position': `${BUSINESS.latitude};${BUSINESS.longitude}`,
    'ICBM': `${BUSINESS.latitude}, ${BUSINESS.longitude}`,
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = params.locale === 'en' ? 'en' : 'sr';
  const messages = useMessages();

  return (
    <html lang={locale} className={poppins.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>

        <head>
        <link
            rel="preload"
            href="/images/new/logojpg.jpg"
            as="image"
            fetchPriority="high"
          />

        {/* Local business, attorney and website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd(locale)) }}
        />
        </head>
        <body>
          {children}
          <AosAnimation />
          <GoTop />
        </body>
      </NextIntlClientProvider>

    </html>
  );
}
