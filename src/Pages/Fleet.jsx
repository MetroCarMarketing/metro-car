import React from "react";
import Carrousel from "../Components/Carrousel";
import slides from "../Slides";
import "../CSS/Carrousel.css";

const Fleet = ({ content }) => {
  return (
    <div className="container fleet__container top__container">
      <div className="row fleet__row">
        <Carrousel slides={slides} />
      </div>
    </div>
  );
};

export default Fleet;
