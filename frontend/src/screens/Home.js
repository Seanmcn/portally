// todo: disable this once links finalised
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';

class ScreensHome extends React.Component {
  render() {
    const { UserStore } = this.props;
    const { authenticated } = UserStore;
    if (authenticated) {
      return (
        <div className="container">
          <div className="columns">
            <div className="column">
              <aside className="menu box">
                <p className="menu-label">
                  General
                </p>
                <ul className="menu-list">
                  <li><a>Activity Stream</a></li>
                  <li><a>Friends</a></li>
                </ul>
                <p className="menu-label">
                  Custom Lists
                </p>
                <ul className="menu-list">
                  <li><a>News</a></li>
                  <li><a>Memes</a></li>
                  <li><a>Gaming</a></li>
                </ul>
                <p className="menu-label">
                  Configuration
                </p>
                <ul className="menu-list">
                  <li>
                    <a className="is-active">Groups</a>
                  </li>
                  <li><a>Invitations</a></li>
                  <li><a>Storage</a></li>
                  <li><a>Feeds</a></li>
                </ul>

              </aside>
            </div>
            <div className="column is-three-quarters">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary">
                        <p className="title">Vertical...</p>
                        <p className="subtitle">Top tile</p>
                      </article>
                      <article className="tile is-child notification is-warning">
                        <p className="title">...tiles</p>
                        <p className="subtitle">Bottom tile</p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child notification is-info">
                        <p className="title">Middle tile</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">
                          <img src="https://bulma.io/images/placeholders/640x480.png" alt="an example for now" />
                        </figure>
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                      <p className="title">Wide tile</p>
                      <p className="subtitle">Aligned with the right tile</p>
                      <div className="content">
                        Something something!
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-success">
                    <div className="content">
                      <p className="title">Tall tile</p>
                      <p className="subtitle">With even more content</p>
                      <div className="content">
                        Something something!
                      </div>
                    </div>
                  </article>
                </div>
              </div>

            </div>
          </div>

        </div>
      );
    }
    return (
      <div className="container">
        <div className="box">
          <p><Link to="/user/login">Login</Link></p>
          <p><Link to="/user/register">Register</Link></p>
        </div>
      </div>
    );
  }
}

ScreensHome.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(ScreensHome));
