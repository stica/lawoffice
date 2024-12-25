import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

function ourWorksData(t: any): {
  image: string;
  title: any;
  category: any;
  viewDetails: string;
  aosDelay: string;
}[] {
  return [
    {
      image: "/images/publications/p3.jpg",
      title: t('digital_assets_guide'),
      category: t('seminar'),
      viewDetails: "https://komorars.ba/odrzan-seminar-digitalna-imovina-u-praksi-vodic-za-pravna-i-fizicka-lica/",
      aosDelay: "100",
    },
    {
      image: "/images/publications/p4.jpg",
      title: t('local_government'),
      category: t('law_faculty'),
      viewDetails: "https://komorars.ba/bfc-see-primjeri-dobre-prakse-predstavljeni-na-5-konferenciji-lokalna-samouprava-u-republici-srpskoj/",
      aosDelay: "200",
    },
    {
      image: "/images/publications/p2.jpg",
      title: t('virtual_currency_integration'),
      category: t('seminar'),
      viewDetails: "https://cryptoadria.com/portal/2024/04/30/odrzana-radionica-o-integraciji-virtuelnih-valuta-u-svakodnevnom-poslovanju/",
      aosDelay: "300",
    },
    {
      image: "/images/publications/p1.jpg",
      title: t('crypto_market_regulation'),
      category: t('podcast'),
      viewDetails: "https://www.youtube.com/watch?v=RqkejbOagaM&t=48s",
      aosDelay: "400",
    },
  ];
}

const OurWorks: React.FC<{ messages: any }> = ({ messages }) => {
  const t = useTranslations("Services");

  return (
    <>
      <section className="case-studies-area ptb-100">
        <div className="container">

          <div className="row justify-content-center">
            {ourWorksData(t) &&
              ourWorksData(t).slice(0, 6).map((value, i) => (
                <div className="col-lg-6 col-sm-6 publications-item" key={i}>
                  <div
                    className="work-card text-center"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image src={value.image} alt="image" width={510} height={700} className="publications-item-image" />

                    <div className="content">
                      <span>
                        <Link className="link-title" target="_blank" href={value.viewDetails} rel="noopener noreferrer">{value.category}</Link>
                      </span>

                      <h3>
                        <Link className="link-text" href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link target="_blank" href={value.viewDetails} className="custom-btn">
                        {t("more_details")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
