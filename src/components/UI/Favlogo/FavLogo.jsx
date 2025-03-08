import React from "react";
import mobileLogo from "../../Header/images/favicon.svg";
const FavLogo = ({className}) => {
  return (
    <>
      <img
        className={`h-20 w-16 ${className}`}
        src={mobileLogo}
        alt="Sayma"
      />
    </>
  );
};


export default FavLogo;
