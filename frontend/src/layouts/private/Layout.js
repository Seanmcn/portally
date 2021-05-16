import React from 'react';
import Helmet from 'react-helmet';
import ScreensRoot from '../../screens/Router';
import './Layout.css';
import NavigationDrawer from './partials/NavigationDrawer';
import AppBar from './partials/AppBar';

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
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ]}
    />
    <NavigationDrawer />
    <div className="appContainer">
      <AppBar />
      <div className="appContent">
        <ScreensRoot />
      </div>
    </div>
  </>
);

export default PrivateLayout;
