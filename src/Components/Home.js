import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import HeroBanner from './HeroBanner';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
      
      <Header />
      <HeroBanner />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home