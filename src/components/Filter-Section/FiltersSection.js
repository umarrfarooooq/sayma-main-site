import React, { useState } from "react";
import Backdrop from "../UI/BackDrop/Backdrop";
import { useTranslation } from "react-i18next";

const FilterSection = ({
  onClose,
  onFilterSearch,
  setSelectedCountries,
  setSelectedReligions,
  setSelectedLanguages,
  setSelectedExperiences,
  filteredCountries,
  filteredReligions,
  filteredExperience,
  filteredLanguages,
}) => {
  const { t } = useTranslation();

  const [countryOpen, setCountryOpen] = useState(true);
  const [religionOpen, setReligionOpen] = useState(true);
  const [languagesOpen, setLanguagesOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);

  const handleSearchChange = (e) => {
    onFilterSearch && onFilterSearch(e.target.value);
  };

  const handleCountryToggle = (country) => {
    setSelectedCountries((prevCountries) =>
      prevCountries.includes(country)
        ? prevCountries.filter((c) => c !== country)
        : [...prevCountries, country]
    );
  };

  const handleReligionToggle = (religion) => {
    setSelectedReligions((prevReligions) =>
      prevReligions.includes(religion)
        ? prevReligions.filter((r) => r !== religion)
        : [...prevReligions, religion]
    );
  };
  const handleLanguageToggle = (language) => {
    setSelectedLanguages((prevLanguages) =>
      prevLanguages.includes(language)
        ? prevLanguages.filter((l) => l !== language)
        : [...prevLanguages, language]
    );
  };
  const handleExperienceToggle = (experience) => {
    setSelectedExperiences((prevExperience) =>
      prevExperience.includes(experience)
        ? prevExperience.filter((r) => r !== experience)
        : [...prevExperience, experience]
    );
  };

  const handleCountryOpen = () => {
    setCountryOpen(!countryOpen);
  };
  const handleReligionOpen = () => {
    setReligionOpen(!religionOpen);
  };
  const handleLanguagesOpen = () => {
    setLanguagesOpen(!languagesOpen);
  };
  const handleExperienceOpen = () => {
    setExperienceOpen(!experienceOpen);
  };
  const applyFilterButton = () => {
    onClose();
  };

  const handleClearFilterBtn = () => {
    setSelectedCountries([]);
    setSelectedExperiences([]);
    setSelectedLanguages([]);
    setSelectedReligions([]);
  };
  const handleClearCountries = () => {
    setSelectedCountries([]);
  };

  const handleClearExperiences = () => {
    setSelectedExperiences([]);
  };

  const handleClearLanguages = () => {
    setSelectedLanguages([]);
  };

  const handleClearReligions = () => {
    setSelectedReligions([]);
  };

  return (
    <>
      <div className="inline-block md:hidden">
        <Backdrop showBackdrop={true} />
      </div>
      <div className="bg-[#FFFBFA] absolute md:relative z-10 p-6 rounded-3xl md:flex flex-col items-start gap-4 w-[93%] md:w-[16rem] lg:w-[19.5rem]">
        <div className="search hidden md:inline-block w-full">
          <div>
            <h3>{t("filterSection.search")}</h3>
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
                onChange={handleSearchChange}
                type="text"
                placeholder={t("filterSection.search")}
                className="outline-none bg-transparent"
              />
            </span>
          </div>
        </div>

        <div className="md:hidden flex items-end justify-end my-2">
          <div
            onClick={onClose}
            className="p-3 rounded-md bg-[#EBEBEB] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 18L6 6"
                stroke="#CD2424"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L18 6"
                stroke="#CD2424"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {(filteredCountries && filteredCountries.length > 0) ||
        (filteredExperience && filteredExperience.length > 0) ||
        (filteredLanguages && filteredLanguages.length > 0) ||
        (filteredReligions && filteredReligions.length > 0) ? (
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
                  className="py-2 px-4 flex items-center flex-wrap gap-1 text-xs rounded-full"
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
              {filteredExperience && filteredExperience.length > 0 && (
                <div
                  style={{ border: "1px solid #434146" }}
                  className="py-2 px-4 flex items-center flex-wrap gap-1 text-xs rounded-full"
                >
                  <span className="text-[#434146]">Experience</span>
                  {filteredExperience.map((experience, index) => (
                    <span key={index} className="text-[#262F32] font-semibold">
                      {experience}
                    </span>
                  ))}
                  <span>
                    <svg
                      onClick={handleClearExperiences}
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
              {filteredLanguages && filteredLanguages.length > 0 && (
                <div
                  style={{ border: "1px solid #434146" }}
                  className="py-2 px-4 flex items-center flex-wrap gap-1 text-xs rounded-full"
                >
                  <span className="text-[#434146]">Languages</span>
                  {filteredLanguages.map((language, index) => (
                    <span key={index} className="text-[#262F32] font-semibold">
                      {language}
                    </span>
                  ))}
                  <span>
                    <svg
                      onClick={handleClearLanguages}
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
              {filteredReligions && filteredReligions.length > 0 && (
                <div
                  style={{ border: "1px solid #434146" }}
                  className="py-2 px-4 flex items-center flex-wrap gap-1 text-xs rounded-full"
                >
                  <span className="text-[#434146]">Religion</span>
                  {filteredReligions.map((religion, index) => (
                    <span key={index} className="text-[#262F32] font-semibold">
                      {religion}
                    </span>
                  ))}
                  <span>
                    <svg
                      onClick={handleClearReligions}
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
          <div
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="flex flex-col gap-4 religionFilter w-full p-4 bg-[#F2F2F2] rounded-xl"
          >
            <div
              onClick={handleReligionOpen}
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
              <span>{t("filterSection.religion")}</span>
            </div>
            {religionOpen && (
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredReligions.includes("Muslim")}
                    onChange={() => handleReligionToggle("Muslim")}
                    id="Muslim"
                    type="checkbox"
                    value="Muslim"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Muslim"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.religions.muslim")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredReligions.includes("Christian")}
                    onChange={() => handleReligionToggle("Christian")}
                    id="Christian"
                    type="checkbox"
                    value="Christian"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Christian"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.religions.christian")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredReligions.includes("OtherReligion")}
                    onChange={() => handleReligionToggle("Other")}
                    id="OtherReligion"
                    type="checkbox"
                    value="OtherReligion"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="OtherReligion"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.religions.otherReligion")}
                  </label>
                </div>
              </div>
            )}
          </div>
          <div
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="flex flex-col gap-4 languagesFilter w-full p-4 bg-[#F2F2F2] rounded-xl"
          >
            <div
              onClick={handleLanguagesOpen}
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
              <span>{t("filterSection.languages")}</span>
            </div>
            {languagesOpen && (
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredLanguages.includes("English")}
                    onChange={() => handleLanguageToggle("English")}
                    id="English"
                    type="checkbox"
                    value="English"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="English"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.languages.english")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredLanguages.includes("Arabic")}
                    onChange={() => handleLanguageToggle("Arabic")}
                    id="Arabic"
                    type="checkbox"
                    value="Arabic"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Arabic"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.languages.arabic")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredLanguages.includes("Other")}
                    onChange={() => handleLanguageToggle("Other")}
                    id="Other"
                    type="checkbox"
                    value="Other"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Other"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.languages.other")}
                  </label>
                </div>
              </div>
            )}
          </div>
          <div
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="flex flex-col gap-4 experienceFilter w-full p-4 bg-[#F2F2F2] rounded-xl"
          >
            <div
              onClick={handleExperienceOpen}
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
              <span>{t("filterSection.experience")}</span>
            </div>
            {experienceOpen && (
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredExperience.includes("Experienced")}
                    onChange={() => handleExperienceToggle("Experienced")}
                    id="Experienced"
                    type="checkbox"
                    value="Experienced"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="Experienced"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.experience.experienced")}
                  </label>
                </div>
                <div class="flex items-center gap-2 mb-3">
                  <input
                    checked={filteredExperience.includes("New")}
                    onChange={() => handleExperienceToggle("New")}
                    id="New"
                    type="checkbox"
                    value="New"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="New"
                    class=" text-sm md:text-base font-medium text-[#434146]"
                  >
                    {t("filterSection.filterOptions.experience.new")}
                  </label>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={applyFilterButton}
            style={{ border: "1px solid rgba(3, 29, 146, 0.10)" }}
            className="md:hidden flex items-center justify-center cursor-pointer gap-4 experienceFilter w-full p-3 font-semibold text-white bg-[#e73535] hover:bg-[#d13434] active:bg-[#b12e2e] transition-all rounded-xl"
          >
            {t("filterSection.filter")}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
