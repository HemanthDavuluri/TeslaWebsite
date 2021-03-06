import React from "react";
import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import teslaLogoSmall from "../assets/teslaLogoSmall.svg";
function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={teslaLogoSmall} alt="logo" />
      </div>
      <div className="header-center">
        <p>MODEL S</p>
        <p>MODEL 3</p>
        <p>MODEL X</p>
        <p>MODEL Y</p>
        <p>SOLAR ROOF</p>
        <p>SOLAR PANNELS</p>
      </div>
      <div className="header-right">
        <p>SHOP</p>
        <p>TESLA ACCOUNT</p>

        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
