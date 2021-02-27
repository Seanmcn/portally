import React from 'react';
import Helmet from 'react-helmet';

const HelmetFixedNavbar = () => (
  <Helmet
    bodyAttributes={{
      class: 'has-navbar-fixed-top'
    }}
  />
);

export default HelmetFixedNavbar;

