import React from "react";
import { useParams } from "react-router-dom";

const Carfocus = ({ cars, translation }) => {

   const { id } = useParams()
   const car = cars.find((car) => car.id === +id)

  return (
    <div className="top__container">
      <div className="row">
        <h1>{car.name}</h1>
      </div>
    </div>
  );
};

export default Carfocus;
