import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.scss';
// import '../assets/sass/main.sass';

import favicon from '../assets/img/fav.png';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Dylan Stratton | Web Developer</title>
      <meta name='description' content='Portfolio site and blog maintained by Dylan Stratton' />
      <meta name='keywords' content='web, developer' />
      <link rel="shortcut icon" href={favicon} type="favicon.ico" />
    </Helmet>
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
