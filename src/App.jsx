import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import logo from './Assets/Metrocar-logo-ilustracion.jpg'
import Translation from "./Translation/Languages.json";
import Fleet from "./Pages/Fleet";
import Coverage from "./Pages/Coverage";
import { cars } from "./Cars";
import Carfocus from "./Pages/Carfocus";
import Burger from "./Components/Burger";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import Fares from "./Pages/Fares";
import ScrollToTop from "./Components/ScrollToTop";
import "./CSS/Queries.css";

function App() {

  const [language, setLanguage] = useState("spanish");
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    if (language === "english") {
      setTranslation(Translation.english);
    } else if (language === "spanish") {
      setTranslation(Translation.spanish);
    }
  }, [language]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Nav
          translation={translation}
          setEnglish={() => setLanguage("english")}
          setSpanish={() => setLanguage("spanish")}
        />
        <Burger translation={translation} />
        <Routes>
          <Route path="/" element={<Home translation={translation} cars={cars} language={language}/>} />
          <Route
            path="/services"
            element={<Services translation={translation} />}
          />
          <Route
            path="/fleet"
            element={
              <Fleet
                translation={translation}
                language={language}
                cars={cars}
              />
            }
          />
          <Route
            path="/fleet/:id"
            element={<Carfocus language={language} cars={cars} />}
          />
          <Route
            path="/coverage"
            element={<Coverage translation={translation} cars={cars} />}
          />
          <Route
            path="/contact"
            element={<Contact translation={translation} language={language} />}
          />
          <Route path="/about" element={<About translation={translation} />} />
          <Route
            path="/fares"
            element={
              <Fares
                translation={translation}
                cars={cars}
                language={language}
              />
            }
          />
        </Routes>
        <figure className="car__background--desktop">
          <img src={logo} alt="" />
        </figure>
        <Footer translation={translation} language={language}/>
        {/* <Watermark translation={translation} /> */}
      </Router>
    </div>
  );
}

export default App;
