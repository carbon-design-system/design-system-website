import React from 'react';
import PropTypes from 'prop-types';
import FourOhFour from '../404';

import Page from '../../components/internal/Page';

class Themes extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const contentFile = require('../../../content/duo/duo.md');
    const processENV = process.env.ENV;
    if (processENV === 'external') {
      return <FourOhFour />;
    } else {
      return (
        <Page label="" title="Duo" content={contentFile} />
      );
    }
  }
}

export default Themes;
