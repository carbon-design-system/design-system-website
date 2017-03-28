import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import classnames from 'classnames';

import Icon from '@console/bluemix-components-react/dist/components/Icon';
import Button from '@console/bluemix-components-react/dist/components/Button';

import SiteNavStructure from '../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';
import Packages from '../../../package.json';

class SideNav extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onToggleBtnClick: PropTypes.func,
    onClick: PropTypes.func,
  }

  renderSubNavItems = (subnav, parentItem) => {
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const processEnv = process.env;
    return Object.keys(subnav).map(subNavItem => {
      const link = `/${parentItem}/${subNavItem}`;
      const isCurrentPage = (parentItem === currentPath[1] && subNavItem === currentPath[2]);
      const classNames = classnames({
        'sub-nav__item': true,
        'selected': isCurrentPage, // eslint-disable-line
      });
      if (!(processEnv.ENV === 'internal') && subNavItem === 'service-providers') {
        return '';
      }
      return (
        <li key={subNavItem} className={classNames}>
          <Link className="sub-nav__item-link" to={link}>{subnav[subNavItem]}</Link>
        </li>
      );
    });
  }

  renderSubNav = (subnav, parentItem) => {
    const subNavItems = this.renderSubNavItems(subnav, parentItem);
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const isCurrentPath = currentPath[1] === parentItem;
    return (
      <SideNavItem key={parentItem} isCurrentPath={isCurrentPath}>
        <p className="main-nav-item__heading">{SiteNavStructure[parentItem].title}
          <Icon className="main-nav-item__arrow" name="caret--down" description="Menu arrow icon" />
        </p>
        <ul className="main-nav__sub-nav">
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
      const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
      const isCurrentPath = currentPath[1] === navItem;
      return (
        <SideNavItem key={navItem} isActiveItem={isCurrentPath}>
          <Link className="main-nav-item__heading" to={`/${navItem}`}>{navItemObj.title}</Link>
        </SideNavItem>
      );
    });


  render() {
    const {
      isOpen,
      onToggleBtnClick,
    } = this.props;

    const navItems = this.renderSiteItems(SiteNavStructure);
    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
    });

    const version = Packages.dependencies['carbon-components'];

    return (
      <div className={classNames}>
        <button onClick={onToggleBtnClick} className="side-nav__toggle-btn">
          <div>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
        <Link to="/" className="side-nav__logo">
          Carbon <span>Design System</span>
        </Link>
        <a href="https://github.com/carbon-design-system/carbon-components/releases" className="side-nav__version">{version}</a>
        <ul className="side-nav__main-nav">
          {navItems}
        </ul>
        <div className="side-nav__links">
          <Button
            href="https://github.com/carbon-design-system/carbon-design-kit"
            className="side-nav__link bx--btn"
            kind="secondary"
            icon="arrow--right"
            iconDescription="sidenav link icon"
          >Design Kit
          </Button>
          <Button
            href="https://github.com/carbon-design-system/carbon-components"
            className="side-nav__link bx--btn"
            kind="secondary"
            icon="arrow--right"
            iconDescription="sidenav link icon"
          >Developer Kit
          </Button>
        </div>
        <div className="side-nav__footer">
          <p className="side-nav__text">See something missing?</p>
          <a
            className="side-nav__github-issue-link bx--link"
            href="https://github.com/carbon-design-system/carbon-components/issues"
            target="_blank"
          >Let us know!</a>
          <p className="side-nav__copyright-text">Copyright © 2017 IBM</p>
        </div>
      </div>
    );
  }
}

export default SideNav;
