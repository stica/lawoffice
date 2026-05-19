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
      iconName: "pe-7s-portfolio",
      title: t("commercialLaw"),
      shortText: t("commercialLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "100",
    },
    {
      iconName: "pe-7s-credit",
      title: t("obligationLaw"),
      shortText: t("obligationLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "200",
    },
    {
      iconName: "pe-7s-monitor",
      title: t("itLaw"),
      shortText: t("itLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "300",
    },
    {
      iconName: "pe-7s-display2",
      title: t("lawDigitalAssets"),
      shortText: t("lawDigitalAssetsShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "400",
    },
    {
      iconName: "pe-7s-user-female",
      title: t("personalDataProtection"),
      shortText: t("personalDataProtectionShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "500",
    },
    {
      iconName: "pe-7s-home",
      title: t("realEstate"),
      shortText: t("realEstateShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "600",
    },
    {
      iconName: "pe-7s-news-paper",
      title: t("inheritanceLaw"),
      shortText: t("inheritanceLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "400",
    },
    {
      iconName: "pe-7s-users",
      title: t("familyLaw"),
      shortText: t("familyLawShortText"),
      viewDetails: "/services/service-details/",
      aosDelay: "500",
    },
    {
      iconName: "pe-7s-config",
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
          <blockquote className="quote-card-text">
            "Iustitia est constans et perpetua voluntas ius suum cuique tribuendi."
          </blockquote>
        </div>

        <div className="quote-card-modern quote-card-dark">
          <div className="quote-card-bg-circle"></div>
          <blockquote className="quote-card-text">
            "Ignorantia iuris nocet."
          </blockquote>
        </div>

        <div className="quote-card-modern quote-card-gray">
          <div className="quote-card-bg-circle"></div>
          <blockquote className="quote-card-text">
            "Nemo iudex in causa sua."
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        .quote-card-modern {
          padding: 40px 35px;
          border-radius: 16px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          background: #111111;
          border: 1px solid rgba(196, 163, 90, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .quote-card-modern:hover {
          transform: translateY(-8px);
          border-color: rgba(196, 163, 90, 0.6);
          box-shadow: 0 16px 50px rgba(196, 163, 90, 0.15);
        }

        .quote-card-beige {
          background: linear-gradient(135deg, #141414 0%, #0d0d0d 100%);
        }

        .quote-card-dark {
          background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
        }

        .quote-card-gray {
          background: linear-gradient(135deg, #181818 0%, #111111 100%);
        }

        .quote-card-bg-circle {
          position: absolute;
          width: 120px;
          height: 120px;
          background: rgba(196, 163, 90, 0.06);
          border-radius: 50%;
        }

        .quote-card-beige .quote-card-bg-circle { top: -20px; right: -20px; }
        .quote-card-dark .quote-card-bg-circle { top: -20px; left: -20px; }
        .quote-card-gray .quote-card-bg-circle { bottom: -20px; right: -20px; }

        .quote-card-text {
          font-size: 20px;
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
          font-style: italic;
          position: relative;
          z-index: 1;
          display: block;
          color: #c4a35a;
        }
      `}</style>

      <div className="section-title-new">
        <h2>{t("ourServices")}</h2>
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
