import React from "react";
// import logo from "../Assets/2.png";
import logo from "../Assets/Metrocar-logo-ilustracion.jpg";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
// import car from "../Assets/metrocar regency.jpg";
import { MenuOutlined } from "@mui/icons-material";
import NavBtn from "./NavBtn";
import TranslateBtns from "./TranslateBtns";

const Nav = ({ translation, setEnglish, setSpanish }) => {
  const navigateTo = useNavigate();

  const homeBtn = () => {
    navigateTo("/");
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
      <h1>
        <span className="upper">M</span>etro<span className="upper">C</span>ar
      </h1>
      <div className="nav__list nav__desktop">
        <NavBtn text={translation.navLink1} link="/services" />
        <NavBtn text={translation.navLink3} link="/fleet" />
        <NavBtn text={translation.navLink2} link="/coverage" />
        <NavBtn text={translation.navLink4} link="/contact" />
        <NavBtn text={translation.navLink5} link="/about" />
      </div>
      {/* <figure className="nav__car--desktop">
        <img src={car} alt="" />
      </figure> */}
      <TranslateBtns setEnglish={setEnglish} setSpanish={setSpanish} />
    </nav>
  );
};

export default Nav;
