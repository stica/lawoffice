"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import logo from '../../../public/images/new/logo5.jpg';
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const currentCode = pathname.split("/")[1] || "en";

  const path = `/${currentCode}`;
  const abouthPath = `/${currentCode}/o-advokatu`;
  const homePath = `/${currentCode}/`;
  const publicationsPath = `/${currentCode}/publikacije`;
  const blogPath = `/${currentCode}/blog`;
  const partnersPath = `/${currentCode}/partneri`;
  const contactPath = `/${currentCode}/kontakt`;



  return (
    <>
      <footer className="footer-area" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Logo watermark */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 0,
        }}>
          <svg viewBox="0 0 387.84 484.37" style={{ width: '420px', height: '420px', opacity: 0.18, fill: '#ffffff' }}>
            <polygon points="195.68 364.12 208.44 376.88 221.2 364.07 221.2 287.04 195.68 261.52 195.68 364.12"/>
            <polygon points="144.43 312.81 170.05 338.44 170.05 192.78 144.43 167.15 144.43 312.81"/>
            <polygon points="246.92 153.96 272.56 128.34 144.43 128.34 170.05 153.96 195.68 153.96 195.68 218.63 221.3 244.25 221.3 153.96 246.92 153.96"/>
            <polygon points="246.92 338.44 272.55 312.84 272.55 167.15 246.92 192.79 246.92 338.44"/>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="logo">
                  {/* <Link href={path}>
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={150}
                      height={40}
                    />
                  </Link> */}
                </div>

                <ul className="social-links">
                  {/* <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.linkedin.com/in/nata%C5%A1a-tica-302b03153/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i> {t('linkedin')}
                    </a>
                  </li>

                  {/* <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>{t('explore')}</h3>

                <ul className="list">
                  <li>
                    <Link href={homePath}>
                      {t('home')}
                    </Link>
                  </li>
                  <li>
                    <Link href={abouthPath}>
                      {t('about')}
                    </Link>
                  </li>
                  <li>
                    <Link href={blogPath}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={publicationsPath}>
                      {t('publications')}
                    </Link>
                  </li>
                  <li>
                    <Link href={partnersPath}>
                      {t('partners')}
                    </Link>
                  </li>
                  <li>
                    <Link href={contactPath}>
                      {t('contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3>{t('getInTouch')}</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> {t('address')}
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+387 65 231-276">{t('phone')}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:natasa.tica@natasaticalawoffice.com">{t('email')}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copyright-area">
              Copyright &copy; {currentYear} Law office Nataša Tica
            </p>
        </div>

        {/* <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Law office Nataša Tica
            </p>
          </div>
        </div> */}

      </footer>
    </>
  );
};

export default Footer;
