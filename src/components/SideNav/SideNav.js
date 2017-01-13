import React from 'react';
import { Link } from 'react-router';

import Icon from '@console/bluemix-components-react/dist/components/Icon';

import SiteNavStructure from '../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';

class SideNav extends React.Component {
  renderSubNavItems = (subnav, parentItem) =>
    Object.keys(subnav).map(subNavItem =>
      <SideNavItem key={subNavItem} className="sub-nav__item">
        <Link className="sub-nav__item-link" to={`/${parentItem}/${subNavItem}`}>{subnav[subNavItem]}</Link>
      </SideNavItem>,
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
          <Link className="menu-item__heading" to={navItem}>{navItemObj.title}</Link>
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
      </div>
    );
  }
}

export default SideNav;
