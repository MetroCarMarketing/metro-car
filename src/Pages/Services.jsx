import React from "react";
import "../CSS/Services.css";
import img from "../Assets/vertPic.jpg";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

const Services = ({ translation, setActive }) => {
  const navigateTo = useNavigate();

  const navTo = (value, nav) => {
    navigateTo(value);
    setActive(nav);
  };

  return (
    <section id="Services">
      <div className="container top__container services__container">
        <div className="row top__row services__row">
          <div className="services__body">
            <div className="services__body--text">
              <h1 className="title">{translation.servicesTitle1}</h1>
              <p className="services__text">{translation.servicesText1}</p>
              <ul className="services__body--list">
                <div onClick={() => navTo("/coverage", "button 2")}>
                  <h2>{translation.navLink2}</h2>
                  <div className="list__item--deco"></div>
                </div>
                <div onClick={() => navTo("/fleet", "button 3")}>
                  <h2>{translation.navLink3}</h2>
                  <div className="list__item--deco"></div>
                </div>
                <div onClick={() => navTo("/contact", "button 4")}>
                  <h2>{translation.navLink4}</h2>
                  <div className="list__item--deco"></div>
                </div>
              </ul>
              <p className="services__text">{translation.servicesText1}</p>
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
              </ul>
            </div>
            <figure className="services__body--imgWrapper">
              <img src={img} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
