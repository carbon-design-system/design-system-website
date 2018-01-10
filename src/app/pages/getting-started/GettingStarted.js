import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../components/internal/Page';
import FourOhFour from '../404';

import MarkdownPage from '../../components/internal/MarkdownPage';

import ServiceProviders from './ServiceProviders';

class GettingStarted extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  };

  render() {
    const { params } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1);
    const contentFile = require(`../../../content/getting-started/${params.name}/${params.name}.md`);
    const processENV = process.env.ENV;
    if (params.name === 'service-providers' && !(processENV === 'internal')) {
      return <FourOhFour />;
    }
    let content;
    if (paramsName === 'designers') {
      content = <Designers currentPage={paramsPage} />;
    } else if (paramsName === 'developers') {
      content = <Developers currentPage={paramsPage} />;
    } else if (paramsName === 'service-providers') {
      content = <ServiceProviders currentPage={paramsPage} />;
    } else if (paramsName === 'faq') {
      content = <faq currentPage={paramsPage} />;
    } else {
      content = (
        <MarkdownPage content={require(`../../../content/getting-started/${paramsName}/${paramsName}.md`)} />
      );
    }
    return (
      <Page
        label="Getting started"
        title={title.replace(/-/g, ' ')}
        content={contentFile}
      />
    );
  }
}

export default GettingStarted;
