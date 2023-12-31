import React from "react";
import "../CSS/CarHighlights.css";
import HighlightMap from "./HighlightMap";

const CarHighlights = ({ translation, cars, language}) => {
  return (
    <section id="carHighlights">
      <div className="container carHighlights__container">
        <div className="row carHighlights__row">
          <h1>{translation.landingCars}</h1>
          <div className="carHighlights__body">
            {cars.filter((car) => car.type === 'Luxury Sedan').map((car) => (
              <HighlightMap key={car.id} car={car} translation={translation} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarHighlights;
