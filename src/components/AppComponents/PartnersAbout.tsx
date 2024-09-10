"use client";

import React, { useState } from "react";
import Image from "next/image";

import aboutImg from "../../../public/images/new/img1.jpg";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PartnersAbout: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  const t = useTranslations("Partners");

  return (
    <>
      <div className="about-lawyer">
        <div className="container">
          <div className="about-lawyer-items">
            <div className="about-lawyer-image">
              <Image
                src={aboutImg}
                alt="image"
                className="rounded-10"
                width={500}
                height={750}
              />
            </div>

            <div className="about-lawyer-content">
              <div className="section-title">
                <h2>Drobnjak Legal & Partners</h2>
              </div>

              <div className="container">
                <p>
                  {t("about1")}
                </p>
                <p>
                  {t("about2")}
                </p>
              </div>

              <div className="partners-about">
                <Link href="https://drobnjaklegal.com/" target="_blank" className="btn btn-primary">
                  <i className="fa-solid fa-list-check me-1"></i> {t("more")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersAbout;
