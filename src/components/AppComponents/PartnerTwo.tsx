import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const partnersData = [
  {
    image: "/images/clients/acx.jpg",
    link: "https://www.acx.ba/",
    aosDelay: "100",
  },
  {
    image: "/images/clients/adriaticvalley.png",
    link: "https://www.adriaticvalley.com/",
    aosDelay: "200",
  },
  {
    image: "/images/clients/blubear.jpg",
    link: "https://blubear.app/",
    aosDelay: "300",
  },
  {
    image: "/images/clients/cyberwings.jpg",
    link: "https://cyberwings.team/",
    aosDelay: "400",
  },
  {
    image: "/images/clients/autobox.png",
    link: "https://autobox.ba/",
    aosDelay: "500",
  },
  {
    image: "/images/clients/markes.png",
    link: "https://markes-bl.com/",
    aosDelay: "600",
  },
  {
    image: "/images/clients/lolamagazin.png",
    link: "https://lolamagazin.com/",
    aosDelay: "700",
  },
  {
    image: "/images/clients/dotmedia.jpg",
    link: "https://www.facebook.com/pages/DOT-media/1021802811239923",
    aosDelay: "800",
  },
  {
    image: "/images/clients/nashdigital.jpg",
    link: "#",
    aosDelay: "900",
  },
  {
    image: "/images/clients/agro.jpg",
    link: "#",
    aosDelay: "1000",
  },
  {
    image: "/images/clients/remdesign.jpg",
    link: "#",
    aosDelay: "1100",
  },
  {
    image: "/images/clients/nar.jpg",
    link: "#",
    aosDelay: "1200",
  },
];

const PartnerTwo: React.FC<{ messages: any }> = ({ messages }) => {
  const t = useTranslations("Clients");

  return (
    <>
      <Image
        src="/images/new/sign-mockup.webp"
        alt="Description of SVG"
        width={1920}
        height={1080}
        loading="lazy"
        quality={75}
      />

      <div className="partner-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>
              {t("clients")}
            </h2>
          </div>

          <div className="row align-items-center justify-content-center">
            {partnersData &&
              partnersData.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner border"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="d-table">
                      <div className="d-table-cell">
                        <a href={value.link} target="_blank">
                          <Image
                            src={value.image}
                            alt="Partner Image"
                            width={100}
                            height={100}
                            loading="lazy"
                            quality={75}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>


      <Image
        src="/images/new/image-office.webp"
        alt="Law office interior"
        width={1920}
        height={1080}
        loading="lazy"
        className="w-full"
      />
    </>
  );
};

export default PartnerTwo;
