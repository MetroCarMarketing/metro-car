import React from "react";
import "../CSS/Services.css";

const Services = ({ translation }) => {
  return (
    <section id="Services">
      <div className="container top__container services__container">
        <div className="row top__row services__row">
          <div className="services__organizer">
            <h1 className="title">{translation.servicesTitle}</h1>
            <p className="services__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quos iure. Perferendis, numquam cum velit atque similique odio.
              Quam architecto ratione error. Numquam voluptas quam at laudantium
              odio deserunt omnis dolor unde ipsum porro quasi dolorem, officiis
              esse minima nobis nulla non! Nihil nobis animi, eveniet placeat
              mollitia, rem sequi quas repellendus harum sunt pariatur obcaecati
              tenetur cupiditate quia. Corporis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
