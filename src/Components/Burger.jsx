import React from "react";
import "../CSS/Burger.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuOpenOutlined } from "@mui/icons-material";

const Burger = ({ translation }) => {

    const navigateTo = useNavigate()

  return (
    <div className="burger ">

        <MenuOpenOutlined/>
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
  );
};

export default Burger;
