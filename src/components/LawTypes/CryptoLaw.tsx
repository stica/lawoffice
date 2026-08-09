import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const CryptoLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("cryptoLaw.hero.title")}</span>
          <h1>{t("cryptoLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("cryptoLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("cryptoLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("cryptoLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("cryptoLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("cryptoLaw.services.tokenization.title")}</h3>
              <p>{t("cryptoLaw.services.tokenization.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("cryptoLaw.services.smartContracts.title")}</h3>
              <p>{t("cryptoLaw.services.smartContracts.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("cryptoLaw.services.regulatory.title")}</h3>
              <p>{t("cryptoLaw.services.regulatory.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("cryptoLaw.services.disputes.title")}</h3>
              <p>{t("cryptoLaw.services.disputes.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("cryptoLaw.clients.title")}</h2>
            <p className="law-lead">{t("cryptoLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("cryptoLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("cryptoLaw.whyUs.point1")}</li>
              <li>{t("cryptoLaw.whyUs.point2")}</li>
              <li>{t("cryptoLaw.whyUs.point3")}</li>
              <li>{t("cryptoLaw.whyUs.point4")}</li>
              <li>{t("cryptoLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("cryptoLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("cryptoLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("cryptoLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("cryptoLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("cryptoLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("cryptoLaw.faq.q1.q")}</strong>
              <p>{t("cryptoLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("cryptoLaw.faq.q2.q")}</strong>
              <p>{t("cryptoLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("cryptoLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("cryptoLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CryptoLaw;
