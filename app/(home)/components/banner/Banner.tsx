import Image from "next/image";
import React from "react";
import bannerHome from "../../../../public/Home/wallpaper-home.jpg";
import InfoText from "../info-text/InfoText";
import "./banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="containerHome">
        <div className="banner-home">
          <Image src={bannerHome} alt="bannerHome" className="bannerHome" />
        </div>
        <div className="info-home">
          <InfoText />
        </div>
      </div>
    </div>
  );
};

export default Banner;
