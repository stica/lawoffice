import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const InheritanceLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("inheritanceLaw.hero.title")}</span>
          <h1>{t("inheritanceLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("inheritanceLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("inheritanceLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("inheritanceLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("inheritanceLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("inheritanceLaw.services.wills.title")}</h3>
              <p>{t("inheritanceLaw.services.wills.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("inheritanceLaw.services.probate.title")}</h3>
              <p>{t("inheritanceLaw.services.probate.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("inheritanceLaw.services.disputes.title")}</h3>
              <p>{t("inheritanceLaw.services.disputes.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("inheritanceLaw.services.advice.title")}</h3>
              <p>{t("inheritanceLaw.services.advice.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("inheritanceLaw.clients.title")}</h2>
            <p className="law-lead">{t("inheritanceLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("inheritanceLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("inheritanceLaw.whyUs.point1")}</li>
              <li>{t("inheritanceLaw.whyUs.point2")}</li>
              <li>{t("inheritanceLaw.whyUs.point3")}</li>
              <li>{t("inheritanceLaw.whyUs.point4")}</li>
              <li>{t("inheritanceLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("inheritanceLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("inheritanceLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("inheritanceLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("inheritanceLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("inheritanceLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("inheritanceLaw.faq.q1.q")}</strong>
              <p>{t("inheritanceLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("inheritanceLaw.faq.q2.q")}</strong>
              <p>{t("inheritanceLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("inheritanceLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("inheritanceLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InheritanceLaw;
