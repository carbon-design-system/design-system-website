import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';
import MarkdownPage from '../../components/internal/MarkdownPage';
import ServiceProviders from './ServiceProviders';
import FourOhFour from '../404';

class YourProductOnIBM extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;
    const processENV = process.env.ENV;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1).replace('-', ' ');
    if (params.name === 'user-flow' && !(processENV === 'internal')) {
      return <FourOhFour />;
    }
    if (params.name === 'service-providers' && !(processENV === 'internal')) {
      return <FourOhFour />;
    }
    let content;
    if (params.name === 'service-providers') {
      content = <ServiceProviders currentPage={params.page} />;
    } else {
      content = <MarkdownPage content={require(`../../../content/your-product-on-ibm-cloud/${params.name}/${params.name}.md`)} />;
    }
    return <Page label="Your Product on IBM Cloud" title={title} content={content} />;
  }
}

export default YourProductOnIBM;
