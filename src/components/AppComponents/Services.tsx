"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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

const Services: React.FC<{ messages: any, locale: string }> = ({ messages, locale }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  const t = useTranslations("Services");

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const pathname = usePathname();

  // const currentCode = pathname.split("/")[1] || "en";

  // const aboutPath = `/${currentCode}/about`
  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '25px',
        padding: '60px 20px',
        maxWidth: '1320px',
        margin: '0 auto',
      }}>
        <div className="quote-card-modern quote-card-beige">
          <div className="quote-card-bg-circle"></div>
          <h1 className="quote-card-text">
            "Iustitia est constans et perpetua voluntas ius suum cuique tribuendi."
          </h1>
        </div>

        <div className="quote-card-modern quote-card-dark">
          <div className="quote-card-bg-circle"></div>
          <h1 className="quote-card-text">
            "Ignorantia iuris nocet."
          </h1>
        </div>

        <div className="quote-card-modern quote-card-gray">
          <div className="quote-card-bg-circle"></div>
          <h1 className="quote-card-text">
            "Nemo iudex in causa sua."
          </h1>
        </div>
      </div>

      <style jsx>{`
        .quote-card-modern {
          padding: 40px 35px;
          border-radius: 16px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .quote-card-beige {
          background: linear-gradient(135deg, #f7f0e8 0%, #e8dfd3 100%);
          box-shadow: 0 8px 30px rgba(81, 61, 72, 0.08);
          border: 1px solid rgba(247, 240, 232, 0.4);
        }

        .quote-card-beige:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(81, 61, 72, 0.15);
        }

        .quote-card-beige .quote-card-bg-circle {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: rgba(81, 61, 72, 0.05);
          border-radius: 50%;
        }

        .quote-card-beige .quote-card-text {
          color: #513D48;
        }

        .quote-card-dark {
          background: linear-gradient(135deg, #513D48 0%, #3d2e38 100%);
          box-shadow: 0 8px 30px rgba(81, 61, 72, 0.15);
        }

        .quote-card-dark:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(81, 61, 72, 0.25);
        }

        .quote-card-dark .quote-card-bg-circle {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100px;
          height: 100px;
          background: rgba(247, 240, 232, 0.1);
          border-radius: 50%;
        }

        .quote-card-dark .quote-card-text {
          color: #f7f0e8;
        }

        .quote-card-gray {
          background: linear-gradient(135deg, #646464 0%, #4a4a4a 100%);
          box-shadow: 0 8px 30px rgba(100, 100, 100, 0.12);
        }

        .quote-card-gray:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 45px rgba(100, 100, 100, 0.2);
        }

        .quote-card-gray .quote-card-bg-circle {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: rgba(247, 240, 232, 0.1);
          border-radius: 50%;
        }

        .quote-card-gray .quote-card-text {
          color: #ffffff;
        }

        .quote-card-text {
          font-size: 20px;
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
          font-style: italic;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="section-title-new">
        <h1>{t("ourServices")}</h1>
      </div>

      <div className="bg-fcfbfb pt-100 pb-70 services-container-wrapper">
        <div className="services-container">
          {/* <div className="section-title">
            <h2>{t("ourServices")}</h2>
          </div> */}

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
                      <a
                        href={
                          value.title.toLowerCase() === "personal data protection (gdpr)" || value.title.toLowerCase() === "zaštita ličnih podataka (gdpr)"
                            ? `/${locale}/zastita-licnih-podataka-gdpr`
                            : value.title.toLowerCase() === "it law" || value.title.toLowerCase() === "it pravo"
                            ? `/${locale}/it-pravo`
                            : value.title.toLowerCase() === "digitalna imovina" || value.title.toLowerCase() === "digital assets"
                            ? `/${locale}/crypto-pravo`
                            : value.title.toLowerCase() === "commercial law" || value.title.toLowerCase() === "privredno pravo"
                            ? `/${locale}/privredno-pravo`
                            : value.title.toLowerCase() === "obligation law" || value.title.toLowerCase() === "obligaciono pravo"
                            ? `/${locale}/obligaciono-pravo`
                            : value.title.toLowerCase() === "real estate" || value.title.toLowerCase() === "nekretnine"
                            ? `/${locale}/nekretnine`
                            : value.title.toLowerCase() === "inheritance law" || value.title.toLowerCase() === "nasljedno pravo"
                            ? `/${locale}/nasljedno-pravo`
                            : value.title.toLowerCase() === "family law" || value.title.toLowerCase() === "porodično pravo" || value.title.toLowerCase() === "porodično pravo"
                            ? `/${locale}/porodicno-pravo`
                            : value.title.toLowerCase() === "labor law" || value.title.toLowerCase() === "radno pravo"
                            ? `/${locale}/radno-pravo`
                            : "#"
                        }
                      >
                        {value.title}
                      </a>

                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <MyModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <CommertialLawService />
      </MyModal> */}
    </>
  );
};

export default Services;
