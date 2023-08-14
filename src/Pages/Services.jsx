import React from 'react';

const Services = ({ translation }) => {
    return (
        <section id="Services">
            <div className="container top__container services__container">
                <div className="row top__row services__row">
                    <h1 className='title'>{translation.servicesTitle}</h1>
                </div>
            </div>
        </section>
    );
}

export default Services;
