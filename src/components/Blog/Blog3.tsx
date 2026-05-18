import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Blog3Props {
  messages: any;
  locale: string;
}

export default function Blog3({ messages, locale }: Blog3Props) {
  const t = useTranslations("blog3");

  return (
    <div className="blog-wrapper">
      <h1>{t("title")}</h1>

      <div className="blog-header-wrapper">
        <section className="blog-image-section">
          <Image
            src="/images/new/startup-legal.png"
            alt="Startup vs Privredno društvo"
            width={1200}
            height={630}
            className="blog-image"
          />
        </section>
        <section className="blog-hero">
          <p className="blog-intro">{t("intro")}</p>
          <p>{t("wrongUnderstanding")}</p>
        </section>
      </div>

      <section className="blog-content">
        <p>{t("legalDefinition")}</p>

        <p>{t("dynamicSystem")}</p>
        <p>{t("problemsText")}</p>

        <p>{t("experienceIntro")}</p>
        <ul className="advantages-list">
          <li>{t("neglect1")}</li>
          <li>{t("neglect2")}</li>
          <li>{t("neglect3")}</li>
          <li>{t("neglect4")}</li>
          <li>{t("neglect5")}</li>
        </ul>
        <p>{t("hiddenProblems")}</p>

        <p>{t("softwareText1")}</p>
        <p>{t("dataText")}</p>

        <p>{t("mythText")}</p>

        <p>{t("conclusionText")}</p>

        <p className="blog-final-note">
          <em>{t("finalNote")}</em>
        </p>
      </section>
    </div>
  );
}
