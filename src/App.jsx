import React from "react";
import "./CSS/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import car from "./Assets/metrocar regency.jpg";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <figure className="car__background">
        <img src={car} alt=""  />
      </figure>
      </Router>
    </div>
  );
}

export default App;
