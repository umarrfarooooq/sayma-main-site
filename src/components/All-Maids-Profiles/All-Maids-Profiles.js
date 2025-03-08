import React, { useEffect, useState } from "react";
import MaidProfiles from "../Profiles/MaidProfiles";
import "../Filter-Section/Filter.modules.css";
import axios from "axios";
import ButtonEl from "../UI/Button/Button";
import SkeletonLoader from "../UI/Loader-Skeleton/SkeletonLoader";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const AllMaidsProfiles = ({
  searchTerm,
  filterSearchTerm,
  selectedCountries,
  selectedReligions,
  selectedLanguages,
  selectedExperiences,
  isHome = false,
}) => {
  const [maidData, setMaidData] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(6);
  const [loader, setLoader] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");

  useEffect(() => {
    const fetchMaidProfiles = async () => {
      try {
        const response = await axiosInstense.get(
          `api/v1/maids?category=${category ? category : ""}`,
          {
            params: {
              search: filterSearchTerm || searchTerm,
              countries: selectedCountries,
              religions: selectedReligions,
              languages: selectedLanguages,
              experiences: selectedExperiences,
            },
          }
        );
        setMaidData(response.data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        console.error("Error fetching maid profiles:", error);
      }
    };
    fetchMaidProfiles();
  }, [
    searchTerm,
    category,
    filterSearchTerm,
    selectedCountries,
    selectedReligions,
    selectedLanguages,
    selectedExperiences,
  ]);

  const currentItems = maidData.slice(0, itemsToLoad);

  const handleLoadMore = () => {
    setItemsToLoad(itemsToLoad + 6);
  };

  return (
    <>
      <div
        className={`allprofilesmaid relative space-y-4 md:grid md:grid-cols-2 lg:grid-cols-${
          isHome ? "4" : "3"
        } md:gap-8 md:space-y-0`}
        style={{ width: isHome ? "100%" : "70%" }}
      >
        {isHome ? (
          <>
            {loader
              ? Array.from({ length: itemsToLoad }, (_, index) => (
                  <SkeletonLoader key={uuidv4()} />
                ))
              : currentItems
                  .slice(0, 4)
                  .map((maid, index) => (
                    <MaidProfiles key={index} data={maid} backApiUrl={apiUrl} />
                  ))}
          </>
        ) : (
          <>
            {loader
              ? Array.from({ length: itemsToLoad }, (_, index) => (
                  <SkeletonLoader key={uuidv4()} />
                ))
              : currentItems.map((maid, index) => (
                  <MaidProfiles key={index} data={maid} backApiUrl={apiUrl} />
                ))}{" "}
          </>
        )}

        <div className="load-more w-full">
          <button
            className="mb-8 block"
            onClick={handleLoadMore}
            style={{
              display: itemsToLoad >= maidData.length ? "none" : "block",
            }}
          >
            <ButtonEl
              bgColor="#F05D22"
              hoverBgColor="#1c2b4d"
              buttonTxt="Load More"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllMaidsProfiles;
