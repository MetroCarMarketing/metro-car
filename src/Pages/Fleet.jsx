import React from "react";
import Slideshow from "../Components/Slideshow";
import "../CSS/Slideshow.css";
import CarThumbnailMap from "../Components/CarThumbnailMap";

const Fleet = ({ language, translation, cars }) => {

  const filterCars = () => {
    
  }

  return (
    <section id="fleet">
      <div className="container fleet__container top__container">
        <div className="row top__row fleet__row">
          <section id="slideshow">
            <Slideshow />
          </section>
          <section id="thumbnail__container">
            {language === "english" ? (
              <select id="filter" onChange={(e) => filterCars(e.target.value)}>
                <option value="ALL">All</option>
                <option value="SUV">Suv</option>
                <option value="CAR">Car</option>
              </select>
            ) : (
              <select id="filter" onChange={(e) => }>
                <option value="ALL">Todos</option>
                <option value="SUV">Camioneta</option>
                <option value="CAR">Carro</option>
              </select>
            )}

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
