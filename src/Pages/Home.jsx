import React from "react";
import Landing from "../Components/Landing";
import CarHighlights from "../Components/CarHighlights";
import CoverageHighlights from "../Components/CoverageHighlights";

const Home = ({ translation, cars, language }) => {
  return (
    <>
      <Landing translation={translation} />
      <CarHighlights translation={translation} cars={cars} language={language}/>
      <CoverageHighlights translation={translation}/>
    </>
  );
};

export default Home;
