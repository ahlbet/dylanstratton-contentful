import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../assets/img/fav.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../assets/sass/main.sass';

library.add(fab);

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Dylan Stratton | Web Developer</title>
      <meta name='description' content='Portfolio site and blog maintained by Dylan Stratton' />
      <meta name='keywords' content='web, developer' />
      <link rel="shortcut icon" href={favicon} type="favicon.ico" />
    </Helmet>
    <div>{children}</div>
  </div>
);

export default Layout;
