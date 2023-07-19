import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import car from "./Assets/metrocar regency.jpg";
import Translation from "./Translation/Languages.json";
import { Button } from "@mui/material";

function App() {
  const [language, setLanguage] = useState("spanish");
  const [content, setContent] = useState({});

  useEffect(() => {
    if (language === "english") {
      setContent(Translation.english);
    } else if (language === "spanish") {
      setContent(Translation.spanish);
    }
  }, [language]);

  return (
    <div className="App">
      <Router>
        <Nav content={content} />
        {/* <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="spanish">🇪🇸</option>
          <option value="english">🇺🇸</option>
        </select> */}
        <div className="translate__btns">
          <Button onClick={() => setLanguage("spanish")}>
            <figure>🇪🇸</figure>
          </Button>
          <Button onClick={() => setLanguage("english")}>
            <figure>🇺🇸</figure>
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<Home content={content} />} />
        </Routes>
        <figure className="car__background">
          <img src={car} alt="" />
        </figure>
      </Router>
    </div>
  );
}

export default App;
