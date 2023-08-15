import React from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import car from "../Assets/metrocar regency.jpg";
import { MenuOutlined } from "@mui/icons-material";
import NavBtn from "./NavBtn";
import TranslateBtns from "./TranslateBtns";

const Nav = ({ translation, setEnglish, setSpanish, active, setActive }) => {

  const navigateTo = useNavigate();

  const homeBtn = () => {
    navigateTo("/");
    setActive(null);
  };

  const activateBtn = (value) => {
    navigateTo(value);
    setActive(value);
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
            translation={translation}
            text={translation.navLink1}
            navTo={() => activateBtn("/services")}
            isActive={active === "/services"}
          />
          <NavBtn
            translation={translation}
            text={translation.navLink2}
            navTo={() => activateBtn("/coverage")}
            isActive={active === "/coverage"}
          />
          <NavBtn
            translation={translation}
            text={translation.navLink3}
            navTo={() => activateBtn("/fleet")}
            isActive={active === "/fleet"}
            />
          <NavBtn
            translation={translation}
            text={translation.navLink4}
            navTo={() => activateBtn("/contact")}
            isActive={active === "/contact"}
            />
          <NavBtn
            translation={translation}
            text={translation.navLink5}
            navTo={() => activateBtn("/about")}
            isActive={active === "/about"}
          />
        </div>
        <figure className="nav__car--desktop">
          <img src={car} alt="" />
        </figure>
        <TranslateBtns setEnglish={setEnglish} setSpanish={setSpanish} />
    </nav>
  );
};

export default Nav;
