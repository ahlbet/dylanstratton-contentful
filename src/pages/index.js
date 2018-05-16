import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header/index';
import Circles from '../components/Circles';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import heaven from '../assets/img/heavenyo.jpg';

const IndexPage = () => (
  <div>
    <Header />
    {/* <Circles /> */}
    <About />
    <Projects />
    <Contact />
    <div className="last-image-wrapper"></div>
    <Footer />
  </div>
);

export default IndexPage;
