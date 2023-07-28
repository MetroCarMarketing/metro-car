import { Button } from "@mui/material";
import React from "react";
import icon from "../Assets/1.png";
import '../CSS/Landing.css'

const Landing = ({ translation }) => {
  return (
    <section id="Landing">
      <div className="container landing__container top__container">
        <div className="row landing__row">
          {/* <header>
            <h1>MetroCar Regency</h1>
          </header> */}
          <div className="landing__text--container">
            <Button className="landing__btn">
              {translation.landingBtn}
              <figure>
                <img src={icon} alt="" className="landing__btn--icon" />
              </figure>
            </Button>
            <div className="landing__text">
              <h2>{translation.landingTitle}</h2>
              <p>{translation.landingText}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll__container">
        <div className="scroll__icon">
          <div className="scroll__dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
