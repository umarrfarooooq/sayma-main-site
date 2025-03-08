import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from "react-i18next";
import ButtonEl from "../UI/Button/Button";

const Services = () => {
  const { t } = useTranslation();
  const categories = t("services.categories", { returnObjects: true }) || [];
  return (
    <section className="services-section text-white">
      <div className="py-8 sm:py-16 container">
        <div className=" mb-4 lg:mb-8 flex items-center justify-center flex-col sm:flex-row">
          <h2
            style={{ color: "#1A1A1A" }}
            className=" text-4xl tracking-tight font-semibold"
          >
            {" "}
            {t("services.sectionTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 md:space-y-0">
          {categories.slice(0, 4).map((category, index) => (
            <ServiceCard
              key={index}
              imageAlt={category.description}
              address={`/nepali-srilankan-housemaids?category=${category.url}`}
              catName={category.name}
              description={category.description}
              image={`https://res.cloudinary.com/umarfarooq/image/upload/alghawalimanpower/${category.image}`}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center my-4">
          <button>
            <Link
              to="/house-maid-services"
              className="flex items-center"
              style={{ textDecoration: "none", color: "#FFFBFA" }}
            >
              <div className="flex items-center">
                <ButtonEl
                  bgColor="#F05D22"
                  hoverBgColor="#F05D22"
                  px={6}
                  buttonTxt={t("services.seeAllButton")}
                />
              </div>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
