import React from "react";
import "../CSS/Footer.css";
import { Instagram, LocationOnOutlined, Mail, PhoneOutlined } from "@mui/icons-material";

const Footer = ({ translation }) => {
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__text--container">
          <div className="footer__contact--container">
            <h1>Informacion de Contacto</h1>
            <ul className="footer__contact--list">
              <li className="footer__contact--item">
                <Instagram/>
                <p>@MetroCar</p>
              </li>
              <li className="footer__contact--item">
                <Mail/>
                <p>probando@gmail.com</p>
              </li>
              <li className="footer__contact--item">
                <LocationOnOutlined/>
                <p>Calle 99 #9a-29 Bogota, Colombia</p>
              </li>
              <li className="footer__contact--item">
                <PhoneOutlined/>
                <p>Calle 99 #9a-29 Bogota, Colombia</p>
              </li>
            </ul>
          </div>
        </div>
        <p>{translation.footerCredits}</p>
      </div>
    </footer>
  );
};

export default Footer;
