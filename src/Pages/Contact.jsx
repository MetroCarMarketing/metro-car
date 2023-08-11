import React from "react";
import "../CSS/Contact.css";
import { Button } from "@mui/material";
import { Facebook, Instagram, Mail, WhatsApp } from "@mui/icons-material";
import tiktok from "../Assets/logo-tiktok.svg";

const Contact = ({ translation }) => {
  return (
    <section id="Contact">
      <div className="container top__container contact__container">
        <div className="row top__row contact__row">
          <h1 className="title">{translation.contactTitle}</h1>
          <ul className="contact__list">
            <Button className="instaBtn">
              <Instagram />
            </Button>
            <Button className="facebookBtn">
              <Facebook />
            </Button>
            <Button className="tiktokBtn gradient">
              <figure>
                <img src={tiktok} alt="" />
              </figure>
            </Button>
            <Button className="mailBtn">
              <Mail />
            </Button>
            <Button className="whatsappBtn">
              <WhatsApp />
            </Button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
