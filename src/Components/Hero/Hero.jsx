import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand.png";
import arrow from "../Assets/arrow.jpeg";
import hero from "../Assets/NewCollections/imresizer-1711458174031.jpeg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div className="late">Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <Link to={`/product/37`}>
          <img className="hero-right-img" src={hero} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
