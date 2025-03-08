import React from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./Profile.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MaidProfiles = (props) => {
  // const location = useLocation();
  // const maxHeight = location.pathname === "/" ? "12rem" : "22rem";
  const { name, religion, nationality, salery, appliedFor, _id, maidImg } =
    props.data;
  const { backApiUrl } = props;
  const cloudinaryParams = "q_auto:low,f_auto,w_300";
  return (
    <>
      <div
        dir="ltr"
        style={{
          backgroundColor: "#FFFBFA",
          boxShadow: "0px 16px 24px 0px rgba(7, 42, 91, 0.12)",
        }}
        className="rounded-3xl min-h-[28rem] max-h-full hover:outline hover:outline-[#F05D22] outline-1 relative overflow-hidden transition-all  p-6"
        key={props.i}
      >
        <Link
          to={`/maid-detail/${_id}`}
          className="flex flex-col h-full justify-between"
        >
          {maidImg && maidImg.includes("uploads/") ? (
            <img
              loading="lazy"
              className="maidProfileImage max-w-[17rem] min-w-full md:w-[16rem] h-[13.5rem] rounded-xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={`${backApiUrl}${maidImg}`}
              alt="Service Detail"
              width={30}
              height={21}
            />
          ) : (
            <img
              loading="lazy"
              className="maidProfileImage max-w-[17rem] min-w-full md:w-[16rem] h-[13.5rem] rounded-xl"
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
                objectPosition: "top",
              }}
              src={`https://res.cloudinary.com/umarfarooq/image/upload/${cloudinaryParams}/${maidImg}`}
              alt="Service Detail"
              width={30}
              height={26}
            />
          )}
          <div className="service-detail mt-2">
            <h3 className="text-xl" style={{ color: "#1A1A1A" }}>
              {name}
            </h3>
            <div
              style={{ fontSize: "0.625rem", color: "#5F5F5F" }}
              className="maidDetailSection sm:text-lg grid grid-cols-2"
            >
              <div className="occupation">
                <p style={{ color: "#9E9E9E" }} className="font-normal text-xs">
                  Occupation{" "}
                  <p
                    style={{ color: "#5F5F5F" }}
                    className="font-semibold text-sm"
                  >
                    {appliedFor}
                  </p>
                </p>
              </div>
              <div className="religion">
                <p style={{ color: "#9E9E9E" }} className="font-normal text-xs">
                  Religion{" "}
                  <p
                    style={{ color: "#5F5F5F" }}
                    className="font-semibold text-sm"
                  >
                    {religion}
                  </p>
                </p>
              </div>
              <div className="salery">
                <p style={{ color: "#9E9E9E" }} className="font-normal text-xs">
                  Salary{" "}
                  <p
                    style={{ color: "#5F5F5F" }}
                    className="font-semibold text-sm"
                  >
                    {salery}
                  </p>
                </p>
              </div>
              <div className="country">
                <p style={{ color: "#9E9E9E" }} className="font-normal text-xs">
                  Country{" "}
                  <p
                    style={{ color: "#5F5F5F" }}
                    className="font-semibold text-sm"
                  >
                    {nationality}
                  </p>
                </p>
              </div>
            </div>
            <div className="seeProfileBtn text-center">
              <Link to={`/maid-detail/${_id}`}>
                <button
                  style={{
                    border: "1px solid #F05D22",
                    fontSize: "0.75rem",
                    color: "#F05D22",
                  }}
                  className="rounded-md transition-all hover:bg-[#F05D22] hover:bg-opacity-30 active:bg-opacity-50 py-2 w-full mx-auto text-center"
                >
                  See Profile <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MaidProfiles;
