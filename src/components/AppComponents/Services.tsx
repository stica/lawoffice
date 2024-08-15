"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommertialLawService from "./CommertialLawService";
import MyModal from "../Common/modal";

const servicesData = [
  {
    iconName: "pe-7s-portfolio bg-13c4a1",
    title: "Commercial Law",
    shortText:
      "Empowering your business with comprehensive legal solutions.",
    viewDetails: "/services/service-details/",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-credit bg-6610f2",
    title: "Obligation Law",
    shortText:
      "Upholding your contractual rights with steadfast legal support.",
    viewDetails: "/services/service-details/",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-monitor bg-ffb700",
    title: "IT Law",
    shortText:
      "Ensuring your tech ventures thrive within a robust legal framework.",
    viewDetails: "/services/service-details/",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-display2 bg-fc3549",
    title: "Law and digital assets",
    shortText:
      "Navigating the complexities of digital assets with precision and expertise.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-user-female bg-00d280",
    title: "Personal Data Protection (GDPR)",
    shortText:
      "Protecting your privacy in the digital age with GDPR compliance.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-home bg-ff612f",
    title: "Real estate",
    shortText:
      "Securing your property transactions with expert legal guidance.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-news-paper bg-fc3549",
    title: "Inheritance Law",
    shortText:
      "Preserving your legacy with expert inheritance legal services.",
    viewDetails: "/services/service-details/",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-users bg-00d280",
    title: "Family Law",
    shortText:
      "Navigating family matters with compassion and legal proficiency.",
    viewDetails: "/services/service-details/",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-config bg-ff612f",
    title: "Labor Law",
    shortText:
      "Championing your workplace rights with dedicated legal support.",
    viewDetails: "/services/service-details/",
    aosDelay: "600",
  },
];

const Services: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
    
    <div className="about-me">
      <div className="about-me-controls">

        <h2>
          About lawyer
        </h2>
        <p className="lawyer-moto">
          Our expertise, your security in business!
        </p>
        <Link href="/about" className="btn btn-primary">
          More about lawyer
        </Link>
      </div>
      <div className="about-me-image">
        <Image
          src="/images/new/img1.jpg"
          alt="Animate image"
          width={600}
          height={600}
        />
      </div>
    </div>

      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
            From securing your property transactions and protecting your digital privacy to navigating the complexities of digital assets, IT law, obligations, and commercial ventures, our expertise ensures your business and personal affairs are safeguarded with precision and confidence..
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 9).map((value, i) => (
                <div 
                  className="col-lg-4 col-sm-6" 
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg text-center radius-10">
                    <i className={value.iconName}></i>
                    <h3>
                      {/* <Link href="#" onClick={() => openModal()}>{value.title}</Link> */}
                      {value.title}
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CommertialLawService />
      </MyModal>
    </>
  );
};

export default Services;
