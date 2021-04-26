import React from 'react';
import './Layout.css';

const MobileLayout = () => (
  <>
    <div className="wrapper">
      <nav className="header">
        <div>&nbsp;</div>
        <div className="logo">Logo</div>
        <div className="menu-icon">Menu</div>
      </nav>
      <div className="sidebar-wrapper">SIDEBAR</div>
      <div className="main-wrapper">
        BODY!
      </div>
    </div>
  </>
);

export default MobileLayout;
