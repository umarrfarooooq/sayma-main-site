import React from "react";
import MaidDetailPageNavbar from "../components/Maid-Detail/Maid-Detail-Header/Maid-Detail-Header";
import MaidDetailMainSection from "../components/Maid-Detail/Main-Section/Maid-Detail--Main";
import { Helmet } from "react-helmet";
import NeedHelp from "../components/Need-Help/NeedHelp";
import Footer from "../components/Footer/Footer";

const MaidDetail = () =>{
    const apiUrl = process.env.REACT_APP_API_URL;
    const backgroundImageUrl = 'https://res.cloudinary.com/umarfarooq/image/upload/v1707893084/alghawalimanpower/qubkrpihvvdey8uznlpm.jpg';

    return(
        <>
            <Helmet>
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Sayma provides housekeeping services in Oman for household.For profesional housemaids contact us." />
                <title>Your Trusted Housekeeping Partner in Muscat | Sayma</title>
            </Helmet>
            <MaidDetailPageNavbar />
            <div style={{ backgroundImage: `url(${backgroundImageUrl})`}} className="bg-cover">
            <MaidDetailMainSection backApiUrl={apiUrl}/>
            </div>
            <NeedHelp bgColor="#F2F2F2"/>
            <Footer />
        </>
    )
}

export default MaidDetail;