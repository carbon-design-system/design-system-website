import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';

class Themes extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/whats-new/whats-new.md');
    return (
      <Page label="" title="What's New" content={contentFile} />
    );
  }
}

export default Themes;
