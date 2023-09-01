import React from "react";
import "../CSS/Burger.css";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, MenuOpenOutlined } from "@mui/icons-material";

const Burger = ({ translation }) => {
  const navigateTo = useNavigate();

  
  const closeMenu = () => {
    document.querySelector("body").classList.remove("menuOpen");
  };

  const navigateClose = (value) => {
    navigateTo(value);
    closeMenu()
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
        <Button onClick={() => navigateClose("/services")}>
          {translation.navLink1}
        </Button>

        <Button onClick={() => navigateClose("/fleet")}>
          {translation.navLink3}
        </Button>

        <Button onClick={() => navigateClose("/fares")}>
          {translation.navLink6}
        </Button>

        <Button onClick={() => navigateClose("/coverage")}>
          {translation.navLink2}
        </Button>

        <Button onClick={() => navigateClose("/contact")}>
          {translation.navLink4}
        </Button>

        <Button onClick={() => navigateClose("/about")}>
          {translation.navLink5}
        </Button>
      </div>
    </div>
  );
};

export default Burger;
