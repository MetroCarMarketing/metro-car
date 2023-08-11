import React from 'react';
import '../CSS/Contact.css'

const Contact = ({ translation }) => {
    return (
        <section id="Contact">
            <div className="container top__container contact__container">
                <div className="row top__row contact__row">
                    <h1>{translation.contactTitle}</h1>
                </div>
            </div>
        </section>
    );
}

export default Contact;
