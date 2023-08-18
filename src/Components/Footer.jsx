import React from "react";
import "../CSS/Footer.css";
import { Instagram, LocationOnOutlined, Mail, PhoneOutlined } from "@mui/icons-material";

const Footer = ({ translation }) => {
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__text--container">
          <div className="footer__info--container">
            <h1 className="footer__title">Quienes Somos</h1>
            <p>MetroCar es una empresa prometedora Colombiana que se dedica a ofrecer un servico de lujo a sus pasajeros, los fundadores tienen una experiencia de 10 años en la industria y aunque aun es un empresa en crecimiento eso le permite darle la atencion y cuidado a todos sus clientes tal y como lo merecen. </p>
          </div>
          <div className="footer__contact--container">
            <h1 className="footer__title">Informacion de Contacto</h1>
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
                <p>+57 (302) 600 5730</p>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer__credits">{translation.footerCredits}<a href='https://google.com' target="_blank" rel="noreferrer" className="title">A & D</a></p>
      </div>
    </footer>
  );
};

export default Footer;
