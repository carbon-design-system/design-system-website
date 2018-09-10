import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';

class Shell extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/ui-shell/ui-shell.md');
    return (
      <Page label="" title="What's New" content={contentFile} />
    );
  }
}

export default Shell;
