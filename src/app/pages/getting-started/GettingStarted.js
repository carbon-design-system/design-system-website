import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/internal/Page';

import MarkdownPage from '../../components/internal/MarkdownPage';

class GettingStarted extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1);
    let content = <MarkdownPage content={require(`../../../content/getting-started/${params.name}/${params.name}.md`)} />;
    return <Page label="Getting started" title={title.replace(/-/g, ' ')} content={content} />;
  }
}

export default GettingStarted;
