import React from 'react';
import PropTypes from 'prop-types';

import Footer from './partials/Footer';
import HeaderFixedNavbar from './partials/HeaderFixedNavbar';
import Router from '../Router';
import HelmetDefault from './helmet/HelmetDefault';
import HelmetFixedNavbar from './helmet/HelmetFixedNavbar';

const LayoutNavbar = () => (
  <>
    <HelmetDefault />
    <HelmetFixedNavbar />
    <HeaderFixedNavbar />
    <Router />
    <Footer />
  </>
);

LayoutNavbar.propTypes = {
  children: PropTypes.func,
};

export default LayoutNavbar;

