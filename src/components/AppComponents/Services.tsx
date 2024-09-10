"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommertialLawService from "./CommertialLawService";
import MyModal from "../Common/modal";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

function servicesData(t: any): {
  iconName: string,
  title: string,
  shortText: string,
  viewDetails: string,
  aosDelay: string,
}[] {
  return [
    {
      iconName: "pe-7s-portfolio bg-13c4a1",
      title: t("commercialLaw"),
      shortText: t("commercialLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "100",
    },
    {
      iconName: "pe-7s-credit bg-6610f2",
      title: t("obligationLaw"),
      shortText: t("obligationLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "200",
    },
    {
      iconName: "pe-7s-monitor bg-ffb700",
      title: t("itLaw"),
      shortText: t("itLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "300",
    },
    {
      iconName: "pe-7s-display2 bg-fc3549",
      title: t("lawDigitalAssets"),
      shortText: t("lawDigitalAssetsShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "400",
    },
    {
      iconName: "pe-7s-user-female bg-00d280",
      title: t("personalDataProtection"),
      shortText: t("personalDataProtectionShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "500",
    },
    {
      iconName: "pe-7s-home bg-ff612f",
      title: t("realEstate"),
      shortText: t("realEstateShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "600",
    },
    {
      iconName: "pe-7s-news-paper bg-fc3549",
      title: t("inheritanceLaw"),
      shortText: t("inheritanceLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "400",
    },
    {
      iconName: "pe-7s-users bg-00d280",
      title: t("familyLaw"),
      shortText: t("familyLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "500",
    },
    {
      iconName: "pe-7s-config bg-ff612f",
      title: t("laborLaw"),
      shortText: t("laborLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "600",
    },
  ];
}

const Services: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const t = useTranslations("Services");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const pathname = usePathname();

	const currentCode = pathname.split("/")[1] || "en";

  const aboutPath = `/${currentCode}/about`
  return (
    <>
      <div className="about-me">
        <div className="about-me-controls">
          <h2>{t("aboutLawyer")}</h2>
          <p className="lawyer-moto">{t("lawyerMoto")}</p>
          <Link href={aboutPath} className="btn btn-primary">
            {t("moreAboutLawyer")}
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
            <h2>{t("ourServices")}</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData(t).slice(0, 9).map((value, i) => (
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
