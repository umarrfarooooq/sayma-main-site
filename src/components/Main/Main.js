import React from "react";
import ButtonEl from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BG from "./images/oho.png";
import AboutCompany from "../About-Company/About-Company";
import "./Main.css";
const Main = () => {
  const { t } = useTranslation();
  const elipseStyle = {
    width: "29rem",
    height: "29rem",
  };

  const imageStyle = {
    height: "fit-content",
    width: "80%",
  };
  return (
    <>
      <section
        // style={{
        //   background:
        //     "linear-gradient(102deg, #115180 0%, #27608C 40%, #F05D22 100%)",
        // }}
        className="gradient-bg"
      >
        <div className="grid py-8 mx-auto lg:gap-6 lg:py-16 lg:grid-cols-12 container">
          <div className="mainCont mr-auto place-self-center lg:col-span-7">
            <p
              className="max-w-2xl mb-6 font-medium lg:mb-8 md:text-xl lg:text-2xl"
              style={{ color: "#FFFBFA" }}
            >
              {t("section.subtitle")}
            </p>
            <h1
              style={{ color: "#FFFBFA", lineHeight: "1.3" }}
              className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            >
              {t("section.title1")} <br></br>
              <span style={{ color: "#F05D22" }}>{t("section.title2")}</span>
              <span
                className="font-normal "
                style={{ color: "var(--neutral-700, #FFFBFA)" }}
              >
                {" "}
                {t("section.subtitle2")}
              </span>
            </h1>
            <p
              style={{ color: "var(--maincolors-button, #FFFBFA)" }}
              className="max-w-2xl mb-6 font-bold text-base lg:text-base lg:mb-8 md:text-lg xl:text-xl"
            >
              {t("section.subtitle3")}
            </p>
            <p
              style={{ color: "var(--neutral-700, #FFFBFA)" }}
              className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-lg lg:text-xl"
            >
              {t("section.description")}
            </p>
            <span className="hidden lg:inline-block">
              <Link
                to="/contact"
                className="font-medium text-center rounded-lg"
              >
                <ButtonEl
                  givenWidth="17rem"
                  color="#262F32"
                  bgColor="#FFFBFA"
                  buttonTxt={t("section.buttonText")}
                  px={3}
                  py={1}
                />
              </Link>
            </span>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
            {/* <img loading="lazy"  style={imageStyle} className="relative bg-opacity-10" src="https://res.cloudinary.com/umarfarooq/image/upload/fl_lossy,q_50/v1707745397/alghawalimanpower/ze1tnf1edbntwukrwtlb.gif" alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling." /> */}
            {/* <div
              className="elipse absolute shadow-2xl overflow-hidden"
              style={elipseStyle}
            >
              <img
                loading="lazy"
                // style="width: 44.75rem;  border-bottom-left-radius: 35rem; border-bottom-right-radius: 35rem;"
                className="w-[35rem] h-[35rem] object-cover object-top border-bottom-left-radius-[35rem] border-bottom-right-radius-[35rem]"
                src={BG}
                alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling."
              />
            </div> */}

            {/* <div class="mainpage-image lg:mt-0 lg:col-span-5 lg:flex">
              <div
                className="elipse absolute shadow-2xl w-[35rem] h-[35rem] border-radius-[35rem] bg-[#249D64]"
                // style="width: 35rem;
                //     height: 35rem; border-radius: 35rem;
                //     background: #249D64;"
              >
                <img
                  className="w-[44rem] h-[44rem] border-bottom-left-radius-[35rem] border-bottom-right-radius-[35rem]"
                  // style="width: 44.75rem;  border-bottom-left-radius: 35rem; border-bottom-right-radius: 35rem;"
                  src={BG}
                  alt="mockup"
                />
              </div>
            </div> */}
            <div className="flex items-center justify-center relative">
              <div style={{background:"linear-gradient(102deg, #115180 0%, #27608C 40%, #F05D22 100%)"}} className="absolute w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"></div>

              <img
                loading="lazy"
                // style={imageStyle}
                className="translate-y-[-50px] object-cover object-top w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-b-full animate-slide-down transition-all duration-700 ease-in-out relative z-10"
                src={BG}
                alt="A cheerful Nepali domestic worker in a white shirt holding a cleaning kit in one hand and wearing yellow gloves in the other, smiling."
              />
            </div>
            <span className="inline-block lg:hidden mt-6 w-full">
              <Link to="/contact" className="font-medium text-center">
                <ButtonEl
                  givenWidth={1}
                  color="#262F32"
                  bgColor="#FFFBFA"
                  hoverBgColor="rgba(40, 187, 118, 0.3)"
                  buttonTxt={t("section.buttonText")}
                  px={3}
                  py={1}
                />
              </Link>
            </span>
          </div>
        </div>
        <AboutCompany />
      </section>
    </>
  );
};

export default Main;
