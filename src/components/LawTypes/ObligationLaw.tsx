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
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('obligationLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("obligationLaw.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">{t("obligationLaw.hero.cta")}</Link>
      </section>

      {/* What is Obligation Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("obligationLaw.whatIs.title")}</h2>
        <p>{t("obligationLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("obligationLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("obligationLaw.services.contractDrafting.title")}</h3>
            <p>{t("obligationLaw.services.contractDrafting.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("obligationLaw.services.debtCollection.title")}</h3>
            <p>{t("obligationLaw.services.debtCollection.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("obligationLaw.services.disputes.title")}</h3>
            <p>{t("obligationLaw.services.disputes.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("obligationLaw.services.mediation.title")}</h3>
            <p>{t("obligationLaw.services.mediation.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("obligationLaw.clients.title")}</h2>
        <p>{t("obligationLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("obligationLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("obligationLaw.whyUs.point1")}</li>
          <li>{t("obligationLaw.whyUs.point2")}</li>
          <li>{t("obligationLaw.whyUs.point3")}</li>
          <li>{t("obligationLaw.whyUs.point4")}</li>
          <li>{t("obligationLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("obligationLaw.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("obligationLaw.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("obligationLaw.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("obligationLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("obligationLaw.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("obligationLaw.faq.q1.q")}</strong>
            <p>{t("obligationLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("obligationLaw.faq.q2.q")}</strong>
            <p>{t("obligationLaw.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">{t("obligationLaw.faq.cta")}</Link>
        </div>
      </section>
    </div>
  );
};

export default ObligationLaw;
