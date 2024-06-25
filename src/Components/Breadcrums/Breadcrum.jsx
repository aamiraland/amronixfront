import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/arrowicon.png";
import { Link } from "react-router-dom";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="breadcrum">
        <Link style={{ color: "#5e5e5e", textDecoration: "none" }} to={"/"}>
          HOME <img src={arrow_icon} alt="" />
        </Link>
        SHOP
        <img src={arrow_icon} alt="" />
        <Link
          style={{ color: "#5e5e5e", textDecoration: "none" }}
          to={`/${product.category}`}
        >
          {" "}
          {product.category}
        </Link>
        <img src={arrow_icon} alt="" />
        {product.name}
      </div>
    </div>
  );
};

export default Breadcrum;
