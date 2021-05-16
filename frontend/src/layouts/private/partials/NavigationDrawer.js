import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import './NavigationDrawer.css';

class NavigationDrawer extends React.Component {
  render() {
    const { UserInterfaceStore } = this.props;
    const { values } = UserInterfaceStore;
    const { navDrawerOpen, navDrawerCondensed } = values;

    const isNavDrawerClosed = navDrawerOpen ? '' : 'is-closed';
    const isNavDrawerCondensed = navDrawerCondensed ? 'is-condensed' : '';
    return (
      <nav className={`navigationDrawer ${isNavDrawerClosed} ${isNavDrawerCondensed}`}>
        <section className="navigationSection">
          <button onClick={UserInterfaceStore.toggleNavDrawerCondensed} type="button" className="navigationDrawerDesktopIcon">
            <i className="fi fi-nav-icon-a" />
          </button>

          <NavLink className="navigationItem" exact to="/" activeClassName="active">
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

          <NavLink className="navigationItem" to="/messages" activeClassName="active">
            <div className="navigationItemIcon">
              <i className="fi fi-at" />
            </div>
            <div className="navigationItemString">
              Messages
            </div>
          </NavLink>

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
          <NavLink className="navigationItem" to="/user/settings" activeClassName="active">
            <div className="navigationItemIcon">
              <i className="fi fi-unlocked" />
            </div>
            <div className="navigationItemString">
              Settings
            </div>
          </NavLink>
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
      </nav>
    );
  }
}

NavigationDrawer.propTypes = {
  UserInterfaceStore: PropTypes.observableObject.isRequired,
};
export default inject('UserInterfaceStore')(observer(NavigationDrawer));
