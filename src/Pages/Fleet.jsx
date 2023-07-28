import React from "react";
import Slideshow from "../Components/Slideshow";
import "../CSS/Slideshow.css";

const Fleet = ({ translation }) => {
  return (
    <div className="container fleet__container top__container">
      <div className="row fleet__row">
        <section id="slideshow">
          <Slideshow />
        </section>
      </div>
    </div>
  );
};

export default Fleet;
