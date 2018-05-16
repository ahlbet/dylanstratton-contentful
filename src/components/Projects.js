'use strict';

import React from 'react';
import Link from 'gatsby-link';
import theatreCode from '../assets/img/theatre-code.png';
import skrine from '../assets/img/skrine.png';
import gallery12 from '../assets/img/gallery12.png';

const Projects = () => (
  <section id="projects" className="projects">
    <h2 className="projects__heading">
      Projects
    </h2>

    <div className="projects__list row">
      <div className="col-1-of-1 projects__project">
        <a href="http://theatre-code.netlify.com/">
          <img className="projects__image" src={theatreCode} alt="Theatre and Code" />
        </a>
        <div className="projects__description">
          <p>The Theatre and Code project grew out of an interest in two vastly different fields. But where do these fields intersect? How can theater use code to create its universes? What can programmers learn from the world of theater? I wanted a home base for my ramblings about these topics but also a place for others to contribute and collaborate. Theatre and Code is still in its early stages as far its musings are concerned, but the skeleton is there. The Gatsby, Contentful and Netlify development experience is excellent. Once I connected all three, I simply write a post in Contentful and a new build is triggered through Netlify. Boom. New post. This project also brought me into the world of Graphql - I'm definitely excited to dig deeper there.</p>
          <p>Technologies used: <strong>React</strong> (Gatsby), <strong>Contentful</strong> for content management, <strong>Sass</strong> and <strong>Netlify</strong> for hosting.</p>
          <a href="http://theatre-code.netlify.com/" className="projects__link">Follow</a> the Theatre and Code blog.
        </div>
      </div>

      <div className="col-1-of-1 projects__project">
        <a href="http://www.patrickskrine.com/">
          <img className="projects__image" src={skrine} alt="Skrine's Take" />
        </a>
        <div className="projects__description">
          <p>Patrick Skrine's sports blog is one of the first websites I ever created. Patrick is a wonderful sports journalist and was in need of a personal site to host some of his extra writing. I worked closely with him to discuss design needs, authentication and ease of use. I discovered the Netlify CMS and knew it would be a perfect platform for him to use. Similar to Contentful, Patrick writes a post in the Netlify CMS, clicks publish and it's automatically added to the site. Best of all, I don't need to touch a thing. </p>
          <p>Technologies used: <strong>HTML5</strong>, <strong>Sass</strong>, <strong>Jekyll</strong> and <strong>Netlify CMS</strong></p>
          <a href="http://www.patrickskrine.com/" className="projects__link">Read</a> Patrick Skrine's sports blog.
        </div>
      </div>

      <div className="col-1-of-1 projects__project">
        <Link to="/gallery">
          <img className="projects__image" src={gallery12} alt="Gallery" />
        </Link>
        <div className="projects__description">
          <p>I first discovered coding in an art class in college. We used Processing (a Java based library) to make little art pieces. I didn't really know what I was doing, but I knew that I loved the way 10 lines of code could make something dance across the screen. I was hooked. I've included some of my digital artwork because the majority of the works were created with JavaScript. They showcase the creative reaches of code and my abilities.</p>
          <p>Technologies used: <strong>JavaScript</strong> and <strong>p5.js</strong></p>
          <Link to="/gallery" className="projects__link">Explore</Link> some of my digital artwork.
        </div>
      </div>
    </div>
  </section>
);

export default Projects;