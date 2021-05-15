import React from 'react';
import './Layout.css';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
// eslint-disable-next-line no-unused-vars
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

class MobileLayout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { UserInterfaceStore } = this.props;
    // eslint-disable-next-line react/prop-types
    const { values } = UserInterfaceStore;
    // eslint-disable-next-line react/prop-types
    const { navDrawerOpen, navDrawerCondensed } = values;

    const isNavDrawerClosed = navDrawerOpen ? '' : 'is-closed';
    const isNavDrawerCondensed = navDrawerCondensed ? 'is-condensed' : '';
    return (
      <>
        <Helmet
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
        />
        <>

          <nav className={`navigationDrawer ${isNavDrawerClosed} ${isNavDrawerCondensed}`}>
            <section className="navigationSection">
              {/* Todo: fix link & anchors */}
              {/* eslint-disable-next-line react/prop-types */}
              <button onClick={UserInterfaceStore.toggleNavDrawerCondensed} type="button" className="navigationDrawerDesktopIcon">
                <i className="fi fi-nav-icon-a" />
              </button>

              <NavLink className="navigationItem" to="/mobile" activeClassName="active">
                <div className="navigationItemIcon">
                  <i className="fi fi-home" />
                </div>
                <div className="navigationItemString">
                  Home
                </div>
              </NavLink>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-earth" />
                </div>
                <div className="navigationItemString">
                  Explore
                </div>
              </a>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-at" />
                </div>
                <div className="navigationItemString">
                  Messages
                </div>
              </a>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-persons" />
                </div>
                <div className="navigationItemString">
                  Friends
                </div>
              </a>

            </section>
            <section className="navigationSection">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-unlocked" />
                </div>
                <div className="navigationItemString">
                  Settings
                </div>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-database" />
                </div>
                <div className="navigationItemString">
                  Statistics
                </div>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-bug" />
                </div>
                <div className="navigationItemString">
                  Report a bug
                </div>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="navigationItem">
                <div className="navigationItemIcon">
                  <i className="fi fi-question" />
                </div>
                <div className="navigationItemString">
                  Help
                </div>
              </a>

            </section>
            {/* <section className="navigationSection"> */}
            {/*  /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/ */}
            {/*  <a className="navigationItem"> */}
            {/*    <div className="navigationItemIcon"> */}
            {/*      <i className="fi fi-user-secret" /> */}
            {/*    </div> */}
            {/*    <div className="navigationItemString"> */}
            {/*      Admin */}
            {/*    </div> */}
            {/*  </a> */}
            {/* </section> */}
          </nav>

          <div className="appContainer">
            <div className="appBar">
              {/* eslint-disable-next-line react/prop-types */}
              <button onClick={UserInterfaceStore.toggleNavDrawer} type="button" className="appBarIcon navigationDrawerMobileIcon">
                <i className="fi fi-nav-icon-a" />
              </button>
              <div>
                <h1 className="logoText">Portally</h1>
              </div>
              <div>
                <button type="button" className="appBarIcon">
                  <i className="fi fi-email" />
                </button>
                <button type="button" className="appBarIcon">
                  <i className="fi fi-bell-alt" />
                </button>
                <button type="button" className="appBarIcon">
                  <i className="fi fi-person" />
                </button>
              </div>
            </div>
            <div className="appContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis numquam, sunt,
                praesentium quis
                aliquam saepe unde amet suscipit accusantium voluptate optio vitae
                earum possimus
                animi id quo! Iste,
                sed necessitatibus.
              </p>
            </div>
          </div>
        </>
      </>
    );
  }
}
export default inject('UserInterfaceStore')(observer(MobileLayout));
