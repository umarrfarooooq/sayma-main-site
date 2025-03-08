import React from "react";
// import ButtonEl from "../UI/Button/Button";
import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ServiceCard = (props) => {
  const location = useLocation();
  const height = location.pathname === "/" ? "" : "fit-content";

  const { t } = useTranslation();

  return (
    <>
      <Link to={props.address} className="h-full">
        <div
          style={{ height }}
          className="rounded-lg min-h-[30rem] flex flex-col items-start justify-between bg-[#FFFBFA] md:my-0 cursor-pointer relative overflow-hidden hover:shadow-md p-6 hover:outline hover:outline-[#F05D22] outline-1 transition-all"
        >
          <img
            loading="lazy"
            className="w-full shadow-md rounded-md max-h-[17rem] md:max-h-[13rem] md:min-h-[13remF] min-h-[17rem]"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src={props.image}
            alt={props.imageAlt || "Service Detail"}
          />
          <div className="service-detail mt-2 md:text-start flex flex-col justify-between">
            <h3 className="text-xs sm:text-xl" style={{ color: "#1A1A1A" }}>
              {props.catName === "Domestic Worker"
                ? "Housemaids"
                : props.catName.slice(0, 15) +
                  (props.catName.length > 15 ? "..." : "")}
            </h3>
            <p
              style={{
                fontSize: "0.625rem",
                color: "#5F5F5F",
                lineHeight: "1.31rem",
              }}
              className="sm:text-base leading-4"
            >
              {props.description.slice(0, 100)}...
            </p>
            <div className="seeProfileBtn text-center">
              <Link to={props.address}>
                <button
                  style={{ border: "1px solid #F05D22", color: "#F05D22" }}
                  className="rounded-md py-2 hover:bg-[#f05c2256] hover:bg-opacity-30 active:bg-opacity-50 transition-all w-full mx-auto md:w-full text-center text-xs"
                >
                  {t("services.showProfileBtn")}{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceCard;

// {/* <div style={{backgroundColor:"#D9D9D9"}} className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center">
//                     <h3 style={{color:"#F05D22"}} className="mb-2 text-xl font-bold dark:text-white">{props.catName}</h3>
//                     <Link to={props.address}>
//                         <ButtonEl bgColor="#F05D22" hoverBgColor="#1c2b4d" buttonTxt={t('services.showProfileBtn')} px={2}/>
//                     </Link>
//                 </div> */}
