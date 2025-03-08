import React, { useState } from "react";
import "./Filter.modules.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faChevronUp, faChevronDown);

const Filter = ({ label, options, selected, onChange }) => (
  
  <div className="filter-item">
    <h4 className="mt-4">{label}</h4>
    {options.map((option) => (
      <label className={`block mt-2`}  key={option}>
        <input className="mr-4 rtl:ml-4 cursor-pointer"
          type="checkbox"
          value={option}
          checked={selected.includes(option)}
          onChange={() => onChange(option)}
        />
        {option}
      </label>
    ))}
  </div>
);

const FilterContainer = () => {
  const { t } = useTranslation();

  const jobTypes = [t("filterItems.fullTime"), t("filterItems.monthlyBased")];
  const salaryRanges = [t("filterItems.under100"), t("filterItems.100-150"), t("filterItems.150-300")];
  const maidAttributes = [
    t("filterItems.babiesLessThan2Years"),
    t("filterItems.moreThan2Kids"),
    t("filterItems.noSundayOff")
  ];
  const [open, setOpen] = useState(true);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]);
  const [selectedMaidAttributes, setSelectedMaidAttributes] = useState([]);

  const toggleOpen = () => {
    setOpen(!open);
  };
 
  return (
    <div className={`filter-container ${open ? "open" : ""}` }>
      <div className={`container filteropenor`}>
        <button className="toggle-button" onClick={toggleOpen}>
          {t("filterContainer.filter")}{" "}
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            className="icon ml-8 rtl:mr-8"
          />
        </button>
        {open && (
          <div className="filter-content">
            <Filter
              label={t("filterContainer.jobTypeLabel")}
              options={jobTypes}
              selected={selectedJobTypes}
              onChange={(option) => {
                if (selectedJobTypes.includes(option)) {
                  setSelectedJobTypes(selectedJobTypes.filter((item) => item !== option));
                } else {
                  setSelectedJobTypes([...selectedJobTypes, option]);
                }
              }}
            />
            <Filter
              label={t("filterContainer.salaryRangeLabel")}
              options={salaryRanges}
              selected={selectedSalaryRanges}
              onChange={(option) => {
                if (selectedSalaryRanges.includes(option)) {
                  setSelectedSalaryRanges(selectedSalaryRanges.filter((item) => item !== option));
                } else {
                  setSelectedSalaryRanges([...selectedSalaryRanges, option]);
                }
              }}
            />
            <Filter
              label={t("filterContainer.youHaveLabel")}
              options={maidAttributes}
              selected={selectedMaidAttributes}
              onChange={(option) => {
                if (selectedMaidAttributes.includes(option)) {
                  setSelectedMaidAttributes(selectedMaidAttributes.filter((item) => item !== option));
                } else {
                  setSelectedMaidAttributes([...selectedMaidAttributes, option]);
                }
              }}
            />
          </div>
        )}
      </div>
    
  </div>

    
  );
};

export default FilterContainer;
