import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h1 className="hero-text">A Unique, Allegorical Collection Of NFTs</h1>
        <button className="custom_btn hero-btn">MINT</button>
      </div>
      <div className="bottom-shadow"></div>
    </div>
  );
};

export default Hero;
