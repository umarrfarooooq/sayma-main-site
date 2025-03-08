import React from "react";
import Navbar from "../components/Header/Navbar";
import SignUp from "../components/Authentication-components/Signup-Component";
import { Helmet } from "react-helmet";

const SignUpPage = () =>{
    return(
        <>
            <Helmet>
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
                <meta name="description" content="Are you searching for trusted manpower services in Oman? Sayma is providing professional maids." />
                <title>Housekeeping Services for Homes in Muscat | Sayma</title>
            </Helmet>
            <Navbar />
            <SignUp />
        </>
    )
}

export default SignUpPage;