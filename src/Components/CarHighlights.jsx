import React, { useEffect, useState } from "react";
import "../CSS/CarHighlights.css";
import { Highlight } from "@mui/icons-material";
import HighlightMap from "./HighlightMap";

const CarHighlights = ({ translation, cars }) => {



  return (
    <section id="carHighlights">
      <div className="container carHighlights__container">
        <div className="row carHighlights__container">
          <h1>Our Best Sellers</h1>
          <div className="carHighlights__body">
            {cars.filter((car) => car.type === 'Armored SUV').map((car) => (
              <HighlightMap key={car.id} car={car}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarHighlights;
