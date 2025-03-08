import React from "react";
// import commaSvg from "./img/comma.svg"
import Client from "./img/avatar.svg"
import star from "./img/Star.svg"
const Testimonial = (props)=>{
    return(
        <>
        <div className="flex items-center justify-center flex-col" style={{direction:"rtl"}}>
            <div>
                <img className="w-[3.5rem] h-[3.5rem]" src={Client} alt="testimonialPic"/>
              </div>
            {/* <div className="testimonialBox">
              <img src={commaSvg} alt="comma"/>
            </div> */}

            <div className="stars flex items-center gap-1 mt-2">
              <img src={star} alt="Star"/>
              <img src={star} alt="Star"/>
              <img src={star} alt="Star"/>
              <img src={star} alt="Star"/>
              <img src={star} alt="Star"/>
            </div>
            <div className="flex items-center mt-2">
              
              <div className=" flex items-center gap-1">
                <div className="font-medium">
                  {props.testimonial.name}
                </div>
              </div>
            </div>
            <div className="font-normal mt-3 text-sm">
            {props.testimonial.msg}
            </div>
            
        </div>
            
        </>
        
    )
}
export default Testimonial;