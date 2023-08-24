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
          <div className="contact__body">
            <form action="">
              <div className="form__header">
                <div className="form__item">
                  <label htmlFor="">{translation.contactFormName}</label>
                  <input type="text" />
                </div>
                <div className="form__item">
                  <label htmlFor="">Email</label>
                  <input type="email" />
                </div>
              </div>
              <div className="form__message">
                <label htmlFor="">{translation.contactFormMessage}</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <Button>Enviar</Button>
            </form>
            <ul className="contact__list">
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://google.com"
                className="instaBtn"
              >
                <Instagram />
                <h1>
                  <span>@</span>MetroCar
                </h1>
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://google.com"
                className="facebookBtn"
              >
                <Facebook />
                <h1>
                  <span>@</span>MetroCar
                </h1>
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://google.com"
                className="tiktokBtn gradient"
              >
                <figure>
                  <img src={tiktok} alt="" />
                </figure>
                <h1>
                  <span>@</span>MetroCar
                </h1>
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://google.com"
                className="mailBtn"
              >
                <Mail />
                <h1>
                  <span>@</span>MetroCar
                </h1>
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/573026005730"
                className="whatsappBtn"
              >
                <WhatsApp />
                <h1 className="number">+57 (302) 600 5730</h1>
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
