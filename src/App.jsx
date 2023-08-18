import React, { useEffect, useState } from "react";
import "./CSS/App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
// import car from "./Assets/metrocar regency.jpg";
// import car from "./Assets/Metrocar-logo-completo.jpg";
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
import "./CSS/Queries.css";

function App() {

  
  const [currentPage, setCurrentPage] = useState(null);
  const [active, setActive] = useState(null);
  
  const [language, setLanguage] = useState("spanish");
  const [translation, setTranslation] = useState({});
  
  useEffect(() => {
    if (language === "english") {
      setTranslation(Translation.english);
    } else if (language === "spanish") {
      setTranslation(Translation.spanish);
    }
  }, [language]);
  
  useEffect(() => {
    const activeNav = window.location.pathname;
    setActive(activeNav);
  }, [active]);

  // eslint-disable-next-line
  useEffect(() => {
    const activePage = window.location.pathname;
    setCurrentPage(activePage)
  })

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [currentPage])

  return (
    <div className="App">
      <Router>
        <Nav
          translation={translation}
          setEnglish={() => setLanguage("english")}
          setSpanish={() => setLanguage("spanish")}
          active={active}
          setActive={setActive}
        />
        <Burger translation={translation} />
        <Routes>
          <Route
            path="/"
            element={<Home translation={translation} setActive={setActive} />}
          />
          <Route
            path="/services"
            element={
              <Services translation={translation} setActive={setActive} />
            }
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
            element={<Contact translation={translation} />}
          />
          <Route path="/about" element={<About translation={translation} />} />
        </Routes>
        {/* <figure className="car__background--desktop">
          <img src={car} alt="" />
        </figure> */}
        {/* <figure className="car__background--phone">
          <img
            src="https://lh3.googleusercontent.com/-525huazOQu4/YtbKYzB9fNI/AAAAAAAASPI/CKI_QvFEHCAjvd5lGSCgj0iTtgM1lIyxACNcBGAsYHQ/s1600/1658243679408851-0.png"
            alt=""
          />
        </figure> */}
        <Footer translation={translation} />
      </Router>
    </div>
  );
}

export default App;
