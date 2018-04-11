import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';
import MarkdownPage from '../../components/internal/MarkdownPage';

class Utilities extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const { params } = this.props;
    const content = (
      <MarkdownPage content={require(`../../../content/utilities/${params.name}/${params.name}.md`)} />
    );
    return (
      <Page label="" title="Utilities" content={content} />
    );
  }
}

export default Utilities;
