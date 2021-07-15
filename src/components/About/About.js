import React from 'react'

import './AboutStyles.css';
import 'index.css';

const About = () => {
    return (
        <section className="section" id="about">
            <div className="section-divider" />
            <br />
            <br />
            <div className="container">
            <div className="content-div">
                <h2 className="section-title">Om mig</h2>
                <p className="section-text">
                    Mitt namn är Simon Nilsson, en 26-åring som bor i Skellefteå. 
                    Jag studerar Systemvetenskap på Luleå Tekniska Universitet och har ett stort intresse för IT. 
                </p>
            </div>
            <div className="content-div">
                <img className="profile-img" src="\images\profil.jpg" alt="profil bild"></img>
            </div>
            </div>
            
        </section>
    )
}

export default About
