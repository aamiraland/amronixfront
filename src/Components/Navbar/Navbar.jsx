import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/2024-05-20 14_28_50-A letter in shopping bag - Google Search.png";
import cart_icon from "../Assets/download.png";
import nav_dropdown from "../Assets/menu.png";
import { useRef } from "react";

import { useContext } from "react";

import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <Link style={{ textDecoration: "none" }} to={"/"}>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>AMRONIX</p>
        </div>
      </Link>

      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Lights");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Lights">
            Lights
          </Link>
          {menu === "Lights" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Electronics");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Electronics">
            Electronics
          </Link>
          {menu === "Electronics" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("More");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/More">
            More
          </Link>
          {menu === "More" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
