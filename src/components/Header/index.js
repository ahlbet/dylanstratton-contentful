import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div>
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Dylan Stratton</span>
          <span className="heading-primary--sub">Web Developer</span>
        </h1>
        <Link className="header__link" to="/blog">Blog</Link>
        <p><i className="header__arrow"></i></p>
      </div>
    </header>
  </div>
);

export default Header;
