import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const CommercialLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      {/* Hero */}
      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("commercialLaw.hero.title")}</span>
          <h1>{t("commercialLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("commercialLaw.hero.cta")}
          </Link>
        </div>
      </section>

      {/* Šta je privredno pravo */}
      <section className="law-section">
        <div className="law-container">
          <h2>{t("commercialLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("commercialLaw.whatIs.description")}</p>
        </div>
      </section>

      {/* Usluge */}
      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("commercialLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("commercialLaw.services.companyFormation.title")}</h3>
              <p>{t("commercialLaw.services.companyFormation.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("commercialLaw.services.corporateGovernance.title")}</h3>
              <p>{t("commercialLaw.services.corporateGovernance.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("commercialLaw.services.mna.title")}</h3>
              <p>{t("commercialLaw.services.mna.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("commercialLaw.services.commercialContracts.title")}</h3>
              <p>{t("commercialLaw.services.commercialContracts.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ko su klijenti */}
      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("commercialLaw.clients.title")}</h2>
            <p className="law-lead">{t("commercialLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("commercialLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("commercialLaw.whyUs.point1")}</li>
              <li>{t("commercialLaw.whyUs.point2")}</li>
              <li>{t("commercialLaw.whyUs.point3")}</li>
              <li>{t("commercialLaw.whyUs.point4")}</li>
              <li>{t("commercialLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonijali */}
      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("commercialLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial">
              <p>{t("commercialLaw.testimonials.quote1")}</p>
            </div>
            <div className="law-testimonial">
              <p>{t("commercialLaw.testimonials.quote2")}</p>
            </div>
            <div className="law-testimonial">
              <p>{t("commercialLaw.testimonials.quote3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="law-section">
        <div className="law-container">
          <h2>{t("commercialLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("commercialLaw.faq.q1.q")}</strong>
              <p>{t("commercialLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("commercialLaw.faq.q2.q")}</strong>
              <p>{t("commercialLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("commercialLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("commercialLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CommercialLaw;
