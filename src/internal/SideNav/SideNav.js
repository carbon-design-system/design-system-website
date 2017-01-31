import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Icon from '@console/bluemix-components-react/dist/components/Icon';
import Button from '@console/bluemix-components-react/dist/components/Button';

import SiteNavStructure from '../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';

class SideNav extends Component {
  renderSubNavItems = (subnav, parentItem) =>
    Object.keys(subnav).map(subNavItem =>
      <li key={subNavItem} className="sub-nav__item">
        <Link className="sub-nav__item-link" to={`/${parentItem}/${subNavItem}`}>{subnav[subNavItem]}</Link>
      </li>,
    );

  renderSubNav = (subnav, parentItem) => {
    const subNavItems = this.renderSubNavItems(subnav, parentItem);
    return (
      <SideNavItem key={parentItem} className="menu-item">
        <p className="menu-item__heading">{SiteNavStructure[parentItem].title}
          <Icon className="menu-item__arrow" name="caret--down" description="Menu arrow icon" />
        </p>
        <ul className="menu__sub-nav">
          {subNavItems}
        </ul>
      </SideNavItem>
    );
  }

  renderSiteItems = navItems =>
    Object.keys(navItems).map((navItem) => {
      const navItemObj = navItems[navItem];
      if (navItemObj.subnav) {
        return this.renderSubNav(navItemObj.subnav, navItem);
      }
      return (
        <SideNavItem key={navItem} className="menu-item">
          <Link className="menu-item__heading" to={`/${navItem}`}>{navItemObj.title}</Link>
        </SideNavItem>
      );
    });

  render() {
    const navItems = this.renderSiteItems(SiteNavStructure);

    return (
      <div className="side-nav">
        <Link to="/" className="side-nav__logo">
          Carbon <br /><span>Design System</span>
        </Link>
        <ul className="side-nav__menu">
          {navItems}
        </ul>
        <Button
          href="https://github.ibm.com/Bluemix/design-kit"
          className="side-nav__link"
          kind="secondary"
          icon="arrow--right"
          iconDescription="sidenav link icon"
        >Design Kit
        </Button>
        <Button
          href="https://github.ibm.com/Bluemix/bluemix-components"
          className="side-nav__link"
          kind="secondary"
          icon="arrow--right"
          iconDescription="sidenav link icon"
        >Developer Kit
        </Button>
        <p className="side-nav__text">See something missing?</p>
        <a className="side-nav__github-issue-link bx--link" onClick={this.props.onClick}>Let us know!</a>
        <p className="side-nav__copyright-text">Copyright © 2017 IBM</p>
      </div>
    );
  }
}

export default SideNav;
