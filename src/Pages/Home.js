import React from "react";
import Navbar from "../components/Header/Navbar";
import Main from "../components/Main/Main";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/Why-Choose-Us/Why-Choose-Us";
import NeedHelp from "../components/Need-Help/NeedHelp";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
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
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <NeedHelp />
      <Footer />
    </>
  );
};

export default Home;
