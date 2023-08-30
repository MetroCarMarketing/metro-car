import React from "react";
import Landing from "../Components/Landing";
import CarHighlights from "../Components/CarHighlights";
import CoverageHighlights from "../Components/CoverageHighlights";

const Home = ({ translation, cars }) => {
  return (
    <>
      <Landing translation={translation} />
      <CarHighlights translation={translation} cars={cars} />
      <CoverageHighlights translation={translation}/>
    </>
  );
};

export default Home;
