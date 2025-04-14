import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import hrFlag from "../../../public/images/flags/hr.png";
import grFlag from "../../../public/images/flags/gr.png";
import noFlag from "../../../public/images/flags/no.png";

// Define props type
interface Blog1Props {
  messages: any;
  locale: string;
}

const Blog1: React.FC<Blog1Props> = ({ messages, locale }) => {
  const t = useTranslations("lawtypes");

  return (
    <>
      <div className="blog-wrapper">
        <section>
          <h1>{t('itLaw.title')}</h1>
          <p>{t('itLaw.intro')}</p>

          <h2>{t('itLaw.typesOfContractsTitle')}</h2>
          <ul>
            <li>
              <strong>{t('itLaw.serviceAgreement.title')}</strong><br />
              {t('itLaw.serviceAgreement.description')}
            </li>
            <li>
              <strong>{t('itLaw.sow.title')}</strong><br />
              {t('itLaw.sow.description')}
            </li>
            <li>
              <strong>{t('itLaw.nda.title')}</strong><br />
              {t('itLaw.nda.description')}
            </li>
            <li>
              <strong>{t('itLaw.softwareLicense.title')}</strong><br />
              {t('itLaw.softwareLicense.description')}
            </li>
            <li>
              <strong>{t('itLaw.saasPaasIaas.title')}</strong><br />
              {t('itLaw.saasPaasIaas.description')}
            </li>
            <li>
              <strong>{t('itLaw.sla.title')}</strong><br />
              {t('itLaw.sla.description')}
            </li>
          </ul>

          <p>{t('itLaw.reviewAndPreparation')}</p>
        </section>

      </div>
    </>
  );
};

export default Blog1;