import React from "react";
import "../CSS/Burger.css";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, MenuOpenOutlined } from "@mui/icons-material";

const Burger = ({ translation }) => {
  const navigateTo = useNavigate()

  const navigateClose = ( value ) => {
    navigateTo(value)
    document.querySelector('body').classList.toggle('menuOpen')
  }

  const closeMenu = () => {
    document.querySelector('body').classList.toggle('menuOpen')
  };

  return (
    <div className="burger ">
      <MenuOpenOutlined onClick={closeMenu} />
      <IconButton
        className="burger__home--icon"
        onClick={() => navigateTo("/")}
      >
        <Home />
      </IconButton>
      <Button onClick={() => navigateClose("/services")}>
        {translation.navLink1}
      </Button>
      {/* <Button onClick={() => navigateTo("/services")}>
        {translation.navLink1}
      </Button> */}

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
  );
};

export default Burger;
