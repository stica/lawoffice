// app/[lang]/layout.tsx
import { Poppins } from "next/font/google";
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { useTranslations } from "next-intl";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

// Import styles once
import "../../../public/styles/style.scss";

// Optimize font loading
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Only include weights you actually use
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

// Move metadata to a separate constant
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
      "streetAddress": "Novice Cerovića 32",
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
    <html lang={locale} className={poppins.variable}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <head>
          <link 
            rel="preload" 
            href="/images/new/logojpg.jpg" 
            as="image"
            fetchPriority="high"
          />
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