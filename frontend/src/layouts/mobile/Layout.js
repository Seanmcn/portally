import React from 'react';
import './Layout.css';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import { Helmet } from 'react-helmet';

class MobileLayout extends React.Component {
  constructor(props) {
    super(props);
    this.refDrawer = React.createRef();
    this.refTopNavBar = React.createRef();
  }

  componentDidMount() {
    this.refDrawer.current.hasHeader = true;
    this.refTopNavBar.current.centerTitle = true;
  }

  onClickMenuIcon() {
    this.refDrawer.current.open = !this.refDrawer.current.open;
  }

  render() {
    console.log(this.refDrawer.current);
    return (
      <>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet" />
        </Helmet>

        <mwc-drawer type="modal" ref={this.refDrawer}>
          <span slot="title">Drawer Title</span>
          <span slot="subtitle">subtitle</span>
          <div>
            <p>Drawer content!</p>
            <mwc-icon-button icon="gesture" />
            <mwc-icon-button icon="gavel" />
          </div>
          <div slot="appContent">
            <mwc-top-app-bar-fixed ref={this.refTopNavBar}>
              <mwc-icon-button slot="navigationIcon" icon="menu" onClick={this.onClickMenuIcon.bind(this)} />
              <div slot="title">Portally</div>
              <mwc-icon-button icon="file_download" slot="actionItems" />
              <mwc-icon-button icon="print" slot="actionItems" />
              <mwc-icon-button icon="favorite" slot="actionItems" />
            </mwc-top-app-bar-fixed>
            <div>
              <p>Main Content!</p>
            </div>
          </div>
        </mwc-drawer>
      </>
    );
  }
}
export default MobileLayout;
