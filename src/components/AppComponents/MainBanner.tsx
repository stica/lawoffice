import React from "react";
import { useTranslations } from "next-intl";

const MainBanner: React.FC<{ messages: any, lang: string }> = ({ messages, lang }) => {
  const t = useTranslations("Home");
  const contactPath = `/${lang}/kontakt`;

  return (
    <>
      <div className="ntl-main-page">

        <div
          className="hero-banner it-banner overly ntl-main-page-left"
          style={{
            backgroundImage: `url(/images/banjaluka.webp)`
          }}
        >
          <svg className="svg1" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 484.37"><defs></defs><polygon points="195.68 364.12 208.44 376.88 221.2 364.07 221.2 287.04 195.68 261.52 195.68 364.12" /><polygon points="144.43 312.81 170.05 338.44 170.05 192.78 144.43 167.15 144.43 312.81" /><polygon points="246.92 153.96 272.56 128.34 144.43 128.34 170.05 153.96 195.68 153.96 195.68 218.63 221.3 244.25 221.3 153.96 246.92 153.96" /><polygon points="246.92 338.44 272.55 312.84 272.55 167.15 246.92 192.79 246.92 338.44" /><path d="M361.32,309.79H349.66l-2.35,6.31h-1.72l9-24h1.75l9,24h-1.72Zm-.49-1.33-5.32-14.33-5.36,14.33Z" /><path d="M392.6,294.76Q396,298,396,303.84t-3.38,9q-3.39,3.22-9.62,3.22h-6.9V291.5H383Q389.22,291.5,392.6,294.76Zm-1.14,17.12q2.91-2.89,2.91-8t-2.91-8.1q-2.91-2.91-8.48-2.91h-5.33v21.94H383Q388.54,314.77,391.46,311.88Z" /><path d="M426,291.5l-9.39,24.6H414.9l-9.36-24.6h1.72l8.51,22.74,8.59-22.74Z" /><path d="M441.42,314.79a11.28,11.28,0,0,1-4.27-4.47,14.45,14.45,0,0,1,0-13,11.16,11.16,0,0,1,4.27-4.45,12.56,12.56,0,0,1,12.27,0,11.16,11.16,0,0,1,4.27,4.45,14.45,14.45,0,0,1,0,13,11.28,11.28,0,0,1-4.27,4.47,12.63,12.63,0,0,1-12.27,0Zm11.39-1.18a9.58,9.58,0,0,0,3.7-3.89,12.27,12.27,0,0,0,1.35-5.88,12.42,12.42,0,0,0-1.35-5.93,9.62,9.62,0,0,0-3.7-3.88,10.76,10.76,0,0,0-10.51,0,9.71,9.71,0,0,0-3.71,3.88,12.19,12.19,0,0,0-1.37,5.93,12,12,0,0,0,1.37,5.88,9.67,9.67,0,0,0,3.71,3.89,10.76,10.76,0,0,0,10.51,0Z" /><path d="M483.89,316.1l-11.32-11.6v11.6H471V291.5h1.57v11.71l11.32-11.71h2l-12,12.34,12,12.26Z" /><path d="M510.27,309.79H498.61l-2.35,6.31h-1.72l9-24h1.75l9,24h-1.72Zm-.49-1.33-5.32-14.33-5.36,14.33Z" /><path d="M538.62,291.5v1.33h-7V316.1H530V292.83h-7V291.5Z" /><path d="M552,315.5a6.77,6.77,0,0,1-2.78-2.27,6.32,6.32,0,0,1-1.14-3.19h1.64a6,6,0,0,0,1.81,3.43,6.32,6.32,0,0,0,4.64,1.51,7,7,0,0,0,3.17-.67,5,5,0,0,0,2.09-1.82,4.66,4.66,0,0,0,.73-2.56,4.29,4.29,0,0,0-.86-2.83,5.23,5.23,0,0,0-2.13-1.58,30.7,30.7,0,0,0-3.45-1.12,27.87,27.87,0,0,1-3.84-1.26,6,6,0,0,1-2.45-1.95,5.76,5.76,0,0,1-1-3.59,5.84,5.84,0,0,1,.93-3.21A6.32,6.32,0,0,1,552,292.1a8.94,8.94,0,0,1,4-.84,8.1,8.1,0,0,1,5.26,1.61,6.28,6.28,0,0,1,2.38,4H562a5.25,5.25,0,0,0-.93-1.93,5.5,5.5,0,0,0-2-1.63,7.09,7.09,0,0,0-3.14-.65,6.37,6.37,0,0,0-4.13,1.35,4.83,4.83,0,0,0-.81,6.45,5.52,5.52,0,0,0,2.15,1.61,27,27,0,0,0,3.46,1.11,31,31,0,0,1,3.83,1.27,6.08,6.08,0,0,1,2.42,1.93,5.72,5.72,0,0,1,1,3.56,6,6,0,0,1-.88,3.12,6.57,6.57,0,0,1-2.57,2.4,8.5,8.5,0,0,1-4.12.93A9.55,9.55,0,0,1,552,315.5Z" /><path d="M588.13,316.1l-11.32-11.6v11.6h-1.57V291.5h1.57v11.71l11.32-11.71h2l-12,12.34,12,12.26Z" /><path d="M614.52,309.79H602.85l-2.35,6.31h-1.72l9-24h1.75l9,24h-1.72Zm-.5-1.33-5.32-14.33-5.36,14.33Z" /><path d="M658.77,316.1l-11.32-11.6v11.6h-1.57V291.5h1.57v11.71l11.32-11.71h2l-12,12.34,12,12.26Z" /><path d="M685.15,309.79H673.49l-2.35,6.31h-1.72l9-24h1.75l9,24H687.5Zm-.49-1.33-5.32-14.33L674,308.46Z" /><path d="M717.5,316.1h-1.58l-14.44-22v22h-1.57V291.54h1.57l14.44,21.93V291.54h1.58Z" /><path d="M730.55,297.34a11.25,11.25,0,0,1,4.2-4.47,11.39,11.39,0,0,1,6-1.61,12.27,12.27,0,0,1,7.08,2,11.23,11.23,0,0,1,4.2,5.5h-1.82a9,9,0,0,0-3.48-4.43,10.51,10.51,0,0,0-6-1.63,10,10,0,0,0-5.15,1.35A9.39,9.39,0,0,0,732,297.9a12.57,12.57,0,0,0-1.33,5.94,12.31,12.31,0,0,0,1.33,5.87,9.58,9.58,0,0,0,3.64,3.87,9.94,9.94,0,0,0,5.15,1.36,10.58,10.58,0,0,0,6-1.62,9,9,0,0,0,3.48-4.44H752a11.19,11.19,0,0,1-4.2,5.5,12.27,12.27,0,0,1-7.08,2,11.57,11.57,0,0,1-6-1.6,11.13,11.13,0,0,1-4.2-4.45,14.49,14.49,0,0,1,0-13Z" /><path d="M765.29,292.83V303.1h9.81v1.33h-9.81v10.34h10.86v1.33H763.71V291.5h12.44v1.33Z" /><path d="M789.22,314.77h9.15v1.33H787.64V291.5h1.58Z" /><path d="M822.61,309.79H810.94l-2.34,6.31h-1.72l9-24h1.75l9,24H825Zm-.49-1.33-5.32-14.33-5.37,14.33Z" /><path d="M850.64,316.1l-6.3-10.48h-5.4V316.1h-1.58V291.5h6.77c2.73,0,4.78.65,6.15,1.93a6.71,6.71,0,0,1,2.05,5.12,6.88,6.88,0,0,1-1.6,4.67,7.15,7.15,0,0,1-4.64,2.26l6.45,10.62Zm-11.7-11.81h5.26a6.73,6.73,0,0,0,4.87-1.57,5.61,5.61,0,0,0,1.61-4.17q0-5.66-6.55-5.65h-5.19Z" /><path d="M865.32,291.5v24.6h-1.57V291.5Z" /><path d="M888.1,291.5v19.1a5.66,5.66,0,0,1-1.58,4.15,5.74,5.74,0,0,1-4.27,1.6,5.84,5.84,0,0,1-4.47-1.74,6.69,6.69,0,0,1-1.63-4.78h1.58a6,6,0,0,0,1.08,3.68,4,4,0,0,0,3.44,1.43,3.85,3.85,0,0,0,3.24-1.28,4.79,4.79,0,0,0,1-3.06V291.5Z" /><path d="M914.73,309.79H903.06l-2.35,6.31H899l9-24h1.75l9,24h-1.71Zm-.49-1.33-5.33-14.33-5.36,14.33Z" /><path d="M356.37,180.66l46.14,58.77V180.66H405v75.48h-2.15l-52.3-66.85v66.85h-2.48V186.59l-4.31-5.93Z" /><path d="M414.26,243.52c0-8.41,5.18-14.88,23.4-19.62,3.67-1,7.87-1.83,12.62-2.7v-5.49c0-10.57-6.37-15.53-13.37-15.53-7.66,0-12.08,6-12.08,14,0,2.8-2.37,4.2-4.64,4.2s-4.74-1.4-4.74-4.31c0-9.71,16.93-16.17,24.69-16.17,10,0,20.16,3,20.16,18.76v31.26c0,3,1,5.18,3.45,5.18,1.84,0,3.45-1.19,5.39-3.67.33-.54,1.62.54,1.41,1-2.81,3.88-7.55,6.9-12.08,6.9-7.12,0-8.09-6-8.09-9V240.4h-.21c-2.37,7.54-8.95,16.82-19.3,16.82C421.81,257.22,414.26,251.93,414.26,243.52Zm36-7.11V222.82a90.43,90.43,0,0,0-12.08,2.7c-13.59,4.42-14.34,11-14.34,15.31,0,6.47,5.18,10.67,11.11,10.67C442.4,251.5,447.47,245.46,450.28,236.41Z" /><path d="M481.33,242.34v-39.9h-8.74l.43-2.8c9.06,0,14.88-9.16,16.82-19.3.22-.65,1.62-.43,1.62,0v18.87h15l-1.51,3.23H491.35V241.8c0,7.44,2.91,10.46,7,10.46,3.24,0,5.93-1.84,9.27-6.8.33-.43,1.62.54,1.41,1-4.53,7.12-8.63,10.89-14.24,10.89C487.47,257.32,481.33,253.12,481.33,242.34Z" /><path d="M513.13,243.52c0-8.41,5.18-14.88,23.4-19.62,3.66-1,7.87-1.83,12.61-2.7v-5.49c0-10.57-6.36-15.53-13.37-15.53-7.65,0-12.07,6-12.07,14,0,2.8-2.37,4.2-4.64,4.2s-4.74-1.4-4.74-4.31c0-9.71,16.93-16.17,24.69-16.17,10,0,20.16,3,20.16,18.76v31.26c0,3,1,5.18,3.45,5.18,1.83,0,3.45-1.19,5.39-3.67.33-.54,1.62.54,1.4,1-2.8,3.88-7.54,6.9-12.07,6.9-7.12,0-8.09-6-8.09-9V240.4H549c-2.38,7.54-8.95,16.82-19.3,16.82C520.68,257.22,513.13,251.93,513.13,243.52Zm36-7.11V222.82a90.6,90.6,0,0,0-12.07,2.7c-13.59,4.42-14.34,11-14.34,15.31,0,6.47,5.17,10.67,11.1,10.67C541.27,251.5,546.34,245.46,549.14,236.41Z" /><path d="M574.16,233.28c0-.32,1.51-.75,1.61-.22,3.67,15.21,12.73,22.65,20.38,22.65,9.06,0,15-5.5,15-12.08,0-16.17-37-8.73-37-30.19,0-11.75,9.7-15.52,17.36-15.52,6.14,0,13.47,1.94,19.51,3.55l2.37,19.09c0,.32-1.29.54-1.29.32-3.13-16.28-12.29-21.35-20.27-21.35-6.25,0-11.11,3.24-11.11,9.71,0,15.63,37,8.73,37,29,0,12.83-11.33,19.08-21.25,19.08-6.14,0-16-2.69-19.73-4.53Zm21.78-45.71c4.52-3.24,9.16-6.58,13.58-9.82.54-.1,1.4,1.19,1,1.51l-12.07,14h-5l-12-14c-.43-.21.32-1.61.86-1.51C586.88,181,591.52,184.33,595.94,187.57Z" /><path d="M624.51,243.52c0-8.41,5.17-14.88,23.39-19.62,3.67-1,7.87-1.83,12.62-2.7v-5.49c0-10.57-6.36-15.53-13.37-15.53-7.66,0-12.08,6-12.08,14,0,2.8-2.37,4.2-4.63,4.2s-4.75-1.4-4.75-4.31c0-9.71,16.93-16.17,24.69-16.17,10,0,20.17,3,20.17,18.76v31.26c0,3,1,5.18,3.45,5.18,1.83,0,3.45-1.19,5.39-3.67.32-.54,1.61.54,1.4,1-2.81,3.88-7.55,6.9-12.08,6.9-7.11,0-8.08-6-8.08-9V240.4h-.22c-2.37,7.54-8.95,16.82-19.3,16.82C632.05,257.22,624.51,251.93,624.51,243.52Zm36-7.11V222.82a91.16,91.16,0,0,0-12.08,2.7c-13.58,4.42-14.34,11-14.34,15.31,0,6.47,5.18,10.67,11.11,10.67C652.65,251.5,657.72,245.46,660.52,236.41Z" /><path d="M772.54,180.66v12c-6.58-6.25-14.56-9.27-24.48-9.49v73H738v-73c-9.92.22-17.9,3.24-24.48,9.49v-12Z" /><path d="M794.64,247.73c0,3,1,5.17,3.45,5.17,1.84,0,3.45-1.18,5.39-3.66.33-.54,1.62.54,1.41,1-2.81,3.88-7.66,6.9-12.19,6.9-7.11,0-8.08-6-8.08-9.06V212.26c0-6.37-.65-10.79-7-10.46-.54,0-.54-1.4-.11-1.51,4.53-.87,10.89-1.62,15.53-2.48,1.07-.22,1.61-.11,1.61.75Zm-11.32-67.39a5.4,5.4,0,0,1,10.78,0c0,2.91-2.15,5.07-5.39,5.07A5.08,5.08,0,0,1,783.32,180.34Z" /><path d="M809.63,228.43c0-18.12,12.61-30.51,29.22-30.51,9.92,0,18.87,6.9,18.87,13.36a4,4,0,0,1-4.32,4.21c-2.48,0-4.2-1.4-4.2-4.31,0-5.82-2.8-11.65-10.78-11.65-10.46,0-19.41,9.71-19.41,27.28,0,12.18,7.33,24.37,20.7,24.37,9.27,0,15.1-6.69,19.62-14,.33-.54,1.3.43,1.19.76-5.61,11.32-12.4,19.3-24.47,19.3C821.92,257.22,809.63,245.25,809.63,228.43Z" /><path d="M867.31,243.52c0-8.41,5.18-14.88,23.4-19.62,3.66-1,7.87-1.83,12.61-2.7v-5.49c0-10.57-6.36-15.53-13.37-15.53-7.65,0-12.07,6-12.07,14,0,2.8-2.37,4.2-4.64,4.2s-4.74-1.4-4.74-4.31c0-9.71,16.93-16.17,24.69-16.17,10,0,20.16,3,20.16,18.76v31.26c0,3,1,5.18,3.45,5.18,1.83,0,3.45-1.19,5.39-3.67.33-.54,1.62.54,1.4,1-2.8,3.88-7.54,6.9-12.07,6.9-7.12,0-8.09-6-8.09-9V240.4h-.21c-2.38,7.54-9,16.82-19.3,16.82C874.86,257.22,867.31,251.93,867.31,243.52Zm36-7.11V222.82a90.6,90.6,0,0,0-12.07,2.7c-13.59,4.42-14.34,11-14.34,15.31,0,6.47,5.17,10.67,11.1,10.67C895.45,251.5,900.52,245.46,903.32,236.41Z" /></svg>

        </div>
        <div className="ntl-main-page-right">
          <svg className="svg2" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.84 484.37"><defs></defs><polygon points="195.68 364.12 208.44 376.88 221.2 364.07 221.2 287.04 195.68 261.52 195.68 364.12" /><polygon points="144.43 312.81 170.05 338.44 170.05 192.78 144.43 167.15 144.43 312.81" /><polygon points="246.92 153.96 272.56 128.34 144.43 128.34 170.05 153.96 195.68 153.96 195.68 218.63 221.3 244.25 221.3 153.96 246.92 153.96" /><polygon points="246.92 338.44 272.55 312.84 272.55 167.15 246.92 192.79 246.92 338.44" /></svg>

          <div className="about-me">
            <div className="about-me-controls">

              <div  className="about-me-controls-headings">
                <h1>{t("lawyerBl")}</h1>
                <p className="lawyer-moto">{t("lawyerMoto1")}</p>
                <p className="lawyer-moto">{t("lawyerMoto2")}</p>
              </div>
              <a
                href={contactPath}
                className="btn btn-primary"
              >
                {t('contact')}
              </a>
            </div>


          </div>


        </div>
      </div>
    </>
  );
}

export default MainBanner;