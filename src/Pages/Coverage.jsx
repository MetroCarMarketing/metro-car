import React from "react";
import Carmap from "../Components/Carmap";

const Coverage = ({ translation, cars }) => {
  return (
    <div className="container top__container">
      <div className="row">
        <div className="coverage">
          {cars.map((item) => (
            <Carmap translation={translation} cars={cars} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coverage;
