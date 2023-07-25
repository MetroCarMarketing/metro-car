import React from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import { Button } from "@mui/material";
import car from "../Assets/metrocar regency.jpg";


const Nav = ({ content }) => {

  const navigateTo = useNavigate();

  return (
    <nav>
      <figure onClick={() => navigateTo("/")} className="nav__logo--wrapper">
        <img src={logo} alt="" />
      </figure>
      <h1>Metro-Car <br /> Regency</h1>
      <div className="nav__list">
        <Button onClick={() => navigateTo("/servicios")}>{content.navLink1}</Button>

        <Button onClick={() => navigateTo("/cobertura")}>{content.navLink2}</Button>

        <Button onClick={() => navigateTo("/fleet")}>{content.navLink3}</Button>

        <Button onClick={() => navigateTo("/contactenos")}>{content.navLink4}</Button>

        <Button onClick={() => navigateTo("/nosotros")}>{content.navLink5}</Button>
      </div>
      <figure className="nav__car">
        <img src={car} alt=""  />
      </figure>
    </nav>
  );
};

export default Nav;
