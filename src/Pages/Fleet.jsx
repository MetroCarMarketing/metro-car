import React, { useState } from "react";
import Slideshow from "../Components/Slideshow";
import "../CSS/Slideshow.css";
import CarThumbnailMap from "../Components/CarThumbnailMap";

const Fleet = ({ language, translation, cars: initialCars }) => {
  const [products, setProducts] = useState(initialCars);

  const suv = initialCars.filter((item) => item.type === "SUV");
  const suvA = initialCars.filter((item) => item.type === "Armored SUV");
  const sedanMid = initialCars.filter((item) => item.type === "Mid Size Sedan");
  const sedanHigh = initialCars.filter((item) => item.type === "Luxury Sedan");
  const mini = initialCars.filter((item) => item.type === "Minivan");
  const vans = initialCars.filter((item) => item.type === "Van");
  const coach = initialCars.filter((item) => item.type === "Coach");

  const filterCars = (filter) => {
    if (filter === "SUV") {
      setProducts(suv);
    }
    if (filter === "SUVA") {
      setProducts(suvA);
    }
    if (filter == "CAR") {
      setProducts(sedanHigh);
    }
    if (filter == "MIDS") {
      setProducts(sedanMid);
    }
    if (filter == "MINI") {
      setProducts(mini);
    }
    if (filter == "VAN") {
      setProducts(vans);
    }
    if (filter == "COACH") {
      setProducts(coach);
    }
    if (filter === "ALL") {
      setProducts(initialCars);
    }
  };

  return (
    <section id="fleet">
      <div className="container fleet__container top__container">
        <div className="row top__row fleet__row">
          <section id="slideshow">
            <Slideshow />
          </section>
          <section id="thumbnail__container">
            {language === "english" ? (
              <select
                id="filter"
                onChange={(e) => filterCars(e.target.value)}
                defaultValue="ALL"
              >
                <option value="ALL">Vehicles</option>
                <option value="MIDS">Mid Tier Sedan</option>
                <option value="CAR">High Tier Sedan</option>
                <option value="SUV">SUV</option>
                <option value="SUVA">Armored SUV</option>
                <option value="MINI">Minivans</option>
                <option value="VAN">Vans</option>
                <option value="COACH">Coach</option>
              </select>
            ) : (
              <select
                id="filter"
                onChange={(e) => filterCars(e.target.value)}
                defaultValue="ALL"
              >
                <option value="ALL">Vehiculos</option>
                <option value="MIDS">Sedan Gama Media</option>
                <option value="CAR">Sedan Gama Alta</option>
                <option value="SUV">Camioneta Convencional</option>
                <option value="SUVA">Camioneta Blindada N.3</option>
                <option value="MINI">Minivans</option>
                <option value="VAN">Vans</option>
                <option value="COACH">Buses</option>
              </select>
            )}

            <div className="thumbnail__map">
              {products.map((item) => (
                <CarThumbnailMap
                  translation={translation}
                  cars={products}
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
