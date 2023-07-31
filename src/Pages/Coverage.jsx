import React from "react";
import CarThumbnailMap from "../Components/CarThumbnailMap";

const Coverage = ({ translation, cars }) => {
  return (
    <div className="container top__container">
      <div className="row">
        <div className="coverage">
          <div className="thumbnail__map">
            {cars.map((item) => (
              <CarThumbnailMap
                translation={translation}
                cars={cars}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
