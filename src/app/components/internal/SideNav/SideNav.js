import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import classnames from 'classnames';
import ReactGA from 'react-ga';
import { Icon, Button } from 'carbon-components-react';

import SiteContent from '../../../../data/sitecontent.js';
import SiteNavStructure from '../../../../data/site-nav-structure.json';
import SideNavItem from '../SideNavItem/SideNavItem';
import GlobalSearch from '../GlobalSearch/GlobalSearch';

class SideNav extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    isFinal: PropTypes.bool,
    onToggleBtnClick: PropTypes.func,
    onClick: PropTypes.func,
  };

  state = {
    results: [],
    relatedResults: [],
    currentQuery: '',
    val: '',
    activeSearch: false,
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

  clearInput = () => {
    this.searchInput.value = '';
    this.setState({
      val: '',
      activeSearch: false,
    });
  };

  crawlSiteContent = query => {
    const newResults = [];
    const newRelatedResults = [];
    let prevChild = '';
    Object.keys(SiteContent).map(o => {
      const currentObj = SiteContent[o];
      const childName = currentObj.child.replace(/[-]/g, ' ');
      if ((childName.includes(query) || childName.includes(query.toLowerCase())) && currentObj.child !== prevChild) {
        newResults.push(currentObj);
        this.setState({
          results: newResults,
          currentQuery: query,
        });
        prevChild = currentObj.child;
      } else {
        if (!(query.length <= 1)) {
          this.setState({
            results: newResults,
          });
        }
      }
      if (
        currentObj.content.includes(query) ||
        currentObj.content.includes(query.toLowerCase()) ||
        currentObj.content.includes(query.charAt(0).toUpperCase() + query.substring(1))
      ) {
        newRelatedResults.push(currentObj);
        this.setState({
          relatedResults: newRelatedResults,
          currentQuery: query,
        });
      } else {
        if (!(query.length <= 1)) {
          this.setState({
            relatedResults: newRelatedResults,
          });
        }
      }
      return null;
    });
  };

  filterResults = e => {
    const val = e.target.value;
    this.setState({
      val,
    });
    if (val.length >= 1) {
      this.setState({
        activeSearch: true,
      });
      this.crawlSiteContent(val);
    } else {
      this.setState({
        results: [],
        relatedResults: [],
        activeSearch: false,
      });
    }
  };

  renderSiteItems = navItems =>
    Object.keys(navItems).map(navItem => {
      const counter = Math.floor(Math.random() * 500) + 1;
      const navItemObj = navItems[navItem];
      const { ENV } = process.env;
      const isInternal = ENV !== 'internal' && navItem === 'your-product-on-ibm-cloud';
      if (isInternal) {
        return '';
      }
      if (navItemObj.subnav) {
        return this.renderSubNav(navItemObj.subnav, navItem);
      }
      const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
      const isCurrentPath = currentPath[1] === navItem;
      return (
        <SideNavItem key={`navItem-${counter}`} isActiveItem={isCurrentPath}>
          {({ open: isItemOpen }) => (
            <Link
              aria-label={navItemObj.title}
              tabIndex={this.props.isOpen && isItemOpen ? 0 : -1}
              className="main-nav-item__heading"
              to={`/${navItem}`}
            >
              {navItemObj.title}
            </Link>
          )}
        </SideNavItem>
      );
    });

  renderSubNav = (subnav, parentItem) => {
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const isCurrentPath = currentPath[1] === parentItem;
    let counter = Math.floor(Math.random() * 500) + 1;
    return (
      <SideNavItem key={`${parentItem}${counter}`} isCurrentPath={isCurrentPath}>
        {({ open: isItemOpen }) => [
          <p key={`${parentItem}${counter}`} className="main-nav-item__heading main-nav-item__list">
            {SiteNavStructure[parentItem].title}
            <Icon
              className="main-nav-item__arrow"
              name="caret--down"
              aria-hidden="true"
              description="Menu arrow icon"
              alt="Menu arrow icon"
            />
          </p>,
          <ul
            role="menu"
            aria-label={`${SiteNavStructure[parentItem].title} sub menu`}
            aria-hidden="true"
            className="main-nav__sub-nav"
            key={`${parentItem}${++counter}`}
          >
            {this.renderSubNavItems(subnav, parentItem, isItemOpen)}
          </ul>,
        ]}
      </SideNavItem>
    );
  };

  renderInnerSubNav = (parent, parentKey, isOpen) => {
    const { subnav } = parent;
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    const isCurrentPath = currentPath[1] === parentKey;
    let counter = Math.floor(Math.random() * 500) + 1;
    return (
      <SideNavItem type="sub" key={`${parentKey}${counter}`} isCurrentPath={isCurrentPath}>
        {({ open: isItemOpen, onKeyDown }) => [
          <p key={`${parentKey}${counter}`} className="sub-nav__item" onKeyDown={onKeyDown} tabIndex={isOpen ? 0 : undefined}>
            {parent.title}
            <Icon
              className="sub-nav-item__arrow"
              name="caret--down"
              aria-hidden="true"
              description="Menu arrow icon"
              alt="Menu arrow icon"
            />
          </p>,
          <ul
            key={`${parentKey}${++counter}`}
            role="menu"
            aria-label={`${parent.title} sub menu`}
            aria-hidden="true"
            className="sub-nav__inner-sub-nav"
          >
            {this.renderInnerSubNavItems(subnav, parentKey, isItemOpen)}
          </ul>,
        ]}
      </SideNavItem>
    );
  };

  renderInnerSubNavItems = (subnav, parentItem, isItemOpen) => {
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    return Object.keys(subnav).map(subNavItem => {
      const link = `/${parentItem}/${subNavItem}`;
      const isCurrentPage = parentItem === currentPath[1] && subNavItem === currentPath[2];
      const classNames = classnames({
        'sub-nav__item': true,
        'sub-nav__item--sub': true,
        selected: isCurrentPage, // eslint-disable-line
      });
      const subClassNames = classnames({
        'sub-nav__item-link': true,
        'sub-nav__item-link--sub': true,
      });
      const tabIndex = this.props.isOpen && isItemOpen ? 0 : -1;
      return (
        <li role="menuitem" key={subNavItem} className={classNames} tabIndex="-1">
          <Link className={subClassNames} aria-label={subnav[subNavItem]} to={link} tabIndex={tabIndex}>
            {subnav[subNavItem]}
          </Link>
        </li>
      );
    });
  };

  renderSubNavItems = (subnav, parentItem, isItemOpen) => {
    const currentPath = browserHistory.getCurrentLocation().pathname.split('/');
    return Object.keys(subnav).map(subNavItem => {
      if (typeof subnav[subNavItem] === 'object') {
        return this.renderInnerSubNav(subnav[subNavItem], subNavItem, isItemOpen);
      }
      const link = `/${parentItem}/${subNavItem}`;
      const isCurrentPage = parentItem === currentPath[1] && subNavItem === currentPath[2];
      const classNames = classnames({
        'sub-nav__item': true,
        selected: isCurrentPage, // eslint-disable-line
      });
      const tabIndex = this.props.isOpen && isItemOpen ? 0 : -1;
      return (
        <li role="menuitem" key={subNavItem} className={classNames} tabIndex="-1">
          <Link className="sub-nav__item-link" aria-label={subnav[subNavItem]} to={link} tabIndex={tabIndex}>
            {subnav[subNavItem]}
          </Link>
        </li>
      );
    });
  };

  render() {
      const { isOpen, isFinal } = this.props;

      const navItems = this.renderSiteItems(SiteNavStructure);
      const classNames = classnames({
        'side-nav': true,
        'side-nav__closed': !isOpen,
        'side-nav__closed--final': isFinal && !isOpen,
      });

      const searchClasses = classnames({
        'bx--search-close': true,
        'bx--search-close--hidden': this.state.val.length < 1,
      });
      const bottomClasses = classnames({
        'side-nav__bottom-container': true,
        'side-nav__bottom-container--hidden': this.state.val.length > 0,
      });
      return (
        <nav role="navigation" aria-label="Page Navigation" aria-expanded={isOpen} className={classNames}>
          <div className="side-nav__top-container">
            <a id="skip-to-content" href="#maincontent" className="skip-to-content" onKeyDown={this.handleSkip}>
              Skip to main content
            </a>
            <Link to="/" className="side-nav__logo">
              Carbon <span>Design System</span>
            </Link>
            <div className="bx--search bx--search--sm" role="search">
              <svg className="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"
                  fillRule="nonzero"
                />
              </svg>
              <input
                type="text"
                aria-label="Search"
                onInput={this.filterResults}
                className="bx--search-input"
                placeholder="Search"
                ref={searchInput => {
                  this.searchInput = searchInput;
                }}
              />
              <svg
                className={searchClasses}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fillRule="evenodd"
                onClick={this.clearInput}
              >
                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z" />
              </svg>
            </div>
          </div>
          <GlobalSearch
            results={this.state.results}
            relatedResults={this.state.relatedResults}
            val={this.state.val}
            currentQuery={this.state.currentQuery}
            activeSearch={this.state.activeSearch}
          />
          <div className={bottomClasses}>
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
                href="https://github.com/ibm/carbon-design-kit"
                className="side-nav__link bx--btn"
                kind="secondary"
                icon="arrow--right"
                target="_blank"
                role="button"
                iconDescription="sidenav link icon"
                onClick={e => this.handleClick(e, 'Design Kit')}
              >
                Design kit
              </Button>
              <Button
                href="/resources#github"
                className="side-nav__link bx--btn"
                kind="secondary"
                icon="arrow--right"
                role="button"
                iconDescription="sidenav link icon"
                onClick={e => this.handleClick(e, 'Github Repos')}
              >
                GitHub repos
              </Button>
            </div>
          </div>
        </nav>
      );
    }
  }

  export default SideNav;
