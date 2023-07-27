import React from "react";
// import slides from "../Slides";
// import "../CSS/Carrousel.css";
import Slideshow from "../Components/Slideshow";
import '../CSS/Slideshow.css'


const Fleet = ({ content }) => {
  return (
    <div className="container fleet__container top__container">
      <div className="row fleet__row">
        <Slideshow />
      </div>
    </div>
  );
};

export default Fleet;
