import React from "react";
import "../CSS/Fares.css";
import Price from "./Price";

const FaresMap = ({ car, language }) => {
  return (
    <div className="faresmap__container">
      <figure>
        <img src={car.imageMain} alt="" />
      </figure>
      <div className="faresmap__name">
        {language === "english" ? (
          <span>{car.name}</span>
        ) : (
          <span>{car.nameEsp}</span>
        )}
      </div>
      <div className="faresmap__hour">
        <Price price={car.priceHour} />
      </div>
      <div className="faresmap__day">
        <Price price={car.priceDay} />
      </div>
      <div className="faresmap__trip">
        <Price price={car.priceTrip} />
      </div>
    </div>
  );
};

export default FaresMap;
