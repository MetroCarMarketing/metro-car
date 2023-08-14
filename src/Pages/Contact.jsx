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
            <Button href="https://google.com" className="instaBtn">
              <Instagram />
            </Button>
            <Button href="https://google.com" className="facebookBtn">
              <Facebook />
            </Button>
            <Button href="https://google.com" className="tiktokBtn gradient">
              <figure>
                <img src={tiktok} alt="" />
              </figure>
            </Button>
            <Button href="https://google.com" className="mailBtn">
              <Mail />
            </Button>
            <Button href="https://wa.me/573026005730" className="whatsappBtn">
              <WhatsApp />
            </Button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
