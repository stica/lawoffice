import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const LaborLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("laborLaw.hero.title")}</span>
          <h1>{t("laborLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("laborLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("laborLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("laborLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("laborLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("laborLaw.services.employmentContracts.title")}</h3>
              <p>{t("laborLaw.services.employmentContracts.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("laborLaw.services.policies.title")}</h3>
              <p>{t("laborLaw.services.policies.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("laborLaw.services.disputes.title")}</h3>
              <p>{t("laborLaw.services.disputes.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("laborLaw.services.compliance.title")}</h3>
              <p>{t("laborLaw.services.compliance.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("laborLaw.clients.title")}</h2>
            <p className="law-lead">{t("laborLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("laborLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("laborLaw.whyUs.point1")}</li>
              <li>{t("laborLaw.whyUs.point2")}</li>
              <li>{t("laborLaw.whyUs.point3")}</li>
              <li>{t("laborLaw.whyUs.point4")}</li>
              <li>{t("laborLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("laborLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("laborLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("laborLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("laborLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("laborLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("laborLaw.faq.q1.q")}</strong>
              <p>{t("laborLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("laborLaw.faq.q2.q")}</strong>
              <p>{t("laborLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("laborLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("laborLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaborLaw;
