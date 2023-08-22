import React from "react";
import "../CSS/Footer.css";
import {
  Instagram,
  LocationOnOutlined,
  Mail,
  PhoneOutlined,
} from "@mui/icons-material";

const Footer = ({ translation }) => {
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__text--container">
          <div className="footer__info--container">
            <h1 className="footer__title">{translation.aboutTextTitle1}</h1>
            <p>{translation.footerText}</p>
          </div>
          <div className="footer__contact--container">
            <h1 className="footer__title">Informacion de Contacto</h1>
            <ul className="footer__contact--list">
              <li className="footer__contact--item">
                <Instagram />
                <p>@MetroCar</p>
              </li>
              <li className="footer__contact--item">
                <Mail />
                <p>probando@gmail.com</p>
              </li>
              <li className="footer__contact--item">
                <LocationOnOutlined />
                <p>Calle 79 # 27A - 21 Bogota, Colombia</p>
              </li>
              <li className="footer__contact--item">
                <PhoneOutlined />
                <p>+57 (302) 600 5730</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="terms">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Terminos y Condiciones
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Politica de Privacidad
          </a>
        </div>
        <p className="footer__credits">
          {translation.footerCredits}
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="title"
          >
            A & D
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
