import React from "react";
import Landing from "../Components/Landing";
import CarHighlights from "../Components/CarHighlights";

const Home = ({ translation }) => {
  return (
    <>
      <Landing translation={translation} />
      <CarHighlights translation={translation} />
    </>
  );
};

export default Home;
