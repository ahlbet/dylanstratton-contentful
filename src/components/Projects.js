'use strict';

import React from 'react';
import theatreCode from '../assets/img/theatre-code.png';
import skrine from '../assets/img/skrine.png';

const Projects = () => (
  <section id="projects" className="projects">
    <h2 className="projects__heading">
      Projects
    </h2>

    <div className="row">
      <div className="col-1-of-2 projects__project">
        <a href="http://theatre-code.netlify.com/">
          <img className="projects__image" src={theatreCode} alt="Theatre and Code" />
        </a>
        <p className="projects__description">
          <a href="http://theatre-code.netlify.com/" className="projects__link">Follow</a> the Theatre and Code blog</p>
      </div>

      <div className="col-1-of-2 projects__project">
        <a href="http://www.patrickskrine.com/">
          <img className="projects__image" src={skrine} alt="Skrine's Take" />
        </a>
        <p className="projects__description">
          <a href="http://www.patrickskrine.com/" className="projects__link">Read</a> Patrick Skrine's sports blog</p>
      </div>

      {/* <div className="col-1-of-3 projects__project">
        <a href="http://marble-eyes.netlify.com/">
          <img className="projects__image" src="img/marble.png" alt="Marble Eyes" />
        </a>
        <p className="projects__description">
          <a href="http://marble-eyes.netlify.com/" className="projects__link">Explore</a> the (unfinished) Marble Eyes portfolio site</p>
      </div> */}
    </div>
  </section>
);

export default Projects;