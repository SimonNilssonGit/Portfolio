import React, { useState } from 'react'

import About from './components/About/About';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton';
import Model from 'components/Model/Model';

function App() {
 
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Header />
      <section className="section-grid">
      <Hero />
      <BackgroundAnimation />
      </section>
      <Projects setSelectedImg={setSelectedImg} />
      <Skills />
      <About />
      <Footer />
      { selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
      <ScrollButton />
    </div>
  );
}

export default App;
