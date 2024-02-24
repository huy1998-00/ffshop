import React from "react";
import { HomeWallpaper } from "../../assets/images";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="flex flex-col w-full">
      {/** quick contact */}
      {/** Nav bar */}
      <Navbar></Navbar>
      {/** header background */}
      <div className="bg-header-background bg-cover bg-no-repeat  bg-center sm:h-[400px] md:h-[600px] lg:h-[800px]"></div>
    </div>
  );
};

export default Header;

// w-full h-5/6 bg-header-background bg-cover bg-no-repeat  bg-center sm:h-[400px] md:h-[600px] lg:h-[900px]
