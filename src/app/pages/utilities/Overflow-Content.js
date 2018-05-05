import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';

class Themes extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/utilities/overflow-content/overflow-content.md');
    return (
      <Page label="Utilities" title="Overflow Content" content={contentFile} />
    );
  }
}

export default Themes;
