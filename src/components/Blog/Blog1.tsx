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
  const t = useTranslations("Blog");

  return (
    <>
      <div className="blog-wrapper">
        <article className="prose lg:prose-xl mx-auto px-4 py-8">
          <h1>{t('title')}</h1>

          <p>{t('intro')}</p>
          <p>{t('topicIntro')}</p>

          <h2>{t('heading1')}</h2>
          <p>{t('dpoImportance')}</p>
          <p>{t('legalBasis')}</p>

          <p className="border-l-4 pl-4 italic text-gray-600">
            {t('articleQuote')}
          </p>

          <p className="border-l-4 pl-4 italic text-gray-600">
            {t('articleQuote1')}
          </p>

          <p>{t('qualificationWarning')}</p>
          <p>{t('administrativeNote')}</p>
          <p>{t('howToAppoint')}</p>

          <h2>{t('heading2')}</h2>
          <p>{t('introCases')}</p>

          <section className="mt-6">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={noFlag}
                alt="Norway Flag"
                width={32}
                height={24}
                className="inline-block mr-2"
                style={{ marginRight: '15px' }}
              />
              <h3 className="text-xl font-semibold">{t('norwayCaseTitle')}</h3>
            </div>
            <p>{t('norwayCaseBody')}</p>
            <ul className="list-disc pl-6">
              <li>{t('norwayFindings.noDPO')}</li>
              <li>{t('norwayFindings.noContactInfo')}</li>
              <li>{t('norwayFindings.incompleteRecords')}</li>
              <li>{t('norwayFindings.conflict')}</li>
            </ul>
            <p>{t('norwayConclusion')}</p>
          </section>

          <section className="mt-6">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={grFlag}
                alt="Greece Flag"
                width={32}
                height={24}
                className="inline-block mr-2"
                style={{ marginRight: '15px' }}
              />
              <h3 className="text-xl font-semibold">{t('greeceCaseTitle')}</h3>
            </div>
            <p>{t('greeceCaseBody')}</p>
            <p>{t('greeceConclusion')}</p>
          </section>

          <section className="mt-6">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={hrFlag}
                alt="Croatia Flag"
                width={32}
                height={24}
                className="inline-block mr-2"
                style={{ marginRight: '15px' }}
              />
              <h3 className="text-xl font-semibold">{t('croatiaCaseTitle')}</h3>
            </div>
            <p>{t('croatiaCaseBody')}</p>
          </section>

          <h2 className="mt-10">{t('heading3')}</h2>
          <p>{t('conclusion')}</p>
          <p>{t('finalNote')}</p>
        </article>
      </div>
    </>
  );
};

// Add getStaticProps for SSG
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   // Import the messages for the requested locale
//   const messages = (await import(`../../../messages/${locale}.json`)).default;
  
//   return {
//     props: {
//       messages,
//       locale: locale || 'en',
//     },
//     // Optional: specify revalidation time in seconds (for ISR)
//     // revalidate: 3600, // revalidate every hour
//   };
// };

export default Blog1;