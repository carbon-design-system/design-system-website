import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';

class Themes extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/utilities/disabled-states/disabled-states.md');
    return (
      <Page label="utilities" title="Disabled States" content={contentFile} />
    );
  }
}

export default Themes;
