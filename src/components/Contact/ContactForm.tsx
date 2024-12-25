import React from "react";
import { useTranslations } from "next-intl";

const ContactForm: React.FC<{ messages: any }> = ({ messages }) => {
  const t = useTranslations('ContactForm');

  return (
    <div className="contact-form">
      <br />
      <br />

      <div className="contact-title">
        <h2>{t('getInTouch')}</h2>
      </div>

      <form action="https://www.natasaticalawoffice.com/api/send-email" method="POST">
        <div className="container">
          <div className="contact-form-box">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('name')}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="tel"
                    name="number"
                    placeholder={t('number')}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('subject')}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    cols={30}
                    rows={6}
                    placeholder={t('message')}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <button type="submit" className="btn btn-primary">
                  {t('sendMessage')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;