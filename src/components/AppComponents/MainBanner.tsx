"use client";

import React, { useState } from "react";
import Image from "next/image";

import ovalShape from '../../../public/images/oval-shape.png';
import { useTranslations } from "next-intl";

const MainBanner: React.FC = () => {
  const t = useTranslations("Home");
  return (
      <>
        <div 
          className="hero-banner it-banner overly bg-fixed" 
          style={{ 
            backgroundImage: `url(/images/banjaluka.jpg)` 
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="main-banner-content-wrapper">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="100"
                      >
                        {t("title")}
                      </h1>
                      <h1
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="100"
                      >
                        Nataša Tica
                      </h1>
                      <p
                        data-aos="fade-up" 
                        data-aos-duration="1000" 
                        data-aos-delay="200"
                      >
                        {t("law_office_description")}
                      </p>

                      <div
                        data-aos="fade-up" 
                        data-aos-duration="1300" 
                        data-aos-delay="300"
                      >

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oval-shape">
            <Image 
              src={ovalShape}
              alt="Shape" 
              width={5000}
              height={330}
            />
          </div>
        </div>
      </>
   );
  }
  
export default MainBanner;