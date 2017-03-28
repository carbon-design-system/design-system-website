import React, { PropTypes } from 'react';
import Page from '../../internal/Page';
import FourOhFour from '../404';

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
    const processENV = process.env;
    if (params.name === 'service-providers' && !(processENV.ENV === 'internal')) {
      return <FourOhFour />;
    }
    return (
      <Page label="Getting started" title={title.replace(/-/g, ' ')} content={contentFile} />
    );
  }
}

export default GettingStarted;
