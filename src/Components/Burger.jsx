import React from "react";
import "../CSS/Burger.css";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, MenuOpenOutlined } from "@mui/icons-material";

const Burger = ({ translation }) => {

  const test = () => {
    alert('Esta pagina esta en desarrollo. This page is currently being developed')
  }


  const navigateTo = useNavigate();

  const navigateClose = (value) => {
    navigateTo(value);
    document.querySelector("body").classList.remove("menuOpen");
  };

  const closeMenu = () => {
    document.querySelector("body").classList.remove("menuOpen");
  };

  return (
    <div onClick={closeMenu} className="burger ">
      <div className="burger__half">
        <MenuOpenOutlined onClick={closeMenu} />
        <IconButton
          className="burger__home--icon"
          onClick={() => navigateClose("/")}
        >
          <Home />
        </IconButton>
        <Button onClick={test}>
          {translation.navLink1}
        </Button>

        <Button onClick={() => navigateClose("/coverage")}>
          {translation.navLink2}
        </Button>

        <Button onClick={() => navigateClose("/fleet")}>
          {translation.navLink3}
        </Button>

        <Button onClick={test}>
          {translation.navLink4}
        </Button>

        <Button onClick={test}>
          {translation.navLink5}
        </Button>
      </div>
    </div>
  );
};

export default Burger;
