import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
      </div>
      <div className="right-h">right side content here </div>
    </div>
  );
};

export default Hero;
