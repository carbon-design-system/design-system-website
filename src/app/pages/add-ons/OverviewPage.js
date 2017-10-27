/*
  OverviewPage.js
  Overview page for the Add-ons components.
*/

import React, { Component } from 'react';
import Page from '../../components/internal/Page';

class OverviewPage extends Component {
  render() {
    const contentFile = require('../../../content/add-ons/overview.md');
    return <Page label="Add-ons" title="Overview" content={contentFile} />;
  }
}

export default OverviewPage;
