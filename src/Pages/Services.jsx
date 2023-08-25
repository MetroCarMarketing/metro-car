import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import vert1 from "../Assets/vertPic.jpg";
import vert2 from "../Assets/vert2.jpg";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

const Services = ({ translation, setActive }) => {
  
  const [img, setImg] = useState();
  const [img2, setImg2] = useState();

  const navigateTo = useNavigate();

  const navTo = (nav, value) => {
    navigateTo(nav);
    setActive(value);
  };

  useEffect(() => {
    const image = new Image();
    image.src = vert1;
    const image2 = new Image();
    image2.src = vert2;

    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 600);
    };
    image2.onload = () => {
      setTimeout(() => {
        setImg2(image2);
      }, 600);
    };
  });

  return (
    <section id="Services">
      <div className="container top__container services__container">
        <div className="row top__row services__row">
          <div className="services__body">
            <div className="services__body--text">
              <h1 className="title">{translation.servicesTitle1}</h1>
              <p className="services__text">{translation.servicesText1}</p>
              <p className="services__text">{translation.servicesText2}</p>
              <p className="services__text">{translation.servicesText3}</p>
              <h1 className="title">{translation.servicesTitle2}</h1>
              <ul className="services__type--list">
                <div>
                  <ChevronRight />
                  {translation.servicesList1}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList2}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList3}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList4}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList5}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList6}
                </div>
              </ul>
              <ul className="services__body--list">
                <div onClick={() => navTo("/fleet", "button 3")}>
                  <h2>{translation.navLink3}</h2>
                  <div className="list__item--deco"></div>
                </div>
                <div onClick={() => navTo("/coverage", "button 2")}>
                  <h2>{translation.navLink2}</h2>
                  <div className="list__item--deco"></div>
                </div>
                <div onClick={() => navTo("/contact", "button 4")}>
                  <h2>{translation.navLink4}</h2>
                  <div className="list__item--deco"></div>
                </div>
              </ul>
              <h1 className="title">{translation.servicesTitle3}</h1>
              <p className="services__text">{translation.servicesText4}</p>
              <ul className="services__type--list">
                <div>
                  <ChevronRight />
                  {translation.servicesList7}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList8}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList9}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList10}
                </div>
                <div>
                  <ChevronRight />
                  {translation.servicesList11}
                </div>
              </ul>
            </div>
            <div className="services__body--imgs">
              {img ? (
                <figure className="services__body--imgWrapper">
                  <img src={img.src} alt="" />
                </figure>
              ) : (
                <>
                  <div className="services__skeleton skeleton"></div>
                </>
              )}
              {img2 ? (
                <figure className="services__body--imgWrapper">
                  <img src={img2.src} alt="" />
                </figure>
              ) : (
                <>
                  <div className="services__skeleton skeleton"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
