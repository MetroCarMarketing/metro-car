import React from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import { Button } from "@mui/material";
import car from "../Assets/metrocar regency.jpg";
import { MenuOutlined } from "@mui/icons-material";

const Nav = ({ translation }) => {

  const navigateTo = useNavigate();

  const openMenu = () => {
    document.querySelector('body').classList.toggle('menuOpen')
  }

  return (
    <nav>
      <MenuOutlined onClick={openMenu} />
      <figure onClick={() => navigateTo("/")} className="nav__logo--wrapper">
        <img src={logo} alt="" />
      </figure>
      <h1>MetroCar</h1>
      <div className="nav__list nav__desktop">
        <Button onClick={() => navigateTo("/services")}>
          {translation.navLink1}
        </Button>

        <Button onClick={() => navigateTo("/coverage")}>
          {translation.navLink2}
        </Button>

        <Button onClick={() => navigateTo("/fleet")}>
          {translation.navLink3}
        </Button>

        <Button onClick={() => navigateTo("/contactus")}>
          {translation.navLink4}
        </Button>

        <Button onClick={() => navigateTo("/aboutus")}>
          {translation.navLink5}
        </Button>
      </div>
      <figure className="nav__car--desktop">
        <img src={car} alt="" />
      </figure>
    </nav>
  );
};

export default Nav;
