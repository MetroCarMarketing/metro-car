import React from "react";
import "../CSS/Contact.css";
import { Button } from "@mui/material";
import { Instagram } from "@mui/icons-material";

const Contact = ({ translation }) => {
  return (
    <section id="Contact">
      <div className="container top__container contact__container">
        <div className="row top__row contact__row">
          <h1 className="title">{translation.contactTitle}</h1>
          <ul className="contact__list">
            <Button startIcon={<Instagram/>}>
                MetroCar
            </Button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
