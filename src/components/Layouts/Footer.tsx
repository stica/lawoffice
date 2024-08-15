"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from '../../../public/images/new/logo5.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={150}
                      height={40}
                    />
                  </Link>
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
                      <i className="fa-brands fa-linkedin-in"></i>
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
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/publications/">
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/">
                      Contact
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
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> Novice Cerovića 32, 78000 Banja Luka
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+387 65 231-276">+387 65 231-276</a> 
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                    <a href="mailto:support@pungent.com">support@pungent.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Law office Nataša Tica
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
