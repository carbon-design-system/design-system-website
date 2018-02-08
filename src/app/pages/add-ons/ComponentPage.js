/*
  ComponentPage.js
  Component page component for the add-ons component. A simpler version of the main ComponentPage.js.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodePage from '../../components/internal/CodePage';
import Page from '../../components/internal/Page';

import OverviewPage from './OverviewPage';

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

    const componentTitle =
      currentComponent.replace(/-/g, ' ').charAt(0).toUpperCase() +
      currentComponent.replace(/-/g, ' ').substring(1);
    const codePageContent = <CodePage component={currentComponent} hideViewFullRender />;
    return <Page label="Add-ons" title={componentTitle} content={codePageContent} />;
  }
}

export default ComponentPage;
