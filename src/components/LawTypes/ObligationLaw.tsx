import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const ObligationLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("obligationLaw.hero.title")}</span>
          <h1>{t("obligationLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("obligationLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("obligationLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("obligationLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("obligationLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("obligationLaw.services.contractDrafting.title")}</h3>
              <p>{t("obligationLaw.services.contractDrafting.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("obligationLaw.services.debtCollection.title")}</h3>
              <p>{t("obligationLaw.services.debtCollection.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("obligationLaw.services.disputes.title")}</h3>
              <p>{t("obligationLaw.services.disputes.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("obligationLaw.services.mediation.title")}</h3>
              <p>{t("obligationLaw.services.mediation.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("obligationLaw.clients.title")}</h2>
            <p className="law-lead">{t("obligationLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("obligationLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("obligationLaw.whyUs.point1")}</li>
              <li>{t("obligationLaw.whyUs.point2")}</li>
              <li>{t("obligationLaw.whyUs.point3")}</li>
              <li>{t("obligationLaw.whyUs.point4")}</li>
              <li>{t("obligationLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("obligationLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("obligationLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("obligationLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("obligationLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("obligationLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("obligationLaw.faq.q1.q")}</strong>
              <p>{t("obligationLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("obligationLaw.faq.q2.q")}</strong>
              <p>{t("obligationLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("obligationLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("obligationLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ObligationLaw;
