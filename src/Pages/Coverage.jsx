import React from "react";
import CoverageMap from "../Components/CoverageMap";
import "../CSS/Coverage.css";

const Coverage = ({ translation, cars }) => {
  return (
    <div className="container top__container coverage__container">
      <div className="row top__row coverage__row">
        <div className="coverage__organizer">
          <h1 className="title">{translation.coverageTitle} :</h1>
          <CoverageMap />
          <p>{translation.coverageText}</p>
        </div>
        {/* Segundo Mapa */}
      </div>
    </div>
  );
};

export default Coverage;
