import React from "react";
import { useTranslation } from 'react-i18next';

const NeedHelp = ({bgColor}) => {
    const { t } = useTranslation();

  return (
    <div className={`flex flex-col items-start py-24 gap-[48px] relative bg-[${bgColor ? bgColor : '#F2F5FF'}]`}>
    <div className="container relative self-stretch w-full">
    <div style={{background:"linear-gradient(102deg, #115180 0%, #27608C 40%, #F05D22 100%)"}} className="flex items-center justify-center gap-[10px] py-8 px-1 sm:p-[88px] relative self-stretch w-full flex-[0_0_auto] rounded-[16px] overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-[32px] relative flex-1 grow">
          <div className="flex flex-col items-start gap-[8px]  py-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative text-base font-bold md:text-[3rem] my-2 self-stretch text-[#FFFBFA] text-center">
            {t('needHelpSection.title')}
            </div>
            <p className="w-full lg:w-1/2 mx-auto relative text-sm md:text-base self-stretch text-center text-[#FFFBFA]">
            {t('needHelpSection.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px]">
            <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div style={{borderRadius:".5rem"}} className="flex w-full sm:w-[390px] items-center gap-[10px] py-[.5rem] px-3 md:px-4 relative self-stretch bg-white overflow-hidden border border-solid border-colors-stroke-color shadow-[0px_30px_27px_#000c2b14]">
                <input className="w-full h-full outline-none bg-transparent" type="text" placeholder={t('needHelpSection.yourNumber')}/>
                <div style={{borderRadius:".5rem", color:"white"}} className="bg-[#F05D22] transition-all hover:bg-[#297c54] active:bg-[#175a3a] inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]  shadow-[0px_30px_27px_#000c2b14]">
                <button style={{paddingBlock:".75rem"}} className="w-full h-full outline-none px-6">{t('needHelpSection.buttonText')}</button>
              </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
      
    </div>
  );
};
export default NeedHelp;