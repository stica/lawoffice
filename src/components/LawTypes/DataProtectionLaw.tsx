import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const DataProtectionLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("dataProtection.hero.title")}</span>
          <h1>{t("dataProtection.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("dataProtection.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("dataProtection.whatIs.title")}</h2>
          <p className="law-lead">{t("dataProtection.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("dataProtection.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("dataProtection.services.gdprCompliance.title")}</h3>
              <p>{t("dataProtection.services.gdprCompliance.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("dataProtection.services.dataBreach.title")}</h3>
              <p>{t("dataProtection.services.dataBreach.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("dataProtection.services.privacyPolicies.title")}</h3>
              <p>{t("dataProtection.services.privacyPolicies.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("dataProtection.services.dpo.title")}</h3>
              <p>{t("dataProtection.services.dpo.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("dataProtection.clients.title")}</h2>
            <p className="law-lead">{t("dataProtection.clients.description")}</p>
          </div>
          <div>
            <h2>{t("dataProtection.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("dataProtection.whyUs.point1")}</li>
              <li>{t("dataProtection.whyUs.point2")}</li>
              <li>{t("dataProtection.whyUs.point3")}</li>
              <li>{t("dataProtection.whyUs.point4")}</li>
              <li>{t("dataProtection.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("dataProtection.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("dataProtection.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("dataProtection.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("dataProtection.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("dataProtection.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("dataProtection.faq.q1.q")}</strong>
              <p>{t("dataProtection.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("dataProtection.faq.q2.q")}</strong>
              <p>{t("dataProtection.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("dataProtection.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("dataProtection.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DataProtectionLaw;
