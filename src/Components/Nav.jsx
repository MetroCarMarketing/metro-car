import React, { useEffect, useState } from "react";
import logo from "../Assets/2.png";
import { useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import { Button } from "@mui/material";
import Translation from '../Translation/Languages.json'

const Nav = () => {

  const navigateTo = useNavigate();
  const [language, setLanguage] = useState("english");
  const [content, setContent] = useState({});

  useEffect(() => {
    if(language === 'english'){
      setContent(Translation.english)
    }
    else if(language === 'spanish'){
      setContent(Translation.spanish)
    }
  }, [language])

  return (
    <nav>
      <figure onClick={() => navigateTo("/")} className="nav__logo--wrapper">
        <img src={logo} alt="" />
      </figure>
      <h1>{content.title}</h1>
      {/* <h1>Metro-Car <br /> Regency</h1> */}
      <div className="nav__list">
        <Button onClick={() => navigateTo("/servicios")}>Servicios</Button>

        <Button onClick={() => navigateTo("/cobertura")}>Cobertura</Button>

        <Button onClick={() => navigateTo("/flota")}>Flota</Button>

        <Button onClick={() => navigateTo("/contactenos")}>Contactenos</Button>

        <Button onClick={() => navigateTo("/nosotros")}>Nosotros</Button>
      </div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option>english</option>
        <option>spanish</option>
      </select>
    </nav>
  );
};

export default Nav;
