import { Button } from "@mui/material";
import React from "react";
import icon from "../Assets/1.png";

const Landing = () => {
  return (
    <section id="Landing">
      <div className="container landing__container">
        <div className="row landing__row">
          {/* <header>
            <h1>MetroCar Regency</h1>
          </header> */}
          <div className="landing__text--container">
            <Button className="landing__btn">
              Reserva ya tu <br /> transporte
              <figure>
                <img src={icon} alt="" className="landing__btn--icon" />
              </figure>
            </Button>
            <div className="landing__text">
              <h2>Vehiculos VIP</h2>
              <p>
                Vehículos con conductor para traslados, por horas o días, y
                toures en Colombia y otros 29 países; Disponibles las 24 horas
                del día en ciudades como Bogotá, Cartagena, Medellín y sus
                alrededores. También llamados Remises, la experiencia que
                ofrecemos se ejecuta con vehículos de lujo último modelo y
                conductores bilingües, profesionales, y certificados por 'PAX'
                el Official Training Partner de la National Limousine
                Association.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
