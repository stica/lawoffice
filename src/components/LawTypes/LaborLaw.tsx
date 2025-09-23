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
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('laborLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("laborLaw.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">{t("laborLaw.hero.cta")}</Link>
      </section>

      {/* What is Labor Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("laborLaw.whatIs.title")}</h2>
        <p>{t("laborLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("laborLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("laborLaw.services.employmentContracts.title")}</h3>
            <p>{t("laborLaw.services.employmentContracts.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("laborLaw.services.policies.title")}</h3>
            <p>{t("laborLaw.services.policies.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("laborLaw.services.disputes.title")}</h3>
            <p>{t("laborLaw.services.disputes.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("laborLaw.services.compliance.title")}</h3>
            <p>{t("laborLaw.services.compliance.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("laborLaw.clients.title")}</h2>
        <p>{t("laborLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("laborLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("laborLaw.whyUs.point1")}</li>
          <li>{t("laborLaw.whyUs.point2")}</li>
          <li>{t("laborLaw.whyUs.point3")}</li>
          <li>{t("laborLaw.whyUs.point4")}</li>
          <li>{t("laborLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("laborLaw.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("laborLaw.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("laborLaw.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("laborLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("laborLaw.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("laborLaw.faq.q1.q")}</strong>
            <p>{t("laborLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("laborLaw.faq.q2.q")}</strong>
            <p>{t("laborLaw.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">{t("laborLaw.faq.cta")}</Link>
        </div>
      </section>
    </div>
  );
};

export default LaborLaw;
