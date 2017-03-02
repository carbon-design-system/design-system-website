import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Tabs, Tab } from '@console/bluemix-components-react';

class PageTabs extends Component {
  updateTab = (evt) => {
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
      <Tabs className="bx--global-light-ui page-tabs" selected={currentTab} onClick={this.updateTab}>
        {children}
      </Tabs>
    );
  }
}

export default PageTabs;
