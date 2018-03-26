import React from 'react'
import Link from 'gatsby-link'

import Footer from '../components/Footer'

import gallery1 from "../assets/img/gallery1.png";
import gallery2 from "../assets/img/gallery2.jpg";
import gallery3 from "../assets/img/gallery3.png";
import gallery4 from "../assets/img/gallery4.png";
import gallery5 from "../assets/img/gallery5.png";
import gallery6 from "../assets/img/gallery6.png";
import gallery7 from "../assets/img/gallery7.png";
import gallery8 from "../assets/img/gallery8.png";
import gallery9 from "../assets/img/gallery9.png";
import gallery10 from "../assets/img/gallery10.png";
import gallery11 from "../assets/img/gallery11.jpg";
import gallery12 from "../assets/img/gallery12.png";

const SecondPage = () => (
  <div>

    <div className="gallery__heading">
      <h1 className="u-center-text gallery__heading--header">Gallery</h1>

      <div className="u-center-text gallery__heading--links">
        <Link className="gallery__heading--links-home" to="/">Home</Link>
        <Link className="gallery__heading--links-blog" to="blog">Blog</Link>
      </div>
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery1} />
      <img className="col-1-of-2" src={gallery12} />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery3} />
      <img className="col-1-of-2" src={gallery4} />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery5} />
      <img className="col-1-of-2" src={gallery6} />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery7} />
      <img className="col-1-of-2" src={gallery11} />
    </div>

    <div className="row">
      <img className="col-1-of-2" src={gallery9} />
      <img className="col-1-of-2" src={gallery10} />
    </div>


    <Footer />
  </div>
)

export default SecondPage
