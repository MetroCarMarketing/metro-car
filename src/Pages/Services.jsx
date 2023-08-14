import React from "react";
import "../CSS/Services.css";
import img from "../Assets/vertPic.jpg";
import { useNavigate } from "react-router-dom";

const Services = ({ translation, setActive }) => {

    const navigateTo = useNavigate()

    const navTo = ( value, nav ) => {
        navigateTo(value)
        setActive(nav)
    }


  return (
    <section id="Services">
      <div className="container top__container services__container">
        <div className="row top__row services__row">
          <div className="services__organizer">
            <h1 className="title">{translation.servicesTitle}</h1>
            <div className="services__body">
              <div className="services__body--text">
                <p className="services__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, quos iure. Perferendis, numquam cum velit atque
                  similique odio. Quam architecto ratione error. Numquam
                  voluptas quam at laudantium odio deserunt omnis dolor unde
                  ipsum porro quasi dolorem, officiis esse minima nobis nulla
                  non! Nihil nobis animi, eveniet placeat mollitia, rem sequi
                  quas repellendus harum sunt pariatur obcaecati tenetur
                  cupiditate quia. Corporis.
                </p>
                <ul className="services__body--list">
                    <div onClick={() => navTo('/coverage', 'button 2')}>
                        <h2>{translation.navLink2}</h2>
                        <div className="list__item--deco"></div>
                    </div>
                    <div onClick={() => navTo('/fleet', 'button 3')}>
                        <h2>{translation.navLink3}</h2>
                        <div className="list__item--deco"></div>
                    </div>
                    <div onClick={() => navTo('/contact', 'button 4')}>
                        <h2>{translation.navLink4}</h2>
                        <div className="list__item--deco"></div>
                    </div>
                </ul>
              </div>
              <figure className="services__body--imgWrapper">
                <img src={img} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
