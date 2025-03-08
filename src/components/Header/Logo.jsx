import React from "react";
import logo from "./images/Saymalogo.svg";
import mobileLogo from "./images/favicon.svg";
const LogoIcon = ({ height, width }) => {
  return (
    <>
      <img
        className={`${height ? height : "h-20"} ${
          width ? width : "w-16"
        } hidden md:inline-block`}
        src={logo}
        alt="Sayma"
      />
      <img
        className="h-20 w-16 md:hidden inline-block"
        src={mobileLogo}
        alt="Sayma"
      />
    </>
  );
};


export default LogoIcon;
