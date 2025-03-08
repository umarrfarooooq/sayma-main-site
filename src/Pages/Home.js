import React from "react";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/Why-Choose-Us/Why-Choose-Us";
import NeedHelp from "../components/Need-Help/NeedHelp";
import Footer from "../components/Footer/Footer";
import AllMaidsProfiles from "../components/All-Maids-Profiles/All-Maids-Profiles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ButtonEl from "../components/UI/Button/Button";
const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.saymamanpower.com/" />
        <meta
          name="keywords"
          content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help"
        />
        <meta
          name="description"
          content="Sayma provides housemaid services in Oman. Get in touch with us right now to get the best housemaid services in Oman."
        />
        <title>House Maid Service in Muscat | Sayma</title>
      </Helmet>
      <Navbar />
      <div className="whatsapp fixed bottom-[25px] left-[25px] z-50">
        <a rel="noreferrer" target="_blank" href="https://wa.me/+96896201040">
          <img
            className="w-[60px] h-[60px]"
            src="https://i.pinimg.com/originals/f3/53/5d/f3535dc3f95e71506f7c80755610176c.png"
            alt="whatsapp icon"
          />
        </a>
      </div>
      <Main />
      {/* <Services /> */}
      <div className="bg-[#DCE2FF]">
        <div className="py-8 sm:py-16 container">
          <AllMaidsProfiles isHome={true} />
          <div className="w-full flex items-center justify-center my-4">
            <button>
              <Link
                to="/nepali-srilankan-housemaids?category=Domestic%20Worker"
                className="flex items-center"
                style={{ textDecoration: "none", color: "#FFFBFA" }}
              >
                <div className="flex items-center">
                  <ButtonEl
                    bgColor="#F05D22"
                    hoverBgColor="#F05D22"
                    px={6}
                    buttonTxt={"See All"}
                  />
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <Testimonials />
      <NeedHelp />
      <Footer />
    </>
  );
};

export default Home;
