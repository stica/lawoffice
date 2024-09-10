"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ContactInfo: React.FC = () => {
  const t = useTranslations('ContactInfo');

  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
        <br /><br />
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>{t('mailHere')}</h3>
                <p>
                  <a href="mailto:natasa.tica@natasaticalawoffice.com">natasa.tica@natasaticalawoffice.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>{t('visitHere')}</h3>
                <p>
                  Novice Cerovića 32, <br /> 78000 Banja Luka
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>{t('callHere')}</h3>
                <p>
                  <a href="tel:+38765231276">+38765 231 276</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
