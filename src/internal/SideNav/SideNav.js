import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import classnames from 'classnames';
import ReactGA from 'react-ga';

import { Icon, Button } from 'carbon-components-react';

import SiteNavStructure from '../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';
import Packages from '../../../package.json';

class SideNav extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isFinal: PropTypes.bool,
    onToggleBtnClick: PropTypes.func,
    onClick: PropTypes.func,
  };

  handleSkip = evt => {
    if (evt.which === 13) {
      document.activeElement.blur();
      document.querySelector('#maincontent').focus();
    }
  };

  handleClick = (evt, cat) => {
    if (cat === 'Left Nav') {
      ReactGA.event({
        category: cat,
        action: 'click',
        label: evt.target.innerText,
      });
    } else {
      ReactGA.event({
        category: cat,
        action: 'click',
      });
    }
  };

  renderSubNavItems = (subnav, parentItem) => {
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const { ENV } = process.env;
    return Object.keys(subnav).map(subNavItem => {
      const link = `/${parentItem}/${subNavItem}`;
      const isCurrentPage =
        parentItem === currentPath[1] && subNavItem === currentPath[2];
      const classNames = classnames({
        'sub-nav__item': true,
        selected: isCurrentPage, // eslint-disable-line
      });
      if (!(ENV === 'internal') && subNavItem === 'service-providers') {
        return '';
      }
      const tabIndex = this.props.isOpen ? 0 : -1;
      return (
        <li
          role="menuitem"
          key={subNavItem}
          className={classNames}
          tabIndex="-1"
        >
          <Link
            className="sub-nav__item-link"
            aria-label={subnav[subNavItem]}
            to={link}
            tabIndex={tabIndex}
          >
            {subnav[subNavItem]}
          </Link>
        </li>
      );
    });
  };

  renderSubNav = (subnav, parentItem) => {
    const subNavItems = this.renderSubNavItems(subnav, parentItem);
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const isCurrentPath = currentPath[1] === parentItem;
    return (
      <SideNavItem key={parentItem} isCurrentPath={isCurrentPath}>
        <p className="main-nav-item__heading">
          {SiteNavStructure[parentItem].title}
          <Icon
            className="main-nav-item__arrow"
            name="caret--down"
            aria-hidden="true"
            description="Menu arrow icon"
          />
        </p>
        <ul
          role="menu"
          aria-label={`${SiteNavStructure[parentItem].title} sub menu`}
          aria-hidden="true"
          className="main-nav__sub-nav"
        >
          {subNavItems}
        </ul>
      </SideNavItem>
    );
  };

  renderSiteItems = navItems =>
    Object.keys(navItems).map(navItem => {
      const navItemObj = navItems[navItem];
      if (navItemObj.subnav) {
        return this.renderSubNav(navItemObj.subnav, navItem);
      }
      const currentPath = browserHistory
        .getCurrentLocation()
        .pathname.split('/');
      const isCurrentPath = currentPath[1] === navItem;
      return (
        <SideNavItem key={navItem} isActiveItem={isCurrentPath}>
          <Link
            aria-label={navItemObj.title}
            tabIndex="0"
            className="main-nav-item__heading"
            to={`/${navItem}`}
          >
            {navItemObj.title}
          </Link>
        </SideNavItem>
      );
    });

  render() {
    const { isOpen, isFinal } = this.props;

    const navItems = this.renderSiteItems(SiteNavStructure);
    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    const version = `Version: ${Packages.dependencies['carbon-components']}`;

    return (
      <nav
        role="navigation"
        aria-label="Page Navigation"
        aria-expanded={isOpen}
        className={classNames}
      >
        <a
          id="skip-to-content"
          tabIndex="0"
          role="button"
          className="skip-to-content"
          onKeyDown={this.handleSkip}
        >
          Skip to main content
        </a>
        <Link to="/" className="side-nav__logo">
          Carbon <span>Design System</span>
        </Link>
        <ul
          role="menu"
          aria-label="Page main menu"
          className="side-nav__main-nav"
          onClick={e => this.handleClick(e, 'Left Nav')}
        >
          {navItems}
        </ul>
        <div className="side-nav__links">
          <Button
            href="https://github.com/carbon-design-system/carbon-design-kit"
            className="side-nav__link bx--btn"
            kind="secondary"
            icon="arrow--right"
            target="_blank"
            role="button"
            iconDescription="sidenav link icon"
            onClick={e => this.handleClick(e, 'Design Kit')}
          >
            Design Kit
          </Button>
          <Button
            href="https://github.com/carbon-design-system/carbon-components"
            className="side-nav__link bx--btn"
            kind="secondary"
            icon="arrow--right"
            target="_blank"
            role="button"
            iconDescription="sidenav link icon"
            onClick={e => this.handleClick(e, 'Developer Kit')}
          >
            GitHub Repo
          </Button>
        </div>
      </nav>
    );
  }
}

export default SideNav;
