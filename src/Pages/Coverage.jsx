import React from "react";
import CarThumbnailMap from "../Components/CarThumbnailMap";
import CoverageMap from "../Components/CoverageMap";

const Coverage = ({ translation, cars }) => {
  return (
    <div className="container top__container">
      <div className="row">
        <CoverageMap/>
      </div>
    </div>
  );
};

export default Coverage;
