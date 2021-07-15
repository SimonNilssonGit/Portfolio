import React from 'react'

import './HeroStyles.css';
import '../../index.css';

const Hero = () => {
    return (
        <section className="section-row">
        <div className="left-section">
      <div className="section-title">
        Välkommen!
      </div>
      <p className="section-text">
        Välkommen till min portfolio, syftet med sidan är att berätta om mig och visa vad jag arbetat med för språk, ramvkerk samt visa upp projekt jag genomfört.
      </p>
      <div className="big-btn-container">
      <button className="big-btn" onClick={() => window.location = '#footer'} >
        Kontakta mig
      </button>
      </div> 
    </div>
  </section>
    )
}

export default Hero
