import React from "react";
import Navbar from "../components/Header/Navbar";
import BlogDetails from "../components/Blog-Components/Blog-Details";
import Footer from "../components/Footer/Footer";

const BlogDetailsPage = () => {
    return(
        <>
            <Navbar />
            <BlogDetails />
            <Footer />
        </>
    )
}

export default BlogDetailsPage;