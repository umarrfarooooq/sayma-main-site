import React from "react";
import FavLogo from "../UI/Favlogo/FavLogo";
const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen animate-pulse">
        <FavLogo className="h-30 w-30" />
      </div>
    </>
  );
};

export default Loading;
