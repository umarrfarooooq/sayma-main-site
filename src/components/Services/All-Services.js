import React from "react";
// import { useNavigate } from "react-router-dom";
import ServiceCard from "./Service-Card";
import { useTranslation } from "react-i18next";

const AllServices = () => {
  const { t } = useTranslation();
  const categories = t("services.categories", { returnObjects: true }) || [];
  return (
    <>
      <div className="container my-12">
        <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-2">
          <div className="text-lg sm:text-xl md:text-4xl font-bold lg:text-5xl">
            Our Services
          </div>
          <div
            style={{ border: "1px solid #C3D0D4" }}
            className="flex items-center gap-2 bg-[#EBEBEB] p-3 rounded-xl"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                  stroke="#434146"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.0002 21.4992L16.7002 17.1992"
                  stroke="#434146"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-4 flex flex-col md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-y-0 container my-12">
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
    </>
  );
};

export default AllServices;
