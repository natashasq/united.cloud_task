import React from "react";
import { Link } from "react-router-dom";

//ASSETS
import logo from "../../assets/images/video-camera.png";

const Header = () => (
  <div className="w-full h-24 px-8 flex justify-center items-center mb-10 md:justify-start">
    <Link to={"/"}>
      <div className="flex flexi-col gap-2">
        <img src={logo} alt="home icon" className="h-20" />
        <div className="w-20 flex flex-col justify-center">
          <p className="text-xl text-yellow">Grid</p>
          <p className="text-4xl text-yellow">Movies</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Header;
