import React from "react";
import { useTranslations } from "next-intl";
import tokenization from "../../../public/images/new/tokenization.png";
import Image from "next/image";

// Define props type
interface Blog2Props {
  messages: any;
  locale: string;
}

export default function Blog2({ messages, locale }: Blog2Props) {
  const t = useTranslations("blog2");

  return (
    <div className="blog-wrapper">
      <h1>{t('title')}</h1>

      <div className="blog-header-wrapper">

        <section className="blog-image-section">
          <Image
            src={tokenization}
            alt="Tokenization"
            width={500}
            height={300}
            className="blog-image"
          />
        </section>
        <section className="blog-hero">
          <p className="blog-intro">{t('intro')}</p>
        </section>

      </div>


      <section className="blog-content">
        <h2>{t('whatIsTokenization')}</h2>
        <p>{t('tokenizationDescription')}</p>

        <h2>{t('legalFramework')}</h2>
        <p>{t('legalFrameworkDescription')}</p>

        <h2>{t('successStories')}</h2>
        <div className="success-story">
          <h3>{t('finspotTitle')}</h3>
          <p>{t('finspotDescription')}</p>
        </div>

        <div className="success-story">
          <h3>{t('treesuryTitle')}</h3>
          <p>{t('treesuryDescription')}</p>
        </div>

        <h2>{t('bihPotential')}</h2>
        <p>{t('bihPotentialDescription')}</p>

        <h2>{t('advantages')}</h2>
        <ul className="advantages-list">
          <li>{t('advantagesbankFree')}</li>
          <li>{t('advantageslowerCosts')}</li>
          <li>{t('advantagestransparency')}</li>
          <li>{t('advantagesliquidity')}</li>
          <li>{t('advantagescommunity')}</li>
        </ul>

        <div className="contact-section">
          <p>{t('contactInfo')}</p>
            {t('contactUs')}
        </div>

        <div className="text-center mt-8" style={{ marginTop: "20px" }}>
          <button className="btn primary">
            {t("faq.cta")}
          </button>
        </div>
      </section>
    </div>
  );
}
