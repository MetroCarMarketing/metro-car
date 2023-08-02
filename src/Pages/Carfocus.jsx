import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Carfocus.css";
import { Button } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";

const Carfocus = ({ cars, language }) => {

  const { id } = useParams();
  const car = cars.find((car) => car.id === +id);

  const navigateto = useNavigate();

  const currentLang = language;



  return (
    <div className="container top__container carfocus__container">
      <div className="row carfocus__row">
        {currentLang === "english" ? (
          <Button
            className="carfocus__backBtn"
            startIcon={<ChevronLeft />}
            onClick={() => navigateto("/coverage")}
          >
            Fleet
          </Button>
        ) : (
          <Button
            className="carfocus__backBtn"
            startIcon={<ChevronLeft />}
            onClick={() => navigateto("/coverage")}
          >
            Flota
          </Button>
        )}
        <div className="carfocus__imgs--wrapper">
          <figure className="carfocus__mainImage">
            <img src={car.imageMain} alt="" />
          </figure>
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
          <h3>
            <span className="number">{car.model}</span> {car.brand} {car.type}
          </h3>
          {currentLang === "english" ? (
            <p>{car.description}</p>
          ) : (
            <p>{car.descriptionEsp}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carfocus;
