import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import HeroBanner from './HeroBanner';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


function Home() {
  return (
    <>
      
      <Header />
      <HeroBanner />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home