import React from "react";
import './Contact-us.css';
import ButtonEl from "../UI/Button/Button";
import { useTranslation } from 'react-i18next';

const ContactUsComponent = () => {
  const { t } = useTranslation();

  const handleContactUsForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-us-main container">
      <div className="contact-form-page py-4 flex items-start gap-x-8">
        <div className="contact-inTouch-form">
          <h2 className="font-bold text-3xl py-4">
            {t("contactForm.sectionTitle")}{" "}
          </h2>
          <form className="contactUsForm" onSubmit={handleContactUsForm}>
          <div className="inputts flex items-center justify-between">
          <input
              placeholder={t("contactForm.placeholderName")}
              type="text"
              name="name"
              required
            />
            <input className="rtlinputt ml-2"
              placeholder={t("contactForm.placeholderEmail")}
              type="email"
              name="email"
              required
            />
          </div>
            
            <input
              className="block w-full"
              placeholder={t("contactForm.placeholderPhone")}
              type="number"
              name="number"
            />
            <textarea
              required
              className="block w-full resize-none"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder={t("contactForm.placeholderMessage")}
            ></textarea>
            <ButtonEl
              bgColor="#F05D22"
              hoverBgColor="#1c2b4d"
              buttonTxt={t("contactForm.submitButton")}
              px={8}
              py={1.5}
            />
          </form>
        </div>
        <div className="contact-support ml-48">
          <h2 className="font-bold text-3xl py-4">
            {t("supportSection.sectionTitle")}
          </h2>
          <div className="contact-support-content">
            <div className="general-office">
              <h3 className="font-bold text-xl py-1">
                {t("supportSection.dubaiOffice.title")}
              </h3>
              <p>
                {t("supportSection.dubaiOffice.address")}
              </p>
            </div>
            <div className="store-hours mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3635.0650103922485!2d56.73394227535456!3d24.34422797826981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIwJzM5LjIiTiA1NsKwNDQnMTEuNSJF!5e0!3m2!1sen!2s!4v1694964831255!5m2!1sen!2s"
                className="shadow-xl rounded-xl w-full"
                height="300"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Our Location">
               </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsComponent;
