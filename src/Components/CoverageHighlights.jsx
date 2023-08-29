import React from "react";
import "../CSS/CoverageHighlights.css";
import CoverageMap from "./CoverageMap";

const CoverageHighlights = () => {
  return (
    <section id="coverageHighlights">
      <div className="container coverageHighlights__container">
        <div className="row top__row coverageHighlights__row">
            <h1>Our Cities with coverage</h1>
          <CoverageMap
            src={
              "https://www.google.com/maps/d/embed?mid=1qSZ1w0Bpn54J2kf9gh3LD6Vy8rrvjvs&ehbc=2E312F&noprof=1"
            }
            title={"colombiaMap"}
          />
        </div>
      </div>
    </section>
  );
};

export default CoverageHighlights;
