import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { Tabs } from 'carbon-components-react';
import ReactGA from 'react-ga';

class PageTabs extends Component {
  static propTypes = {
    tabs: PropTypes.array,
    currentPage: PropTypes.string,
    children: PropTypes.any
  }

  updateTab = (evt) => {
    ReactGA.event({
      category: 'Tabs',
      action: 'click',
      label: evt.target.innerText
    });
    if (evt.target.classList.contains('bx--tabs__nav-link')) {
      browserHistory.push(evt.target.getAttribute('href'));
    }
  }

  render() {
    const {
      tabs,
      currentPage,
      children,
    } = this.props;

    const currentTab = tabs.indexOf(currentPage);

    return (
      <Tabs className="page-tabs" selected={currentTab} onClick={this.updateTab}>
        {children}
      </Tabs>
    );
  }
}

export default PageTabs;
