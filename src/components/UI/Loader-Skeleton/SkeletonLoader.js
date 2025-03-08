import React from "react";
import "../../Profiles/Profile.css";

const SkeletonLoader = () => {
  return (
    <>
      <div
        dir="ltr"
        style={{
          backgroundColor: "#FFFBFA",
          boxShadow: "0px 16px 24px 0px rgba(7, 42, 91, 0.12)",
        }}
        className="rounded-3xl min-h-[28rem] max-h-full hover:outline hover:outline-[#F05D22] outline-1 relative overflow-hidden transition-all p-6 animate-pulse"
      >
        <div className="flex flex-col h-full justify-between">
          <div className="maidProfileImage max-w-[17rem] bg-slate-400 min-w-full md:w-[16rem] h-[13.5rem] rounded-xl" style={{ backgroundPosition: "center", backgroundSize: "cover", objectFit: "cover", objectPosition: "top" }} />
          <div className="service-detail mt-2">
            <h3 className="text-xl w-full h-8 bg-slate-400 visually-hidden" style={{ color: "#1A1A1A" }}>
            
            </h3>
            <div style={{ fontSize: "0.625rem", color: "#5F5F5F" }} className="maidDetailSection sm:text-lg grid gap-2 grid-cols-2">
              <div className="occupation">
                <div style={{ color: "#9E9E9E" }} className="font-normal bg-slate-400 h-4 w-full text-xs">
                   <span className="font-semibold text-sm visually-hidden animate-pulse"></span>
                </div>
              </div>
              <div className="religion">
                <p style={{ color: "#9E9E9E" }} className="font-normal bg-slate-400 h-4 w-full text-xs">
                   <span className="font-semibold text-sm visually-hidden animate-pulse"></span>
                </p>
              </div>
              <div className="salary">
                <p style={{ color: "#9E9E9E" }} className="font-normal bg-slate-400 h-4 w-full text-xs">
                   <span className="font-semibold text-sm visually-hidden animate-pulse"></span>
                </p>
              </div>
              <div className="country">
                <p style={{ color: "#9E9E9E" }} className="font-normal bg-slate-400 h-4 w-full text-xs">
                   <span className="font-semibold text-sm visually-hidden animate-pulse"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;
