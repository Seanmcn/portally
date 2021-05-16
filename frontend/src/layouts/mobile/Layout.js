import React from 'react';
import './Layout.css';
import { inject, observer } from 'mobx-react';
import NavigationDrawer from '../private/partials/NavigationDrawer';
import AppBar from '../private/partials/AppBar';

class MobileLayout extends React.Component {
  render() {
    return (
      <>
        <>
          <NavigationDrawer />
          <div className="appContainer">
            <AppBar />
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
