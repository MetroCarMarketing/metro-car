import React from "react";
import "../CSS/Footer.css";
import {
  // Instagram,
  LocationOnOutlined,
  Mail,
  PhoneOutlined,
} from "@mui/icons-material";

const Footer = ({ translation, language }) => {
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
            {language === "english" ? (
              <h1 className="footer__title">Contact Information</h1>
            ) : (
              <h1 className="footer__title">información de Contacto</h1>
            )}

            <ul className="footer__contact--list">
              {/* <li className="footer__contact--item" onClick={development}>
                <Instagram />
                <p>@MetroCar</p>
              </li> */}
              <a
                className="footer__contact--item"
                href="mailto:metrocarrental2023@gmail.com"
              >
                <Mail />
                <p>metrocarrental2023@gmail.com</p>
              </a>
              <a
                href="https://www.google.com/maps/place/Cl.+79+%2327A-21,+Bogotá/@4.670177,-74.0678601,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9af766650075:0xbf4dd3ad9508f610!8m2!3d4.670177!4d-74.0652852!16s%2Fg%2F11c2fsjcxj?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="footer__contact--item"
              >
                <LocationOnOutlined />
                <p>Calle 79 # 27A - 21 Bogotá, Colombia</p>
              </a>
              <a href="tel:+573026005730" className="footer__contact--item">
                <PhoneOutlined />
                <p>+57 (302) 600 5730</p>
              </a>
            </ul>
          </div>
        </div>
        <div className="terms">
          {language === "english" ? (
            <>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                onClick={development}
              >
                Terms and Conditions
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                onClick={development}
              >
                Privacy Policy
              </a>
            </>
          ) : (
            <>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                onClick={development}
              >
                Términos y Condiciones
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                onClick={development}
              >
                Política de Privacidad
              </a>
            </>
          )}
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
