import React from "react";
import CoverageMap from "../Components/CoverageMap";
import "../CSS/Coverage.css";

const Coverage = ({ translation, cars }) => {
  return (
    <div className="container top__container coverage__container">
      <div className="row top__row coverage__row">
        <div className="coverage__organizer">
          <h1 className="title">{translation.coverageTitle} :</h1>
          <CoverageMap
            src={
              "https://www.google.com/maps/d/embed?mid=1hm7T_VAdb7jEcKkEu_ZOKDdD_nrB9j4&ehbc=2E312F"
            }
            title={"bogotaMap"}
          />
          <p>{translation.coverageText}</p>
          <CoverageMap
            src={
              "https://www.google.com/maps/d/embed?mid=1qSZ1w0Bpn54J2kf9gh3LD6Vy8rrvjvs&ehbc=2E312F&noprof=1"
            }
            title={"colombiaMap"}
          />
        </div>
      </div>
    </div>
  );
};

export default Coverage;
