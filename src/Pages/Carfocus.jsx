import React from "react";
import { useParams } from "react-router-dom";
import '../CSS/Carfocus.css'

const Carfocus = ({ cars, translation }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === +id);

  return (
    <div className="container top__container carfocus__container">
      <div className="row carfocus__row">
        <div className="carfocus__imgs--wrapper">
          <figure className="carfocus__mainImage"><img src={car.imageMain} alt="" /></figure>
          <div className="carfocus__slideshow">
            <figure className="carfocus__slide">
                <img src={car.image2} alt="" className="carfocus__img" />
            </figure>
            <figure className="carfocus__slide">
                <img src={car.image3} alt="" className="carfocus__img" />
            </figure>
            <figure className="carfocus__slide">
                <img src={car.image3} alt="" className="carfocus__img" />
            </figure>
            <figure className="carfocus__slide">
                <img src={car.image3} alt="" className="carfocus__img" />
            </figure>
            <figure className="carfocus__slide">
                <img src={car.image3} alt="" className="carfocus__img" />
            </figure>
          </div>
        </div>
          <div className="carfocus__text--wrapper">
            <h1>{car.name}</h1>
            <h2 className="number">$ {car.price} USD/h</h2>
            <h3><span className="number">{car.model}</span> {car.brand} {car.type}</h3>
            <p>{car.description}</p>
          </div>
      </div>
    </div>
  );
};

export default Carfocus;
