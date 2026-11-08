import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Section = { heading: string; paragraphs: string[] };

export default function Blog4() {
  const t = useTranslations("blog4");
  const intro = t.raw("intro") as string[];
  const sections = t.raw("sections") as Section[];

  return (
    <article className="blog-wrapper">
      <h1>{t("title")}</h1>
      <p className="blog-intro">
        <em>{t("subtitle")}</em>
      </p>

      <div className="blog-header-wrapper">
        <section className="blog-image-section">
          <Image
            src="/images/new/zakon-o-platnim-uslugama-EN.webp"
            alt={t("imageAlt")}
            width={1600}
            height={900}
            className="blog-image"
            priority
          />
        </section>
        <section className="blog-hero">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      </div>

      <section className="blog-content">
        {sections.map((s) => (
          <React.Fragment key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </React.Fragment>
        ))}
      </section>
    </article>
  );
}
