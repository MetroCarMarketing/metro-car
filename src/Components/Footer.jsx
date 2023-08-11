import React from "react";
import "../CSS/Footer.css";

const Footer = ({ translation }) => {
  return (
    <footer>
      <div className="row footer__row">
        <p>{translation.footerCredits}</p>
      </div>
    </footer>
  );
};

export default Footer;
