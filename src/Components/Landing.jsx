import { Button } from "@mui/material";
import React from "react";
import icon from "../Assets/1.png";
import '../CSS/Landing.css'

const Landing = ({ content }) => {
  return (
    <section id="Landing">
      <div className="container landing__container">
        <div className="row landing__row">
          {/* <header>
            <h1>MetroCar Regency</h1>
          </header> */}
          <div className="landing__text--container">
            <Button className="landing__btn">
              {content.landingBtn}
              <figure>
                <img src={icon} alt="" className="landing__btn--icon" />
              </figure>
            </Button>
            <div className="landing__text">
              <h2>{content.landingTitle}</h2>
              <p>{content.landingText}</p>
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
