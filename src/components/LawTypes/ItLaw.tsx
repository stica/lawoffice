import React from "react";
import { useTranslations } from "next-intl";

interface Blog1Props {
  messages: any;
  locale: string;
}

const Blog1: React.FC<Blog1Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="blog-wrapper space-y-16">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('itLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("itLaw.hero.subtitle")}</p>
        <button className="btn primary">
            {t("itLaw.hero.cta")}
          </button>
      </section>

      {/* What is IT Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("itLaw.whatIs.title")}</h2>
        <p>{t("itLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("itLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("itLaw.services.nda.title")}</h3>
            <p>{t("itLaw.services.nda.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("itLaw.services.sla.title")}</h3>
            <p>{t("itLaw.services.sla.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("itLaw.services.contracts.title")}</h3>
            <p>{t("itLaw.services.contracts.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("itLaw.services.disputes.title")}</h3>
            <p>{t("itLaw.services.disputes.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("itLaw.clients.title")}</h2>
        <p>{t("itLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("itLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("itLaw.whyUs.point1")}</li>
          <li>{t("itLaw.whyUs.point2")}</li>
          <li>{t("itLaw.whyUs.point3")}</li>
          <li>{t("itLaw.whyUs.point4")}</li>
          <li>{t("itLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("itLaw.testimonials.title")}</h2>
        <div className="space-y-6">
          <blockquote>{t("itLaw.testimonials.quote1")}</blockquote>
          <blockquote>{t("itLaw.testimonials.quote2")}</blockquote>
          <blockquote>{t("itLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("itLaw.faq.title")}</h2>
        <div className="space-y-6">
          <div>
            <strong>{t("itLaw.faq.q1.q")}</strong>
            <p>{t("itLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("itLaw.faq.q2.q")}</strong>
            <p>{t("itLaw.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="btn primary">
            {t("itLaw.faq.cta")}
          </button>
        </div>
      </section>

    </div>
  );
};

export default Blog1;
