import React from 'react';
import Helmet from 'react-helmet';

const HelmetDefault = () => (
  <Helmet
    title="Portally"
    meta={[
      { name: 'description', content: 'Social network/portal' },
      { name: 'keywords', content: 'portally, social, network, portal' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'charset', content: 'utf-8' },
    ]}
    script={[
      { src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' },
    ]}
    link={[
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      },
    ]}
  />

);
export default HelmetDefault;
