import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
// import { NavLink } from 'react-router-dom';
import './AccountMenu.scss';

class AccountMenu extends React.Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { UserStore } = this.props;
    UserStore.logout();
  };

  render() {
    const { UserInterfaceStore } = this.props;
    const { values } = UserInterfaceStore;
    const { accountMenuOpen } = values;
    const isAccountMenuOpen = accountMenuOpen ? '' : 'is-closed';
    return (
      <div className={`accountMenu ${isAccountMenuOpen}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="accountMenuItem">
          <div className="accountMenuItemIcon">
            <span className="material-icons">
              account_circle
            </span>
          </div>
          <div className="accountMenuItemString">
            Profile
          </div>
        </a>
        <button className="accountMenuItem" onClick={this.handleLogout} type="button">
          <div className="accountMenuItemIcon">
            <span className="material-icons">
              logout
            </span>
          </div>
          <div className="accountMenuItemString">
            Logout
          </div>
        </button>
      </div>
    );
  }
}

AccountMenu.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
  UserInterfaceStore: PropTypes.observableObject.isRequired,
};
export default inject('UserStore', 'UserInterfaceStore')(observer(AccountMenu));
