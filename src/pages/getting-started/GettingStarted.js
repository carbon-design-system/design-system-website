import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
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
    const contentFile = require(`../../content/getting-started/${params.name}/${params.name}.md`); // eslint-disable-line
    const content = (
      <div className="page">
        <Markdown options={{ html: true }} source={contentFile} />
      </div>
    );
    return (
      <Page label="Getting started" title={title} content={content} />
    );
  }
}

export default GettingStarted;
