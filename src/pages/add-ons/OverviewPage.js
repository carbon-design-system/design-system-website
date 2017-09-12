import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../../internal/Page';

class OverviewPage extends Component {
  render() {
    const contentFile = require('../../content/add-ons/overview.md');
    return <Page label="Component" title="Overview" content={contentFile} />;
  }
}

export default OverviewPage;
