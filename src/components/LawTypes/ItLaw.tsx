import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const ItLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("itLaw.hero.title")}</span>
          <h1>{t("itLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("itLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("itLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("itLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("itLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("itLaw.services.nda.title")}</h3>
              <p>{t("itLaw.services.nda.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("itLaw.services.sla.title")}</h3>
              <p>{t("itLaw.services.sla.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("itLaw.services.contracts.title")}</h3>
              <p>{t("itLaw.services.contracts.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("itLaw.services.disputes.title")}</h3>
              <p>{t("itLaw.services.disputes.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("itLaw.clients.title")}</h2>
            <p className="law-lead">{t("itLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("itLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("itLaw.whyUs.point1")}</li>
              <li>{t("itLaw.whyUs.point2")}</li>
              <li>{t("itLaw.whyUs.point3")}</li>
              <li>{t("itLaw.whyUs.point4")}</li>
              <li>{t("itLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("itLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("itLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("itLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("itLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("itLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("itLaw.faq.q1.q")}</strong>
              <p>{t("itLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("itLaw.faq.q2.q")}</strong>
              <p>{t("itLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("itLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("itLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ItLaw;
