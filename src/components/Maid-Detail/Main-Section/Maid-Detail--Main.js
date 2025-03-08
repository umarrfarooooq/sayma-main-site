import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
// import { useTranslation } from 'react-i18next';
// import { VerifyTokenFrontend } from "../../Authentication-components/verifyToken";
import Loading from "../../Loading/Loading";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const MaidDetailMainSection = (props) => {
  // const isAuthenticated = VerifyTokenFrontend();
  // const { t } = useTranslation();
  const { backApiUrl } = props;
  const navigate = useNavigate();
  const { maidID } = useParams();
  const [maidDetails, setMaidDetails] = useState(null);
  // const [interviewPlanned, setInterviewPlanned] = useState(false);
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate();
  // const location = useLocation();
  useEffect(() => {
    const fetchMaidData = async () => {
      try {
        const response = await axiosInstense.get("api/v1/maids/" + maidID);
        setMaidDetails(response.data);
      } catch (error) {
        console.error("Error fetching maids:", error);
      }
    };

    fetchMaidData();
  }, [maidID]);

  // const handlePlanInterview = async () => {
  //   if (!isAuthenticated) {
  //     localStorage.setItem('prevPage', window.location.pathname);
  //     navigate('/login');
  //     return null;
  //   }
  //     try {
  //       const userPhoneNumber = localStorage.getItem("phonenoofuser");

  //       const response = await axiosInstense.post(
  //         "api/v1/interviews",
  //         {
  //           phoneNumber: userPhoneNumber,
  //           maidId: maidDetails.code,
  //         }
  //       );

  //       if (response.status === 201) {
  //         setInterviewPlanned(true);
  //       } else {
  //         console.error("Error planning interview");
  //       }
  //     } catch (error) {
  //       console.error("Error planning interview:", error);
  //     }

  // };

  // const handleDownloadCV = async () => {
  //   setLoading(true);
  //   try {
  //     const maidID = maidDetails._id;

  //     const response = await axiosInstense.get(
  //       `cv/pdf/${maidID}`,
  //       {
  //         responseType: "blob",
  //       }
  //     );

  //     const blob = new Blob([response.data], { type: "application/pdf" });
  //     const url = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.style.display = "none";
  //     a.href = url;
  //     a.download = `maid_${maidID}_cv.pdf`;

  //     document.body.appendChild(a);
  //     a.click();

  //     window.URL.revokeObjectURL(url);
  //     setLoading(false);

  //   } catch (error) {
  //     console.error("Error downloading CV:", error);
  //   }
  // };

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const extractYouTubeVideoId = (url) => {
    // Check if the URL is a YouTube Shorts URL
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^\n?#]+)/);
    if (shortsMatch) {
      return shortsMatch[1] || null;
    }

    // Check for standard YouTube video URLs
    const match = url.match(/youtu(?:\.be\/|be\.com\/watch\?v=)([^\n?#]+)/);
    return (match && match[1]) || null;
  };

  return (
    <>
      {maidDetails ? (
        <div className="maidsProfiles container py-12 md:py-20 lg:py-28">
          <div>
            <div className="flex md:items-center md:justify-between flex-col md:flex-row gap-4 mb-10">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => navigate(-1)}
                  className="bg-[#fff] cursor-pointer p-3 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5L5 12L12 19"
                      stroke="#262F32"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19 12L5 12"
                      stroke="#262F32"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-2xl font-bold">
                  {maidDetails.name}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <a
                  className="decoration-transparent"
                  href={`${process.env.REACT_APP_API_URL}cv/pdf/${maidID}`}
                >
                  <div className="bg-[#FFFBFA] cursor-pointer p-3 flex items-center gap-1 text-base rounded-lg">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4"
                          stroke="#434146"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-base text-[#262F32]">
                      Download CV
                    </span>
                  </div>
                </a>

                {/* <div className="bg-[#F05D22] text-[#FFFBFA] cursor-not-allowed p-3 flex items-center gap-1 text-base rounded-lg">
                  <span className="text-xs sm:text-base">Plan interview</span>
                </div> */}
              </div>
            </div>
            <div className="w-full border border-solid bg-white rounded-lg p-4 md:p-6">
              <div className="profileCard rounded-lg mb-4 block lg:flex lg:items-start gap-4">
                <div className="profileLeftSide">
                  <div className="maidImage flex items-center justify-center">
                    {maidDetails.maidImg &&
                    maidDetails.maidImg.includes("uploads/") ? (
                      <img
                        alt="maid 1"
                        className="w-[11rem] rounded-full h-[11rem] lg:w-[13rem] lg:h-[13rem] lg:rounded-md object-cover object-top"
                        src={`${backApiUrl}${maidDetails.maidImg}`}
                      />
                    ) : (
                      <img
                        alt="maid 1"
                        className="w-[11rem] rounded-full h-[11rem] lg:w-[13rem] lg:h-[13rem] lg:rounded-md object-cover object-top"
                        src={`https://res.cloudinary.com/umarfarooq/image/upload/${maidDetails.maidImg}`}
                      />
                    )}
                  </div>
                </div>
                <div className="profileRightSide">
                  <div className="overflow-x-auto w-full">
                    <div className="maidDetails overflow-y-auto max-w-full">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-x-auto gap-y-4 md:gap-y-8 lg:gap-y-12 gap-x-8 mt-4">
                        <div className="nationality">
                          <div className="text-xs">Name</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.name}
                          </div>
                        </div>
                        <div className="nationality">
                          <div className="text-xs">Nationality</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.nationality}
                          </div>
                        </div>
                        <div className="religion">
                          <div className="text-xs">Religion</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.religion}
                          </div>
                        </div>
                        <div className="maritalStatus">
                          <div className="text-xs">Marital Status</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.maritalStatus}
                          </div>
                        </div>
                        <div className="childrens">
                          <div className="text-xs">Childrens</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.childrens}
                          </div>
                        </div>
                        <div className="age">
                          <div className="text-xs">Age</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.age} Years Old
                          </div>
                        </div>
                        <div className="Languages">
                          <div className="text-xs">Languages</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.languages}
                          </div>
                        </div>
                        <div className="Salary">
                          <div className="text-xs">Salary</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.salery} OMR
                          </div>
                        </div>
                        <div className="MaidCode">
                          <div className="text-xs">Maid Tracking Code</div>
                          <div className="text-sm font-semibold">
                            {maidDetails.code}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <div className="maidImages overflow-x-auto">
                  <div className="flex items-center gap-8 flex-shrink-0 justify-between">
                    {maidDetails.maidImg2 && (
                      <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <img
                          alt="maid 2"
                          className="w-full rounded-lg h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top"
                          src={`${backApiUrl}${maidDetails.maidImg2}`}
                        />
                      </div>
                    )}
                    {maidDetails.maidImg3 && (
                      <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <img
                          alt="maid 3"
                          className="w-full  h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top"
                          src={`${backApiUrl}${maidDetails.maidImg3}`}
                        />
                      </div>
                    )}
                    {maidDetails.maidImg4 && (
                      <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <img
                          alt="maid 4"
                          className="w-full  h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top"
                          src={`${backApiUrl}${maidDetails.maidImg4}`}
                        />
                      </div>
                    )}

                    {/* {maidDetails.videoLink.includes("youtube.com") ||
                    maidDetails.videoLink.includes("youtu.be") ? (
                      <YouTube
                        videoId={extractYouTubeVideoId(maidDetails.videoLink)}
                        opts={opts}
                        className="w-full border border-solid shadow-md rounded-2xl h-[13rem] md:h-[21rem] md:w-full p-2"
                      />
                    ) : (
                      <video
                        controls
                        className="w-full border border-solid shadow-md rounded-2xl h-[13rem] md:h-[21rem] md:w-full p-2 "
                      >
                        <source
                          src={`${backApiUrl}${maidDetails.videoLink}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )} */}
                  </div>
                </div>
              </div>
              <div className="remarks bg-[#F2F2F2] rounded-lg p-2">
                <div className="flex sm:flex-row flex-col items-center gap-4">
                  <div className="remarksHeading text-center w-full sm:w-auto p-2 rounded-lg bg-[#FFFBFA]">
                    <p className="mb-0">Admin Remarks</p>
                  </div>
                  <div className="actualRemarks">
                    <p>{maidDetails.remarks}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MaidDetailMainSection;
