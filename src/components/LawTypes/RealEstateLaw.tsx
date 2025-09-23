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
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('realEstate.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("realEstate.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">{t("realEstate.hero.cta")}</Link>
      </section>

      {/* What is Real Estate Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("realEstate.whatIs.title")}</h2>
        <p>{t("realEstate.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("realEstate.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("realEstate.services.transactions.title")}</h3>
            <p>{t("realEstate.services.transactions.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("realEstate.services.dueDiligence.title")}</h3>
            <p>{t("realEstate.services.dueDiligence.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("realEstate.services.leases.title")}</h3>
            <p>{t("realEstate.services.leases.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("realEstate.services.disputes.title")}</h3>
            <p>{t("realEstate.services.disputes.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("realEstate.clients.title")}</h2>
        <p>{t("realEstate.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("realEstate.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("realEstate.whyUs.point1")}</li>
          <li>{t("realEstate.whyUs.point2")}</li>
          <li>{t("realEstate.whyUs.point3")}</li>
          <li>{t("realEstate.whyUs.point4")}</li>
          <li>{t("realEstate.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("realEstate.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("realEstate.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("realEstate.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("realEstate.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("realEstate.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("realEstate.faq.q1.q")}</strong>
            <p>{t("realEstate.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("realEstate.faq.q2.q")}</strong>
            <p>{t("realEstate.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">{t("realEstate.faq.cta")}</Link>
        </div>
      </section>
    </div>
  );
};

export default RealEstateLaw;
