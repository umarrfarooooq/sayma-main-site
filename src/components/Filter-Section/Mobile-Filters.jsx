import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MobileFilterSection = ({
  setSelectedCountries,
  filteredCountries,
}) => {
  const { t } = useTranslation();

  const [countryOpen, setCountryOpen] = useState(true);

  const handleCountryToggle = (country) => {
    setSelectedCountries((prevCountries) =>
      prevCountries.includes(country)
        ? prevCountries.filter((c) => c !== country)
        : [...prevCountries, country]
    );
  };

  const handleCountryOpen = () => {
    setCountryOpen(!countryOpen);
  };

  const handleClearFilterBtn = () => {
    setSelectedCountries([]);
  };
  const handleClearCountries = () => {
    setSelectedCountries([]);
  };

  return (
    <>
      <div className="bg-[#FFFBFA] my-2 relative p-6 rounded-3xl md:flex flex-col items-start gap-4 w-full md:w-[16rem] lg:w-[19.5rem]">

        {filteredCountries && filteredCountries.length > 0 ? (
          <div
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="appliedFilters rounded-xl p-4"
          >
            <div>
              <h4 className="text-lg">
                {t("filterSection.yourAppliedFilters")}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {filteredCountries && filteredCountries.length > 0 && (
                <div
                  style={{ border: "1px solid #434146" }}
                  className="py-2 px-4 flex flex-wrap items-center gap-1 text-xs rounded-full"
                >
                  <span className="text-[#434146]">Country</span>
                  {filteredCountries.map((country, index) => (
                    <span key={index} className="text-[#262F32] font-semibold">
                      {country}
                    </span>
                  ))}
                  <span>
                    <svg
                      onClick={handleClearCountries}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M9 3L3 9"
                        stroke="#434146"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 3L9 9"
                        stroke="#434146"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              )}
              <div
                onClick={handleClearFilterBtn}
                className="py-2 px-4 bg-[#CD2424] cursor-pointer flex items-center gap-1 text-xs rounded-full"
              >
                <span className="text-[#FFFBFA]">
                  {t("filterSection.clearAll")}
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="filtersInputs w-full flex flex-col items-start gap-4 mt-2 md:mt-0">
          <h4>{t("filterSection.applyFilter")}</h4>
          <div
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="flex flex-col gap-4 countryFilter w-full p-4 bg-[#F2F2F2] rounded-xl"
          >
            <div
              onClick={handleCountryOpen}
              className="flex cursor-pointer items-center gap-2"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 14L12 9L17 14"
                    stroke="#262F32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span>{t("filterSection.country")}</span>
            </div>
            {countryOpen && (
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Myanmar")}
                    onChange={() => handleCountryToggle("Myanmar")}
                    id="Myanmar"
                    type="checkbox"
                    value="Myanmar"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Myanmar"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.myanmar")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("India")}
                    onChange={() => handleCountryToggle("India")}
                    id="India"
                    type="checkbox"
                    value="India"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="India"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.india")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Sri Lanka")}
                    onChange={() => handleCountryToggle("Sri Lanka")}
                    id="Sri Lanka"
                    type="checkbox"
                    value="Sri Lanka"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Sri Lanka"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.sriLanka")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Nepal")}
                    onChange={() => handleCountryToggle("Nepal")}
                    id="Nepal"
                    type="checkbox"
                    value="Nepal"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Nepal"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.nepal")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Philippines")}
                    onChange={() => handleCountryToggle("Philippines")}
                    id="Philippines"
                    type="checkbox"
                    value="Philippines"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Philippines"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.philippines")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Indonesia")}
                    onChange={() => handleCountryToggle("Indonesia")}
                    id="Indonesia"
                    type="checkbox"
                    value="Indonesia"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Indonesia"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.indonesia")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Kenya")}
                    onChange={() => handleCountryToggle("Kenya")}
                    id="Kenya"
                    type="checkbox"
                    value="Kenya"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Kenya"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.kenya")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredCountries.includes("Madagascar")}
                    onChange={() => handleCountryToggle("Madagascar")}
                    id="Madagascar"
                    type="checkbox"
                    value="Madagascar"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Madagascar"
                    className=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.countries.madagascar")}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFilterSection;
