'use strict';

import React from 'react';

const Contact = () => (
  <section id="contact" className="contact">
    <h2 className="contact__heading">
      Contact
    </h2>

    <div className="contact__text">
      <p className="contact__text--1">I love collaborations of all kinds. If you have a project you'd like to work on, don't hesitate to contact me. Whether
        it be web development, digital art, or theatre, I am interested in creating.</p>

      <p className="contact__text--2">You can check out more of my digital art at
        <a className="contact__link" href="http://ahlbet.weebly.com/"> ahlbet.weebly.com</a> or at
        <a className="contact__link" href="http://www.callosummagazine.com/mag/2016/9/27/gif-art-and-image-processing-by-dylan-stratton?rq=dylan%20stratton"> callosummagazine.com</a>. Email is the best way to reach me.</p>

      <a href="mailto:dm.stratton94@gmail.com" className="contact__email">dm.stratton94@gmail.com</a>
    </div>
  </section>
);

export default Contact;