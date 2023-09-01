import React from "react";
import "../CSS/Footer.css";
import {
  Instagram,
  LocationOnOutlined,
  Mail,
  PhoneOutlined,
} from "@mui/icons-material";

const Footer = ({ translation }) => {
  function development() {
    alert(
      "Este elemento todavia se encuentra en desarrollo / This element  is still under development"
    );
  }
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__text--container">
          {/* <div className="footer__info--container">
            <h1 className="footer__title">{translation.aboutTextTitle1}</h1>
            <p>{translation.footerText}</p>
          </div> */}
          <div className="footer__contact--container">
            <h1 className="footer__title">Informacion de Contacto</h1>
            <ul className="footer__contact--list">
              <li className="footer__contact--item" onClick={development}>
                <Instagram />
                <p>@MetroCar</p>
              </li>
              <a
                className="footer__contact--item"
                href="mailto:metrocarrental2023@gmail.com"
              >
                <Mail />
                <p>metrocarrental2023@gmail.com</p>
              </a>
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
          <a
            // href="https://google.com"
            target="_blank"
            rel="noreferrer"
            onClick={development}
          >
            Terminos y Condiciones
          </a>
          <a
            // href="https://google.com"
            target="_blank"
            rel="noreferrer"
            onClick={development}
          >
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
