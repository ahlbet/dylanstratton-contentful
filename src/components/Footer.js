'use strict';

import React from 'react';

const getDate = () => {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <p className="footer__text">Dylan Stratton &copy; {getDate()}</p>
    </div>
  </footer>
);

export default Footer;