import React from 'react';
import Page from '../internal/Page';

class Resources extends React.Component {

  render() {
    const content = require('../content/resources/resources.md');
    return (
      <Page title="Resources" label="" content={content} />
    );
  }
}

export default Resources;
