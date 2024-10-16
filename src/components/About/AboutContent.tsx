"use client";

import React, { useState } from "react";
import Image from "next/image";

import aboutImg from "../../../public/images/new/aboutImage.jpg";
import { useTranslations } from "next-intl";

const AboutContent: React.FC = () => {
  const t = useTranslations("About");

  const [toggler, setToggler] = useState(false);
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
                <p>{t('paragraphs.p2')}</p>
                <p>{t('paragraphs.p3')}</p>
                <p>{t('paragraphs.p4')}</p>
                <p>{t('paragraphs.p5')}</p>
                <p>{t('paragraphs.p6')}</p>
                <ul>
                  <li>{t('paragraphs.listItem1')}</li>
                  <li>{t('paragraphs.listItem2')}</li>
                  <li>{t('paragraphs.listItem3')}</li>
                </ul>
                <p>{t('paragraphs.p7')}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
