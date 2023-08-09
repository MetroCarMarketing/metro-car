import React from "react";
import Slideshow from "../Components/Slideshow";
import "../CSS/Slideshow.css";
import CarThumbnailMap from "../Components/CarThumbnailMap";

const Fleet = ({ translation, cars }) => {
  return (
    <section id="fleet">
      <div className="container fleet__container top__container">
        <div className="row top__row fleet__row">
          <section id="slideshow">
            <Slideshow />
          </section>
          <section id="thumbnail__container">
            <div className="thumbnail__map">
              {cars.map((item) => (
                <CarThumbnailMap
                  translation={translation}
                  cars={cars}
                  item={item}
                  key={item.id}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
