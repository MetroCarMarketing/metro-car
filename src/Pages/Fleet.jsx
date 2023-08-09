import React, { useState } from "react";
import Slideshow from "../Components/Slideshow";
import "../CSS/Slideshow.css";
import CarThumbnailMap from "../Components/CarThumbnailMap";

const Fleet = ({ language, translation, cars: initialCars }) => {

  const [products, setProducts] = useState(initialCars);


  const suv = initialCars.filter((item) => item.type === 'SUV')
  const car = initialCars.filter((item) => item.type === 'Luxury Car')

  const filterCars = ( filter ) => {
    if (filter === 'SUV'){
      setProducts(suv)
    }
    if (filter == 'CAR'){
      setProducts(car)
    }
    if(filter === "ALL"){
      setProducts(initialCars)
    }
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
              <select id="filter" onChange={(e) => filterCars(e.target.value)} defaultValue='ALL'>
                <option value="ALL">All</option>
                <option value="SUV">Suv</option>
                <option value="CAR">Car</option>
              </select>
            ) : (
              <select id="filter" onChange={(e) => filterCars(e.target.value)} defaultValue='ALL'>
                <option value="ALL">Todos</option>
                <option value="SUV">Camioneta</option>
                <option value="CAR">Carro</option>
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
