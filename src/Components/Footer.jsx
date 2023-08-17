import React from "react";
import "../CSS/Footer.css";

const Footer = ({ translation }) => {
  return (
    <footer>
      <div className="row footer__row">
        <div className="footer__text--container">
          <div className="footer__contact--container">
            <h1>Informacion de Contacto</h1>
            <ul className="footer__contact--list">
              
            </ul>
          </div>
        </div>
        <p>{translation.footerCredits}</p>
      </div>
    </footer>
  );
};

export default Footer;
