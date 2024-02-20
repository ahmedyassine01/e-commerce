import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="nav-logo" src="/OIP.jpg" alt="" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}>Men {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}>Women {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <Link to='/login'>
      <div className="navbar-login">
        <button>login</button>
        <img src="login.jpg" alt="" />
      </div>
      </Link>
    </div>
  );
};
