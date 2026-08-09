import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const RealEstateLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("realEstate.hero.title")}</span>
          <h1>{t("realEstate.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("realEstate.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("realEstate.whatIs.title")}</h2>
          <p className="law-lead">{t("realEstate.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("realEstate.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("realEstate.services.transactions.title")}</h3>
              <p>{t("realEstate.services.transactions.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("realEstate.services.dueDiligence.title")}</h3>
              <p>{t("realEstate.services.dueDiligence.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("realEstate.services.leases.title")}</h3>
              <p>{t("realEstate.services.leases.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("realEstate.services.disputes.title")}</h3>
              <p>{t("realEstate.services.disputes.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("realEstate.clients.title")}</h2>
            <p className="law-lead">{t("realEstate.clients.description")}</p>
          </div>
          <div>
            <h2>{t("realEstate.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("realEstate.whyUs.point1")}</li>
              <li>{t("realEstate.whyUs.point2")}</li>
              <li>{t("realEstate.whyUs.point3")}</li>
              <li>{t("realEstate.whyUs.point4")}</li>
              <li>{t("realEstate.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("realEstate.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("realEstate.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("realEstate.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("realEstate.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("realEstate.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("realEstate.faq.q1.q")}</strong>
              <p>{t("realEstate.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("realEstate.faq.q2.q")}</strong>
              <p>{t("realEstate.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("realEstate.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("realEstate.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RealEstateLaw;
