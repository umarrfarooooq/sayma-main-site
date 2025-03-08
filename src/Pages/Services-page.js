import React from "react";
import Navbar from "../components/Header/Navbar";
// import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import AllServices from "../components/Services/All-Services";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import NewBreadCrumb from "../components/UI/NewBreadcrumb/NewBreadCrumb";
import NeedHelp from "../components/Need-Help/NeedHelp";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  const backgroundImageUrl =
    "https://res.cloudinary.com/umarfarooq/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg";

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help"
        />
        <meta
          name="description"
          content="Are you finding a housemaid,nannies and housekeeper at an affordable price?Sayma is providing trained Maids in all over Oman."
        />
        <title>Professional House Maid Services in Muscat | Sayma</title>
      </Helmet>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        className="bg-cover"
      >
        <NewBreadCrumb
          pageName={t("breadcrumb.services.pageName")}
          title={t("breadcrumb.services.title")}
          discription={t("breadcrumb.services.description")}
          buttonTxt={t("breadcrumb.services.buttonText")}
        />
        <div className="whatsapp fixed bottom-[25px] left-[25px] z-50">
          <a rel="noreferrer" target="_blank" href="https://wa.me/+96896201040">
            <img
              className="w-[60px] h-[60px]"
              src="https://i.pinimg.com/originals/f3/53/5d/f3535dc3f95e71506f7c80755610176c.png"
              alt="whatsapp icon"
            />
          </a>
        </div>
        <AllServices />
        <NeedHelp bgColor="#dbeff0" />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
