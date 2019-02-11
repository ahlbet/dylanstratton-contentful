import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer'
import Layout from '../components/layout'

import gallery1 from "../assets/img/gallery1.png";
import gallery3 from "../assets/img/gallery3.png";
import gallery4 from "../assets/img/gallery4.png";
import gallery5 from "../assets/img/gallery5.png";
import gallery6 from "../assets/img/gallery6.png";
import gallery7 from "../assets/img/gallery7.png";
import gallery9 from "../assets/img/gallery9.png";
import gallery10 from "../assets/img/gallery10.png";
import gallery11 from "../assets/img/gallery11.jpg";
import gallery12 from "../assets/img/gallery12.png";
import gallery13 from "../assets/img/gallery13.png";
import gallery14 from "../assets/img/gallery14.jpg";

const SecondPage = () => (
  <Layout>

    <div className="gallery__heading">
      <h1 className="u-center-text gallery__heading--header">Gallery</h1>

      <div className="u-center-text gallery__heading--links">
        <Link className="gallery__heading--links-home" to="/">Home</Link>
        <Link className="gallery__heading--links-blog" to="blog">Blog</Link>
      </div>
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery14} alt="Gallery" />
      <img className="col-1-of-2" src={gallery13} alt="Gallery" />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery1} alt="Gallery" />
      <img className="col-1-of-2" src={gallery12} alt="Gallery" />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery3} alt="Gallery" />
      <img className="col-1-of-2" src={gallery4} alt="Gallery" />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery5} alt="Gallery" />
      <img className="col-1-of-2" src={gallery6} alt="Gallery" />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery7} alt="Gallery" />
      <img className="col-1-of-2" src={gallery11} alt="Gallery" />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery9} alt="Gallery" />
      <img className="col-1-of-2" src={gallery10} alt="Gallery" />
    </div>


    <Footer />
  </Layout>
)

export default SecondPage
