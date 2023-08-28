import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Carfocus.css";
import { Button } from "@mui/material";
import { Check, ChevronLeft } from "@mui/icons-material";

const Carfocus = ({ cars, language }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === +id);

  const navigateto = useNavigate();

  const currentLang = language;

  const [displayImg, setDisplayImg] = useState(car.imageMain);

  const [mainImg, setMainImg] = useState();
  const [secondImg, setSecondImg] = useState();
  const [thirdImg, setThirdImg] = useState();

  useEffect(() => {
    const display = new Image();
    display.src = car.imageMain;

    const main = new Image();
    main.src = car.imageMain;

    const second = new Image();
    second.src = car.image2;

    const third = new Image();
    third.src = car.image3;

    main.onload = () => {
      setTimeout(() => {
        setMainImg(main);
      }, 600);
    };

    second.onload = () => {
      setTimeout(() => {
        setSecondImg(second);
      }, 600);
    };

    third.onload = () => {
      setTimeout(() => {
        setThirdImg(third);
      }, 600);
    };
  });

  return (
    <div className="container top__container carfocus__container">
      <div className="row top__row carfocus__row">
        {currentLang === "english" ? (
          <Button
            className="carfocus__backBtn"
            startIcon={<ChevronLeft />}
            onClick={() => navigateto("/fleet")}
          >
            <p>Fleet</p>
          </Button>
        ) : (
          <Button
            className="carfocus__backBtn"
            startIcon={<ChevronLeft />}
            onClick={() => navigateto("/fleet")}
          >
            <p>Flota</p>
          </Button>
        )}
        <div className="carfocus__imgs--wrapper">
          <figure className="carfocus__mainImage">
            <img src={displayImg} alt="" />
          </figure>
          <div className="carfocus__slideshow">
            <figure className="carfocus__slide">
              {mainImg ? (
                <img
                  src={mainImg.src}
                  onClick={() => setDisplayImg(mainImg.src)}
                  alt=""
                  className="carfocus__img"
                />
              ) : (
                <>
                  <div className="carfocus__slide--skeleton skeleton"></div>
                </>
              )}
            </figure>
            <figure className="carfocus__slide">
              {secondImg ? (
                <img
                  src={secondImg.src}
                  onClick={() => setDisplayImg(secondImg.src)}
                  alt=""
                  className="carfocus__img"
                />
              ) : (
                <>
                  <div className="carfocus__slide--skeleton skeleton"></div>
                </>
              )}
            </figure>
            <figure className="carfocus__slide">
              {thirdImg ? (
                <img
                  src={thirdImg.src}
                  onClick={() => setDisplayImg(thirdImg.src)}
                  alt=""
                  className="carfocus__img"
                />
              ) : (
                <>
                  <div className="carfocus__slide--skeleton skeleton"></div>
                </>
              )}
            </figure>
            <figure className="carfocus__slide">
              <img
                src={car.image4}
                onClick={() => setDisplayImg(car.image4)}
                alt=""
                className="carfocus__img"
              />
            </figure>
            <figure className="carfocus__slide">
              <img
                src={car.image5}
                onClick={() => setDisplayImg(car.image5)}
                alt=""
                className="carfocus__img"
              />
            </figure>
            <figure className="carfocus__slide">
              <img
                src={car.image6}
                onClick={() => setDisplayImg(car.image6)}
                alt=""
                className="carfocus__img"
              />
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
          {currentLang === "english" ? (
            <ul className="ammenities__list">
              <li>
                <p>Passengers:</p> <span className="number">{car.pax}</span>
              </li>
              <li>
                <p>Bags:</p>
                <span className="number">{car.bags}</span>
              </li>
              <li>
                <p>Water</p>
                <Check />
              </li>
              <li>
                <p>Mints</p>
                <Check />
              </li>
              <li>
                <p>Hygiene Products</p>
                <Check />
              </li>
            </ul>
          ) : (
            <ul className="ammenities__list">
              <li>
                <p>Pasajeros:</p> <span className="number">{car.pax}</span>
              </li>
              <li>
                <p>Maletas:</p>
                <span className="number">{car.bags}</span>
              </li>
              <li>
                <p>Agua</p>
                <Check />
              </li>
              <li>
                <p>Mentas</p>
                <Check />
              </li>
              <li>
                <p>Articulos de aseo</p>
                <Check />
              </li>
            </ul>
          )}
          {currentLang === "english" ? (
            <div className="carfocus__btn">
              <Button
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/573026005730?text=Hola%20buenas%20tardes%2C%20estoy%20interesado%20en%20adquirir%20informacion%20sobre%20su%20servicio%20de%20transporte%20quiero%20mas%20informacion%20sobre%20${
                  car.type === "SUV" ? "la" : "el"
                }%20${car.typeEsp}%20${car.name}%20${
                  car.model
                }.%20en%20ingles%20si%20es%20posible`}
              >
                Book this Ride!
              </Button>
            </div>
          ) : (
            <div className="carfocus__btn">
              <Button
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/573026005730?text=Hola%20buenas%20tardes%2C%20estoy%20interesado%20en%20adquirir%20informacion%20sobre%20su%20servicio%20de%20transporte%20quiero%20mas%20informacion%20sobre%20${
                  car.type === "SUV" ? "la" : "el"
                }%20${car.typeEsp}%20${car.name}%20${car.model}`}
              >
                Reserva este vehiculo!
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carfocus;
