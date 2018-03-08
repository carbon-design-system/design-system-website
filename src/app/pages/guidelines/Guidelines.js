import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../components/internal/Page';
import MarkdownPage from '../../components/internal/MarkdownPage';
import FourOhFour from '../404';

import Content from './Content';
import Accessibility from './Accessibility';

class Guidelines extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const {
      params,
    } = this.props;
    const processENV = process.env.ENV;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1).replace('-', ' ');
    if (params.name === 'bluemix-brand' && !(processENV === 'internal')) {
      return <FourOhFour />;
    }
    let content;
    if (params.name === 'content') {
      content = <Content currentPage={params.page} />;
    } else if (params.name === 'accessibility') {
      content = <Accessibility currentPage={params.page} />;
    } else {
      content = <MarkdownPage content={require(`../../../content/guidelines/${params.name}/${params.name}.md`)} />;
    }
    return (
      <Page label="Guidelines" title={title} content={content} />
    );
  }
}

export default Guidelines;
