import React, { useEffect, useState } from "react";
import "../CSS/Services.css";
import vert1 from "../Assets/vertPic.jpg";
import vert2 from "../Assets/vert2.jpg";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import VerticalImg from "../Components/VerticalImg";

const Services = ({ translation }) => {


  const navigateTo = useNavigate();

  const navTo = (nav) => {
    navigateTo(nav);
  };

  return (
    <section id="Services">
      <div className="container top__container services__container">
        <div className="row top__row services__row">
          <div className="services__body">
            <div className="services__body--text">
              <h1 className="title">{translation.servicesTitle1}</h1>
              <div className="services__text--paragraph">
                <p className="services__text">{translation.servicesText1}</p>
                <p className="services__text">{translation.servicesText2}</p>
                <p className="services__text">{translation.servicesText3}</p>
              </div>
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
              <VerticalImg className='servicesBody' src={vert1}/>
              <VerticalImg className='servicesBody' src={vert2}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
