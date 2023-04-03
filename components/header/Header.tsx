"use client";
import React from "react";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
