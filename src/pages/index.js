import React from 'react';
import Header from '../components/Header/index';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Projects />
    <Contact />
    <div className="last-image-wrapper"></div>
    <Footer />
  </Layout>
);

export default IndexPage;
