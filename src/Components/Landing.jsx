import { Button } from "@mui/material";
import React from "react";
// import icon from "../Assets/1.png";
import "../CSS/Landing.css";
import { useNavigate } from "react-router-dom";
import VerticalImg from "./VerticalImg";

const Landing = ({ translation, setActive }) => {

  const navigateTo = useNavigate();

  const navTo = (value, buttonLabel) => {
    navigateTo(value);
    setActive(buttonLabel);
  };

  return (
    <section id="Landing">
      <div className="container landing__container top__container">
        <header><h1 className="landing__name"><span className="upper">M</span>etro<span className="upper">C</span>ar</h1></header>
        <div className="row top__row landing__row">
          <VerticalImg />
          <div className="landing__text--container">
            <Button
              onClick={() => navTo("/fleet", "button 3")}
              className="landing__btn"
            >
              {translation.landingBtn}
            </Button>
            <div className="landing__text">
              {/* <h2>{translation.landingTitle}</h2> */}
              <p>{translation.landingText}</p>
            </div>
          </div>
          <div className="scroll__container">
            <div className="scroll__icon">
              <div className="scroll__dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
