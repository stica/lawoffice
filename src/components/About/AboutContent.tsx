import React  from "react";
import Image from "next/image";

import aboutImg from "../../../public/images/new/aboutImage.jpg";
import { useTranslations } from "next-intl";

const AboutContent: React.FC<{ messages: any }> = ({ messages }) => {
  const t = useTranslations("About");

  // const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="about-lawyer">
        <div className="container">
          <div className="about-lawyer-items">
            <div className="about-lawyer-image">
              <Image
                src={aboutImg}
                alt="image"
                className="rounded-10 responsive-margin"
                width={500}
                height={750}
              />
            </div>

            <div className="about-lawyer-content">
              <div className="section-title">
              <h2>{t('about')}</h2>
              </div>

              <div className="container">
                <p>{t('paragraphs.p1')}</p>

                <p>{t('paragraphs.t1')}:</p>
                <ul>
                  <li>{t('paragraphs.p2')}</li>
                  <li>{t('paragraphs.p3')}</li>
                </ul>

                <p>{t('paragraphs.t2')}:</p>
                <ul>
                  <li>{t('paragraphs.p4')}</li>
                </ul>

                <p>{t('paragraphs.t3')}:</p>
                <ul>
                  <li>{t('paragraphs.r1')}</li>
                  <li>{t('paragraphs.r2')}</li>
                  <li>{t('paragraphs.r3')}</li>
                  <li>{t('paragraphs.r4')}</li>
                  <li>{t('paragraphs.r5')}</li>
                  <li>{t('paragraphs.r6')}</li>
                </ul>

                <p>{t('paragraphs.p5')}</p>
                <ul>
                  <li>{t('paragraphs.pr1')}</li>
                  <li>{t('paragraphs.pr2')}</li>
                  <li>{t('paragraphs.pr3')}</li>
                </ul>

                <p>{t('paragraphs.p6')}</p>

                <p>{t('paragraphs.t4')}</p>
                <ul>
                  <li>{t('paragraphs.c1')}</li>
                </ul>

                <p>{t('paragraphs.t5')}</p>
                <ul>
                  <li>{t('paragraphs.l1')}</li>
                </ul>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
