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
  const abouthPath = `/${currentCode}/about`;
  const homePath = `/${currentCode}/home`;
  const publicationsPath = `/${currentCode}/publications`;
  const partnersPath = `/${currentCode}/partners`;
  const contactPath = `/${currentCode}/contact`;

  return (
    <>
      <footer className="footer-area" style={{
        backgroundImage: `url(/images/new/footer.jpg)`,
        backgroundSize: 'cover',     // Keep the image size as is
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // Center the image within the container
        width: '100%',                // Ensure the container is full width
        height: '100%'
      }}>

        <div className="container" >
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
