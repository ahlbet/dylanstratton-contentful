import React from 'react';
import circle1 from '../assets/img/4circles2.png';
import circle2 from '../assets/img/4circles3.png';

const Circles = () => (
  <section className="circles">
    <div className="row">
      <div className="col-1-of-3">
        <img className="circles__image" src={circle1} alt="Four Circles" />
      </div>

      <div className="col-1-of-3">
        <img className="circles__image" src={circle2} alt="Four Circles" />
      </div>

      <div className="col-1-of-3">
        <img className="circles__image" src={circle1} alt="Four Circles" />
      </div>
    </div>
  </section>
);

export default Circles;