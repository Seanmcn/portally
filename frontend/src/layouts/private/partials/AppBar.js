import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import './AppBar.css';

class NavigationDrawer extends React.Component {
  render() {
    const { UserInterfaceStore } = this.props;

    return (
      <div className="appBar">
        <button onClick={UserInterfaceStore.toggleNavDrawer} type="button" className="appBarIcon navigationDrawerMobileIcon">
          <span className="material-icons">
            menu
          </span>
        </button>
        <div>
          <h1 className="logoText">Portally</h1>
        </div>
        <div>
          <button type="button" className="appBarIcon">
            <span className="material-icons">
              email
            </span>
          </button>
          <button type="button" className="appBarIcon">
            <span className="material-icons">
              notifications
            </span>
          </button>
          <button type="button" className="appBarIcon">
            <span className="material-icons">
              account_circle
            </span>
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
