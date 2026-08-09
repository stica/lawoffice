import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  messages: any;
  locale: string;
}

const FamilyLaw: React.FC<Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="law-page">

      <section className="law-hero">
        <div className="law-hero-inner">
          <span className="law-hero-badge">{t("familyLaw.hero.title")}</span>
          <h1>{t("familyLaw.hero.subtitle")}</h1>
          <Link href={`/${locale}/kontakt`} className="law-hero-btn">
            {t("familyLaw.hero.cta")}
          </Link>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("familyLaw.whatIs.title")}</h2>
          <p className="law-lead">{t("familyLaw.whatIs.description")}</p>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("familyLaw.services.title")}</h2>
          <div className="law-services-grid">
            <div className="law-service-card">
              <h3>{t("familyLaw.services.divorce.title")}</h3>
              <p>{t("familyLaw.services.divorce.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("familyLaw.services.custody.title")}</h3>
              <p>{t("familyLaw.services.custody.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("familyLaw.services.property.title")}</h3>
              <p>{t("familyLaw.services.property.description")}</p>
            </div>
            <div className="law-service-card">
              <h3>{t("familyLaw.services.protection.title")}</h3>
              <p>{t("familyLaw.services.protection.description")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container law-two-col">
          <div>
            <h2>{t("familyLaw.clients.title")}</h2>
            <p className="law-lead">{t("familyLaw.clients.description")}</p>
          </div>
          <div>
            <h2>{t("familyLaw.whyUs.title")}</h2>
            <ul className="law-why-list">
              <li>{t("familyLaw.whyUs.point1")}</li>
              <li>{t("familyLaw.whyUs.point2")}</li>
              <li>{t("familyLaw.whyUs.point3")}</li>
              <li>{t("familyLaw.whyUs.point4")}</li>
              <li>{t("familyLaw.whyUs.point5")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="law-section law-section-alt">
        <div className="law-container">
          <h2>{t("familyLaw.testimonials.title")}</h2>
          <div className="law-testimonials">
            <div className="law-testimonial"><p>{t("familyLaw.testimonials.quote1")}</p></div>
            <div className="law-testimonial"><p>{t("familyLaw.testimonials.quote2")}</p></div>
            <div className="law-testimonial"><p>{t("familyLaw.testimonials.quote3")}</p></div>
          </div>
        </div>
      </section>

      <section className="law-section">
        <div className="law-container">
          <h2>{t("familyLaw.faq.title")}</h2>
          <div className="law-faq">
            <div className="law-faq-item">
              <strong>{t("familyLaw.faq.q1.q")}</strong>
              <p>{t("familyLaw.faq.q1.a")}</p>
            </div>
            <div className="law-faq-item">
              <strong>{t("familyLaw.faq.q2.q")}</strong>
              <p>{t("familyLaw.faq.q2.a")}</p>
            </div>
          </div>
          <div className="law-cta-strip">
            <p>{t("familyLaw.faq.cta")}</p>
            <Link href={`/${locale}/kontakt`} className="custom-btn">
              {t("familyLaw.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FamilyLaw;
