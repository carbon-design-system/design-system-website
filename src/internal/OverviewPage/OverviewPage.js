import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../Page';

class OverviewPage extends Component {
  render() {
    const btnExample = require('./images/button-example.png'); // How to import image

    // Insert all content inside the page div
    const content = (
    <div className="page">
      <Link to="/components/button">
        <img src={btnExample} />
      </Link>
    </div>
  );
    return <Page label="Components" title="Overview" content={content} />;
  }
}

export default OverviewPage;
