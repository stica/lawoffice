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
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('familyLaw.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("familyLaw.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">{t("familyLaw.hero.cta")}</Link>
      </section>

      {/* What is Family Law */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("familyLaw.whatIs.title")}</h2>
        <p>{t("familyLaw.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("familyLaw.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("familyLaw.services.divorce.title")}</h3>
            <p>{t("familyLaw.services.divorce.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("familyLaw.services.custody.title")}</h3>
            <p>{t("familyLaw.services.custody.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("familyLaw.services.property.title")}</h3>
            <p>{t("familyLaw.services.property.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("familyLaw.services.protection.title")}</h3>
            <p>{t("familyLaw.services.protection.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("familyLaw.clients.title")}</h2>
        <p>{t("familyLaw.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("familyLaw.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("familyLaw.whyUs.point1")}</li>
          <li>{t("familyLaw.whyUs.point2")}</li>
          <li>{t("familyLaw.whyUs.point3")}</li>
          <li>{t("familyLaw.whyUs.point4")}</li>
          <li>{t("familyLaw.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("familyLaw.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("familyLaw.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("familyLaw.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("familyLaw.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("familyLaw.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("familyLaw.faq.q1.q")}</strong>
            <p>{t("familyLaw.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("familyLaw.faq.q2.q")}</strong>
            <p>{t("familyLaw.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">{t("familyLaw.faq.cta")}</Link>
        </div>
      </section>
    </div>
  );
};

export default FamilyLaw;
