import React from "react";
import NavbarTwo from "../../../../components/Layouts/NavbarTwo";
import Footer from "../../../../components/Layouts/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Blog3 from "@/components/Blog/Blog3";
import { BLOG_POSTS, articleJsonLd, buildMetadata } from "@/lib/seo";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(params.locale, BLOG_POSTS.startup, { datePublished: BLOG_POSTS.startup.datePublished })),
        }}
      />
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
    { locale: 'en' },
    { locale: 'sr' },
  ];
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  return buildMetadata(params.locale, BLOG_POSTS.startup);
}
