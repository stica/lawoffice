import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import Footer from "@/components/Layouts/Footer";
import { unstable_setRequestLocale } from "next-intl/server";
import Blog4 from "@/components/Blog/Blog4";
import { BLOG_POSTS, articleJsonLd, buildMetadata } from "@/lib/seo";

const post = BLOG_POSTS.payments;

export default function Page({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd(params.locale, post, { datePublished: post.datePublished })
          ),
        }}
      />
      <NavbarTwo />
      <Blog4 />
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sr" }];
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  return buildMetadata(params.locale, post);
}
