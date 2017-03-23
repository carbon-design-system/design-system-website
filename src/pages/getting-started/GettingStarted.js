import React, { PropTypes } from 'react';
import Page from '../../internal/Page';

class GettingStarted extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const {
      params,
    } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1);
    const contentFile = require(`../../content/getting-started/${params.name}/${params.name}.md`);
    return (
      <Page label="Getting started" title={title} content={contentFile} />
    );
  }
}

export default GettingStarted;
