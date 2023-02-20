import React from 'react';
import { About } from "./components/About";
import { Footer } from './components/Footer';
import { Nav } from './components/NavBar';

const us = () => {
  return (
    <section>
        <Nav />
        <About />
        <Footer />
    </section>
  )
}

export default us;