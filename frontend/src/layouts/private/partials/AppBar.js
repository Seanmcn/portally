import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import './AppBar.css';

class NavigationDrawer extends React.Component {
  render() {
    const { UserInterfaceStore } = this.props;

    return (
      <div className="appBar">
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
    );
  }
}

NavigationDrawer.propTypes = {
  UserInterfaceStore: PropTypes.observableObject.isRequired,
};
export default inject('UserInterfaceStore')(observer(NavigationDrawer));
