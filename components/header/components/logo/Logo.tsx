import Image from "next/image";
import React from "react";
import logo from "../../../../public/Header/logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
