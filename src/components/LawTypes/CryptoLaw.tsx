import React from "react";
import { useTranslations } from "next-intl";

interface CryptoLawProps {
  messages: any;
  locale: string;
}

const CryptoLaw: React.FC<CryptoLawProps> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="blog-wrapper space-y-16">

      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('cryptoLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("cryptoLaw.hero.subtitle")}</p>
        <button className="btn primary">
        {t("itLaw.hero.cta")}
        </button>
      </section>

      {/* What is Crypto Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("cryptoLaw.whatIs.title")}</h2>
        <p>{t("cryptoLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("cryptoLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("cryptoLaw.services.tokenization.title")}</h3>
            <p>{t("cryptoLaw.services.tokenization.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("cryptoLaw.services.smartContracts.title")}</h3>
            <p>{t("cryptoLaw.services.smartContracts.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("cryptoLaw.services.regulatory.title")}</h3>
            <p>{t("cryptoLaw.services.regulatory.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("cryptoLaw.services.disputes.title")}</h3>
            <p>{t("cryptoLaw.services.disputes.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("cryptoLaw.clients.title")}</h2>
        <p>{t("cryptoLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("cryptoLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("cryptoLaw.whyUs.point1")}</li>
          <li>{t("cryptoLaw.whyUs.point2")}</li>
          <li>{t("cryptoLaw.whyUs.point3")}</li>
          <li>{t("cryptoLaw.whyUs.point4")}</li>
          <li>{t("cryptoLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("cryptoLaw.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("cryptoLaw.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("cryptoLaw.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("cryptoLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("cryptoLaw.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("cryptoLaw.faq.q1.q")}</strong>
            <p>{t("cryptoLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("cryptoLaw.faq.q2.q")}</strong>
            <p>{t("cryptoLaw.faq.q2.a")}</p>
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

export default CryptoLaw;
