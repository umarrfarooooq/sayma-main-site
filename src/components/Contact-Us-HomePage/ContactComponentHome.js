import React from "react";
import { useTranslation } from 'react-i18next';
import ButtonEl from "../UI/Button/Button";
export const ContactCompo = () => {
  const { t } = useTranslation();

  return (
    <div style={{backgroundColor:"#F2F5FF"}} className="flex flex-col items-center gap-[48px] relative py-24">
      <div className="flex justify-between items-center gap-[24px] relative container">
        <div className="flex flex-col w-full items-center justify-center gap-[24px] pl-0 md:pr-[32px] py-0 relative rounded-[8px]">
          <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div style={{fontSize:"2rem"}} className=" relative self-stretch mt-[-1.00px] font-bold">
            {t('navbar.menuItems.contactUs')}
            </div>
          </div>
          <div className="flex flex-col h-[318px] items-start gap-[16px] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-[16px] relative flex-1 self-stretch w-full grow">
              <div className="flex items-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden border border-solid border-colors-neutral-600">
                <input type="text" placeholder={t("contactForm.placeholderName")} className="bg-transparent w-full h-full outline-none"/>
              </div>
              <div className="flex items-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden border border-solid border-colors-neutral-600">
              <input type="email" placeholder={t("contactForm.placeholderEmail")} className="bg-transparent w-full h-full outline-none"/>
              </div>
              <div className="flex items-center gap-[10px] pt-[16px] px-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden border border-solid border-colors-neutral-600">
              <textarea 
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message*"
              className="bg-transparent w-full h-full outline-none resize-none"/>
              </div>
            </div>
            <ButtonEl
              bgColor="#F05D22"
              hoverBgColor="#F05D22"
              buttonTxt={t("contactForm.submitButton")}
              px={8}
              givenWidth="100%"
              py={1.5}
            />
          </div>
        </div>
        <div className="imageCon hidden lg:inline-block w-full">
            <img src="https://res.cloudinary.com/umarfarooq/image/upload/w_500,q_auto/alghawalimanpower/skxk7i5pxljwfxpsnasw" alt="contact us" style={{alignSelf:"stretch"}}/>
        </div>
      </div>
    </div>
  );
};
