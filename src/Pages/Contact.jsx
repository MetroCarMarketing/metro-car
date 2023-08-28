import React, { useRef } from "react";
import "../CSS/Contact.css";
import { Button } from "@mui/material";
import { Facebook, Instagram, Mail, WhatsApp } from "@mui/icons-material";
import tiktok from "../Assets/logo-tiktok.svg";
import emailjs from "@emailjs/browser";

const Contact = ({ translation, language }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dg2350m",
        "template_8h6i0ji",
        form.current,
        "WXNeydS_bunjf2g3I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="Contact">
      <div className="container top__container contact__container">
        <div className="row top__row contact__row">
          <h1 className="title">{translation.contactTitle}</h1>
          <div className="contact__body">
            <div className="contact__left">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form__header">
                  <div className="form__item">
                    <label htmlFor="">{translation.contactFormName}</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      name="from_name"
                      required
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="johndoe123@gmail.com"
                      name="user_email"
                      required
                    />
                  </div>
                </div>
                <div className="form__message">
                  <label htmlFor="">{translation.contactFormMessage}</label>
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder={translation.contactPlaceholder}
                    name="message"
                    required
                  ></textarea>
                </div>
                {language === "english" ? (
                  <>
                    <Button type="submit">Send</Button>
                  </>
                ) : (
                  <Button type="submit">Enviar</Button>
                )}
              </form>
            </div>
            <div className="contact__right">
              <ul className="contact__list">
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="https://google.com"
                  className="instaBtn"
                >
                  <Instagram />
                </Button>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="https://google.com"
                  className="facebookBtn"
                >
                  <Facebook />
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
                </Button>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:metrocarrental2023@gmail.com"
                  className="mailBtn"
                >
                  <Mail />
                </Button>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/573026005730"
                  className="whatsappBtn"
                >
                  <WhatsApp />
                </Button>
              </ul>
              <p>{translation.contactText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
