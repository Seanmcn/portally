import React from 'react';
import Helmet from 'react-helmet';
import Footer from './partials/Footer';
import Header from './partials/Header';
import ScreensRoot from '../../screens/Router';

const PrivateLayout = () => (
  <>
    <Helmet
      title="Portally"
      meta={[
        { name: 'description', content: 'Social network/portal' },
        { name: 'keywords', content: 'portally, social, network, portal' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css',
        },
      ]}
      bodyAttributes={{
        // class: 'has-navbar-fixed-top',
      }}
    />
    <Header />
    <ScreensRoot />
    <Footer />
  </>
);

export default PrivateLayout;
