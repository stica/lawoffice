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
            src="/images/new/startup-legal.svg"
            alt="Startup vs Privredno društvo"
            width={500}
            height={263}
            className="blog-image"
            unoptimized
          />
        </section>
        <section className="blog-hero">
          <p className="blog-intro">{t("intro")}</p>
          <p>{t("wrongUnderstanding")}</p>
        </section>
      </div>

      <section className="blog-content">
        <h2>{t("legalDefinitionHeading")}</h2>
        <p>{t("legalDefinition")}</p>

        <h2>{t("dynamicSystemHeading")}</h2>
        <p>{t("dynamicSystem")}</p>
        <p>{t("problemsText")}</p>

        <h2>{t("experienceHeading")}</h2>
        <p>{t("experienceIntro")}</p>
        <ul className="advantages-list">
          <li>{t("neglect1")}</li>
          <li>{t("neglect2")}</li>
          <li>{t("neglect3")}</li>
          <li>{t("neglect4")}</li>
          <li>{t("neglect5")}</li>
        </ul>
        <p>{t("hiddenProblems")}</p>

        <h2>{t("softwareHeading")}</h2>
        <p>{t("softwareText1")}</p>
        <p>{t("dataText")}</p>

        <h2>{t("mythHeading")}</h2>
        <p>{t("mythText")}</p>

        <h2>{t("conclusionHeading")}</h2>
        <p>{t("conclusionText")}</p>

        <p className="blog-final-note">
          <em>{t("finalNote")}</em>
        </p>
      </section>
    </div>
  );
}
