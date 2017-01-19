import React from 'react';
import { Link } from 'react-router';

class SideNav extends React.Component {

  render() {
    return (
      <div className="side-nav">
        <Link to="/" className="side-nav__logo">
          Carbon <br /><span>Design System</span>
        </Link>
        <ul className="side-nav__menu">
          <li className="menu-item">
            <p className="menu-item__heading">Getting Started</p>
            <ul className="menu__sub-nav">
              <li className="sub-nav__item">
                <Link className="sub-nav__item-link" to="/designers">Designers</Link>
              </li>
              <li className="sub-nav__item">
                <Link className="sub-nav__item-link" to="/developers">Developers</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
