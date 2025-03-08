import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Testimonial from "./Testimonial";
import './Testimonials.css';
import range from "lodash/range";
import TestimonialData from "./testimonials.json"
import { useTranslation } from 'react-i18next';


const Testimonials = ()=> {
    const [children, setChildren] = useState([]);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberOfCards, setNumberOfCards] = useState(3);
    const { t } = useTranslation();

    useEffect(() => {
      setTimeout(() => {
        setChildren(createChildren(6));
      }, 100);
    }, []);
  
  
    const createChildren = (n) =>
      range(n).map((i) => (
        <div className={`flex items-center bg-white justify-between py-8 px-4 text-sm rounded-2xl`} key={i} style={{ height: "16rem", border: "2px solid rgba(3, 29, 146, 0.08)" }}>
          <div className="testimonials flex flex-col items-start">
            <Testimonial testimonial = {TestimonialData[i]}/>
          </div>
        </div>
      ));
  
    const changeActiveItem = (activeItemIndex) =>
      setActiveItemIndex(activeItemIndex);
  
      useEffect(() => {
          setChildren(createChildren(6));
          updateNumberOfCards();
      
          window.addEventListener("resize", updateNumberOfCards);
          return () => {
            window.removeEventListener("resize", updateNumberOfCards);
          };
        }, []);
  
        const updateNumberOfCards = () => {
          if (window.innerWidth <= 770) {
            setNumberOfCards(1);
          }else if (window.innerWidth <= 992) {
            setNumberOfCards(2);
          }else {
            setNumberOfCards(3);
          }
        };
  
    return (
      <div className="testimonialsContainer overflow-hidden pt-12 py-12 pb-28">
          <div className="container">
          <div className="mb-6 lg:mb-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl tracking-tight font-extrabold" style={{color:"#1A1A1A"}}>{t('testimonials.title')}</h2>
          </div>
          <div  className={`carousel-container testimonialCont`} dir="ltr">
            <ItemsCarousel
                enablePlaceholder
                numberOfPlaceholderItems={4}
                minimumPlaceholderTime={1000}
                placeholderItem={
                <div style={{ height: 200, background: "blue" }}>
                Placeholder
                </div>
                }
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
                    <div style={{border:"1px solid #8C979C"}} className={`rightChev hover:bg-[#F05D22] active:bg-[#175a3a] p-3 ml-4 absolute -bottom-20 rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M5 12H19" stroke="#8C979C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 5L19 12L12 19" stroke="#8C979C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  
                    
                }
                leftChevron={
                  <div style={{border:"1px solid #8C979C"}} className={`leftChev hover:bg-[#F05D22] active:bg-[#175a3a] p-3 mr-4 absolute -bottom-20 rounded-lg`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 12H5" stroke="#8C979C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 5L5 12L12 19" stroke="#8C979C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                    
                }
                outsideChevron={false}
            >
                
                {children}
            </ItemsCarousel>
          </div>
          
          </div>
      </div>
      
    );
    
}

export default Testimonials;
