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
            <span className="material-icons">
              menu
            </span>
          </button>

          <NavLink className="navigationItem" exact to="/" activeClassName="active">
            <div className="navigationItemIcon">
              <span className="material-icons">
                home
              </span>
            </div>
            <div className="navigationItemString">
              Home
            </div>
          </NavLink>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navigationItem">
            <div className="navigationItemIcon">
              <span className="material-icons">
                explore
              </span>
            </div>
            <div className="navigationItemString">
              Explore
            </div>
          </a>

          <NavLink className="navigationItem" to="/messages" activeClassName="active">
            <div className="navigationItemIcon">
              <span className="material-icons">
                email
              </span>
            </div>
            <div className="navigationItemString">
              Messages
            </div>
          </NavLink>

          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navigationItem">
            <div className="navigationItemIcon">
              <span className="material-icons">
                people
              </span>
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
              <span className="material-icons">
                settings
              </span>
            </div>
            <div className="navigationItemString">
              Settings
            </div>
          </NavLink>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navigationItem">
            <div className="navigationItemIcon">
              <span className="material-icons">
                analytics
              </span>
            </div>
            <div className="navigationItemString">
              Statistics
            </div>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navigationItem">
            <div className="navigationItemIcon">
              <span className="material-icons">
                bug_report
              </span>
            </div>
            <div className="navigationItemString">
              Report a bug
            </div>
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navigationItem">
            <div className="navigationItemIcon">
              <span className="material-icons">
                help_center
              </span>
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
