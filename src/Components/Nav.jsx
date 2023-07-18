import React from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import { Button } from "@mui/material";

const Nav = () => {
  const navigateTo = useNavigate();
  return (
    <nav>
      <figure onClick={() => navigateTo("/")} className="nav__logo--wrapper">
        <img src={logo} alt="" />
      </figure>
      <div className="nav__list">
        <Button onClick={() => navigateTo("/")}>Servicios</Button>

        <Button onClick={() => navigateTo("/")}>Cobertura</Button>

        <Button onClick={() => navigateTo("/")}>Flota</Button>

        <Button onClick={() => navigateTo("/")}>Contactenos</Button>

        <Button onClick={() => navigateTo("/")}>Nosotros</Button>
      </div>
    </nav>
  );
};

export default Nav;
