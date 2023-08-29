import React from "react";
import Landing from "../Components/Landing";
import CarHighlights from "../Components/CarHighlights";

const Home = ({ translation, cars }) => {
  return (
    <>
      <Landing translation={translation} />
      <CarHighlights translation={translation} cars={cars} />
    </>
  );
};

export default Home;
