import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';
import OverviewPage from './OverviewPage';

import Page from '../../internal/Page';

class ComponentPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;

    const currentComponent = params.name;
    if (currentComponent === 'overview') {
      return <OverviewPage />;
    }

    if (params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    const componentTitle =
      currentComponent.replace(/-/g, ' ').charAt(0).toUpperCase() +
      currentComponent.replace(/-/g, ' ').substring(1);
    const codePageContent = <CodePage component={currentComponent} />;
    return <Page label="component" title={componentTitle} content={codePageContent} />;
  }
}

export default ComponentPage;
