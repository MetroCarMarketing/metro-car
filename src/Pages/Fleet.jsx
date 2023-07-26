import React from "react";
import Carrousel from "../Components/Carrousel";
import slides from "../Slides";
import '../CSS/Carrousel.css'


const Fleet = ({ content }) => {
  return (
    <div className="carrousel-container">
      <Carrousel slides={slides} />
    </div>
  );
};

export default Fleet;
