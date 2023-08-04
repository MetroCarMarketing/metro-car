import React, { useState } from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import car from "../Assets/metrocar regency.jpg";
import { MenuOutlined } from "@mui/icons-material";
import NavBtn from "./NavBtn";

const Nav = ({ translation }) => {

  const test = () => {
    alert(
      "Esta pagina esta en desarrollo. This page is currently being developed"
    );
  };

  const navigateTo = useNavigate();

  const homeBtn = () => {
    navigateTo("/");
    setActive(null);
  };

  const [active, setActive] = useState(null);

  const activateBtn = (value, buttonLabel) => {
    navigateTo(value);
    setActive(buttonLabel);
  };

  const openMenu = () => {
    document.querySelector("body").classList.toggle("menuOpen");
  };

  return (
    <nav>
        <MenuOutlined onClick={openMenu} />
        <figure onClick={homeBtn} className="nav__logo--wrapper">
          <img src={logo} alt="" />
        </figure>
        <h1>MetroCar</h1>
        <div className="nav__list nav__desktop">
          <NavBtn
            label="button 1"
            translation={translation}
            text={translation.navLink1}
            isActive={active === "button 1"}
            test={test}
          />
          <NavBtn
            label="button 2"
            translation={translation}
            text={translation.navLink2}
            navTo={() => activateBtn("coverage", "button 2")}
            isActive={active === "button 2"}
          />
          <NavBtn
            label="button 3"
            translation={translation}
            text={translation.navLink3}
            navTo={() => activateBtn("fleet", "button 3")}
            isActive={active === "button 3"}
          />
          <NavBtn
            label="button 4"
            translation={translation}
            text={translation.navLink4}
            isActive={active === "button 4"}
            test={test}
          />
          <NavBtn
            label="button 5"
            translation={translation}
            text={translation.navLink5}
            isActive={active === "button 5"}
            test={test}
          />
        </div>
        <figure className="nav__car--desktop">
          <img src={car} alt="" />
        </figure>
    </nav>
  );
};

export default Nav;
