import React from 'react';
import PropTypes from 'prop-types';
import FourOhFour from '../404';

import Page from '../../components/internal/Page';

class Duo extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/getting-started/carbon-and-duo/carbon-and-duo.md');
    const { ENV } = process.env;
    if (ENV !== 'internal') {
      return <FourOhFour />;
    } else {
      return (
        <Page label="" title="Carbon and Duo" content={contentFile} />
      );
    }
  }
}

export default Duo;
