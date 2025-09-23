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
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('commercialLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("commercialLaw.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">{t("commercialLaw.hero.cta")}</Link>
      </section>

      {/* What is Commercial Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("commercialLaw.whatIs.title")}</h2>
        <p>{t("commercialLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("commercialLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("commercialLaw.services.companyFormation.title")}</h3>
            <p>{t("commercialLaw.services.companyFormation.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("commercialLaw.services.corporateGovernance.title")}</h3>
            <p>{t("commercialLaw.services.corporateGovernance.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("commercialLaw.services.mna.title")}</h3>
            <p>{t("commercialLaw.services.mna.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("commercialLaw.services.commercialContracts.title")}</h3>
            <p>{t("commercialLaw.services.commercialContracts.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("commercialLaw.clients.title")}</h2>
        <p>{t("commercialLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("commercialLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("commercialLaw.whyUs.point1")}</li>
          <li>{t("commercialLaw.whyUs.point2")}</li>
          <li>{t("commercialLaw.whyUs.point3")}</li>
          <li>{t("commercialLaw.whyUs.point4")}</li>
          <li>{t("commercialLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("commercialLaw.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("commercialLaw.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("commercialLaw.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("commercialLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("commercialLaw.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("commercialLaw.faq.q1.q")}</strong>
            <p>{t("commercialLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("commercialLaw.faq.q2.q")}</strong>
            <p>{t("commercialLaw.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">{t("commercialLaw.faq.cta")}</Link>
        </div>
      </section>
    </div>
  );
};

export default CommercialLaw;
