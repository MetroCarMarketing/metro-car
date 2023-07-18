import { Button } from "@mui/material";
import React from "react";
import icon from "../Assets/1.png";

const Landing = () => {
  return (
    <section id="Landing">
      <div className="container landing__container">
        <div className="row landing__row">
          <header>
            <h1>MetroCar Regency</h1>
          </header>
          <div className="landing__text--container">
            <Button className="landing__btn">
              Reserva ya tu <br /> transporte
              <figure>
                <img src={icon} alt="" className="landing__btn--icon" />
              </figure>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
