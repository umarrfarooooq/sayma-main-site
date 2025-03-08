import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { VerifyTokenFrontend } from "../../Authentication-components/verifyToken";
import Loading from "../../Loading/Loading";
const axiosInstense = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
const MaidDetailMainSection = (props) => {
  const isAuthenticated = VerifyTokenFrontend();
  const { t } = useTranslation();
  const {backApiUrl} = props;
  const { maidID } = useParams();
  const [maidDetails, setMaidDetails] = useState(null);
  const [interviewPlanned, setInterviewPlanned] = useState(false);
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  // const location = useLocation();
  useEffect(() => {
    const fetchMaidData = async () => {
      try {
        const response = await axiosInstense.get(
          "api/v1/maids/" + maidID
        );
        setMaidDetails(response.data);
      } catch (error) {
        console.error("Error fetching maids:", error);
      }
    };

    fetchMaidData();
  }, [maidID]);

  const handlePlanInterview = async () => {
    if (!isAuthenticated) {
      localStorage.setItem('prevPage', window.location.pathname);
      navigate('/login');
      return null;
    }
      try {
        const userPhoneNumber = localStorage.getItem("phonenoofuser");
  
        const response = await axiosInstense.post(
          "api/v1/interviews",
          {
            phoneNumber: userPhoneNumber,
            maidId: maidDetails.code,
          }
        );
  
        if (response.status === 201) {
          setInterviewPlanned(true);
        } else {
          console.error("Error planning interview");
        }
      } catch (error) {
        console.error("Error planning interview:", error);
      }
    
  };

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
        <div className="maidsProfiles mt-2">
                    <div>
                        <div className="w-full border border-solid bg-white rounded-lg p-6">
                            <div className="profileCard border border-solid rounded-lg p-4 mb-4 block lg:flex lg:items-start gap-4">
                                <div className="profileLeftSide">
                                    <div className="maidImage">
                                    {maidDetails.maidImg && maidDetails.maidImg.includes("uploads/") ? (
                                        <img
                                        className="w-[18rem] h-[18rem] lg:w-[8rem] lg:h-[8rem] rounded-md object-cover object-top"
                                        src={`${import.meta.env.VITE_API_URL}${maidDetails.maidImg}`}
                                        />
                                    ) : (
                                        <img
                                        className="w-[18rem] h-[18rem] lg:w-[8rem] lg:h-[8rem] rounded-md object-cover object-top"
                                        src={`https://res.cloudinary.com/umarfarooq/image/upload/${maidDetails.maidImg}`}
                                        />
                                    )}                                </div>
                                </div>
                                <div className="profileRightSide">
                                    <div className="maidName text-lg font-bold">
                                        {maidDetails.name}
                                    </div>
                                    <div className="overflow-x-auto w-full">
                                        <div className="maidDetails overflow-y-auto max-w-full">
                                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-x-auto gap-y-4 gap-x-8 mt-4">
                                                <div className="nationality">
                                                    <div className="text-xs">Nationality</div>
                                                    <div className="text-sm font-semibold">{maidDetails.nationality}</div>
                                                </div>
                                                <div className="religion">
                                                    <div className="text-xs">Religion</div>
                                                    <div className="text-sm font-semibold">{maidDetails.religion}</div>
                                                </div>
                                                <div className="maritalStatus">
                                                    <div className="text-xs">Marital Status</div>
                                                    <div className="text-sm font-semibold">{maidDetails.maritalStatus}</div>
                                                </div>
                                                <div className="childrens">
                                                    <div className="text-xs">Childrens</div>
                                                    <div className="text-sm font-semibold">{maidDetails.childrens}</div>
                                                </div>
                                                <div className="age">
                                                    <div className="text-xs" >Age</div>
                                                    <div className="text-sm font-semibold">{maidDetails.age} Years Old</div>
                                                </div>
                                                <div className="Languages">
                                                    <div className="text-xs">Languages</div>
                                                    <div className="text-sm font-semibold">{maidDetails.languages}</div>
                                                </div>
                                                <div className="Salary">
                                                    <div className="text-xs">Salary</div>
                                                    <div className="text-sm font-semibold">{maidDetails.salery}</div>
                                                </div>
                                                <div className="MaidCode">
                                                    <div className="text-xs">Maid Tracking Code</div>
                                                    <div className="text-sm font-semibold">{maidDetails.code}</div>
                                                </div>
                                                <div className="whoAdd">
                                                    <div className="text-xs">Added to System By</div>
                                                    <div className="text-sm font-semibold">{maidDetails.addedBy? maidDetails.addedBy : 'Admin'}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8">
                                <div className="maidImages overflow-x-auto">
                                    <div className="flex items-center gap-8 flex-shrink-0 justify-between">
                                    {maidDetails.maidImg2 && <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-center p-4 rounded-lg bg-[#F2F2F2]">
                                            <img className="w-full rounded-lg h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top" src={`${import.meta.env.VITE_API_URL}${maidDetails.maidImg2}`}/>
                                        </div>
                                    }
                                    {maidDetails.maidImg3 && <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-center p-4 rounded-lg bg-[#F2F2F2]">
                                            <img className="w-full  h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top" src={`${import.meta.env.VITE_API_URL}${maidDetails.maidImg3}`}/>
                                        </div>
                                    }
                                    {maidDetails.maidImg4 && <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-center p-4 rounded-lg bg-[#F2F2F2]">
                                            <img className="w-full  h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top" src={`${import.meta.env.VITE_API_URL}${maidDetails.maidImg4}`}/>
                                        </div>
                                    }
                                    {maidDetails.videoLink && <div className="w-[18rem] md:w-[15rem] flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-center p-4 rounded-lg bg-[#F2F2F2]">
                                            <video
                                                controls
                                                className="w-full  h-[13rem] md:h-[21rem] md:w-full p-2 object-cover object-top"
                                            >
                                                <source src={`${import.meta.env.VITE_API_URL}${maidDetails.videoLink}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    }
                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="remarks bg-[#F2F2F2] rounded-lg p-2">
                                <div className="flex sm:flex-row flex-col items-center gap-4">
                                    <div className="remarksHeading text-center w-full sm:w-auto p-2 rounded-lg bg-[#FFFBFA]">
                                        <p>Admin Remarks</p>
                                    </div>
                                    <div className="actualRemarks">
                                        <p>
                                            {maidDetails.remarks}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
      ): <Loading />}
    </>
  );
};

export default MaidDetailMainSection;






<div className="maid-detail-main-section container my-8">
          {interviewPlanned && (
            <p className="ml-4 bg-green-700 rounded-lg text-white px-4 py-6">
            {t('maidDetail.interviewSuccessMessage')}
            </p>
          )}
          
          <p className="mx-3">
          {t('maidDetail.codeLabel')}<span className="text-blue-700 text-xl mb-4"> {maidDetails.code}</span>
          </p>
          <div className="flex flex-col md:flex-row items-start gap-x-6 justify-between container">
            <div className="leftSection w-full">
            {maidDetails.videoLink.includes("youtube.com") || maidDetails.videoLink.includes("youtu.be") ? (
              <YouTube videoId={extractYouTubeVideoId(maidDetails.videoLink)} opts={opts} className="rounded-lg overflow-hidden shadow-md" />
            ) : (
              <video controls className="rounded-lg overflow-hidden shadow-md" style={{ width: '100%' }}>
                <source src={`${backApiUrl}${maidDetails.videoLink}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}            
            </div>
            <div className="rightSection w-full md:ml-8 md:mt-0 mt-8 ml-0">
              <h2 className="font-semibold text-4xl mb-3">{maidDetails.name}</h2>
              <p className="mb-3">{t('maidDetail.nationalityLabel')} <span>{maidDetails.nationality}</span></p>
              <p className="mb-3">{t('maidDetail.ageLabel')} <span>{maidDetails.age} </span>Years</p>
              <p className="mb-3">{t('maidDetail.salaryLabel')} <span>{maidDetails.salery} </span>OMR </p>
              {/* {loading && <p>Downloading...</p>} */}

              <div className="flex items-center gap-4 mt-8">
              <a href={`${process.env.REACT_APP_API_URL}cv/pdf/${maidID}`}>
                <button
                    style={{ background: "#F05D22" }}
                    className="py-2 text-white rounded-md px-6"
                  >
                    {t('maidDetail.downloadCVButton')}
                  </button>
              </a>
                
                {/* <button
                  style={{ background: "#F05D22" }}
                  className="py-2 text-white rounded-md px-6"
                  onClick={handleDownloadCV}
                >
                  {t('maidDetail.downloadCVButton')}
                </button> */}
                <button
                  style={{ background: "#249D64" }}
                  className="py-2 text-white rounded-md px-6"
                  onClick={handlePlanInterview}
                  disabled={interviewPlanned}
                >
                  {t('maidDetail.planInterviewButton')}
                  
                </button>
              </div>
            </div>
          </div>
</div>