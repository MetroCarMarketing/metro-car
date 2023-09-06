import React from "react";
import FaresMap from "../Components/FaresMap";
import "../CSS/Fares.css";

const Fares = ({ translation, cars, language }) => {
  return (
    <section id="fares">
      <div className="container top__container fares__container">
        <div className="row top__row fares__row">
          <h1 className="title">Estas son nuestras tarifas</h1>
          <div className="fares__organizer">
            <p>{translation.faresPrice}</p>
            <div className="fares__organizer--top">
              <div className="fares__organizer--start"></div>
              <div className="fares__organizer--name">
                <h3> {translation.faresName}</h3>
              </div>
              <div className="fares__organizer--hour">
                <h3>{translation.faresHour}</h3>
              </div>
              <div className="fares__organizer--day">
                <h3>{translation.faresDay}</h3>
              </div>
              <div className="fares__organizer--trip">
                <h3>{translation.faresTrip}</h3>
              </div>
            </div>
            {cars.map((car) => (
              <FaresMap key={car.id} car={car} translation={translation} language={language} />
              ))}
          </div>
              <p>{translation.faresHourText}</p>
              <p>{translation.faresDayText}</p>
        </div>
      </div>
    </section>
  );
};

export default Fares;
