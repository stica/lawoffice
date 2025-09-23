import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface DataProtectionLawProps {
  messages: any;
  locale: string;
}

const DataProtectionLaw: React.FC<DataProtectionLawProps> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <div className="blog-wrapper space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100 rounded-2xl">
        <h1 className="text-4xl font-bold">{t('dataProtection.hero.title')}</h1>
        <p className="mt-4 text-lg">{t("dataProtection.hero.subtitle")}</p>
        <Link href={`/${locale}/kontakt`} className="btn primary">
          {t("dataProtection.hero.cta")}
        </Link>
      </section>

      {/* What is Data Protection & GDPR */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("dataProtection.whatIs.title")}</h2>
        <p>{t("dataProtection.whatIs.description")}</p>
      </section>

      {/* Key Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("dataProtection.services.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="service-card">
            <h3>{t("dataProtection.services.gdprCompliance.title")}</h3>
            <p>{t("dataProtection.services.gdprCompliance.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("dataProtection.services.dataBreach.title")}</h3>
            <p>{t("dataProtection.services.dataBreach.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("dataProtection.services.privacyPolicies.title")}</h3>
            <p>{t("dataProtection.services.privacyPolicies.description")}</p>
          </div>
          <div className="service-card">
            <h3>{t("dataProtection.services.dpo.title")}</h3>
            <p>{t("dataProtection.services.dpo.description")}</p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("dataProtection.clients.title")}</h2>
        <p>{t("dataProtection.clients.description")}</p>
      </section>

      {/* Why Us - USPs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("dataProtection.whyUs.title")}</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>{t("dataProtection.whyUs.point1")}</li>
          <li>{t("dataProtection.whyUs.point2")}</li>
          <li>{t("dataProtection.whyUs.point3")}</li>
          <li>{t("dataProtection.whyUs.point4")}</li>
          <li>{t("dataProtection.whyUs.point5")}</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("dataProtection.testimonials.title")}</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("dataProtection.testimonials.quote1")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("dataProtection.testimonials.quote2")}</blockquote>
          <blockquote className="italic border-l-4 pl-4 border-blue-600">{t("dataProtection.testimonials.quote3")}</blockquote>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">{t("dataProtection.faq.title")}</h2>
        <div className="space-y-4">
          <div>
            <strong>{t("dataProtection.faq.q1.q")}</strong>
            <p>{t("dataProtection.faq.q1.a")}</p>
          </div>
          <div>
            <strong>{t("dataProtection.faq.q2.q")}</strong>
            <p>{t("dataProtection.faq.q2.a")}</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href={`/${locale}/kontakt`} className="btn primary">
            {t("dataProtection.faq.cta")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataProtectionLaw;
