import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Link } from 'react-router-dom';
import axios from "axios";
import ButtonEl from "../UI/Button/Button";
import MaidProfiles from "./MaidProfiles";
import "./Profile.css"
import { useTranslation } from 'react-i18next';
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
function Profile() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(3);
  const [maids, setMaids] = useState([]);
  const { t } = useTranslation();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axiosInstense.get('api/v1/maids')
      .then(response => {
        setMaids(response.data);
      })
      .catch(error => {
        console.error("Error fetching maids:", error);
      });
  }, []);

  const changeActiveItem = (activeItemIndex) =>
    setActiveItemIndex(activeItemIndex);

  useEffect(() => {
    updateNumberOfCards();
    window.addEventListener("resize", updateNumberOfCards);
    return () => {
      window.removeEventListener("resize", updateNumberOfCards);
    };
  }, []);

  const updateNumberOfCards = () => {
    if (window.innerWidth <= 540) {
      setNumberOfCards(1);
    } else if (window.innerWidth <= 770) {
      setNumberOfCards(2);
    }else if (window.innerWidth <= 992) {
      setNumberOfCards(3);
    }else {
      setNumberOfCards(4);
    }
  };

  return (
    <div style={{background:"#E4FFF2"}} className="profileContainer overflow-x-hidden pb-12 py-4">
      <div className="container">
        <div className="mb-6 lg:mb-8 py-8 text-center">
          <h2 className="text-2xl sm:text-4xl tracking-tight font-extrabold " style={{color:"#F05D22"}}>{t('profilesSection.title')}</h2>
        </div>
        <div className="carousel-container" dir="ltr">
        <ItemsCarousel
          
          enablePlaceholder
          numberOfPlaceholderItems={6}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: "blue" }}>Placeholder</div>}
          numberOfCards={numberOfCards}
          gutter={12}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={false}
          requestToChangeActive={changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          chevronWidth={24}
          rightChevron={
            
            <div style={{boxShadow: "0px 8px 16px 0px rgba(1, 71, 38, 0.24)"}} className="bg-white p-4 xl:ml-12 rounded hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-right">
              <path id="Vector" d="M5 12H19" stroke="#F05D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M12 5L19 12L12 19" stroke="#F05D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            </div>
          }
          leftChevron={
            <div style={{boxShadow: "0px 8px 16px 0px rgba(1, 71, 38, 0.24)"}} className="bg-white p-4 xl:ml-12 rounded hidden md:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="arrow-right">
              <path id="Vector" d="M19 12H5" stroke="#F05D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Vector_2" d="M12 5L5 12L12 19" stroke="#F05D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </svg>
            </div>
            
          }
          outsideChevron={false}
        >
          {maids.slice(0,5).map((maid, index) => (
          <MaidProfiles key={index} data={maid} backApiUrl={apiUrl}/>
            ))}
        </ItemsCarousel>
          <div className="text-center mt-8 py-8">
              <Link to="/nepali-srilankan-housemaids">
                <ButtonEl bgColor="#F05D22" hoverBgColor="#F05D22" px={12} buttonTxt={t('profilesSection.buttonText')}/>
              </Link>
          </div>
            
        </div>
        
      </div>
    </div>
  );
}

export default Profile;
