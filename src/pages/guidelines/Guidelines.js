import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';
import Content from './Content';
import FourOhFour from '../404';

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
    const content = (params.name === 'content') ?
    (<Content currentPage={params.page} />) :
    (<MarkdownPage content={require(`../../content/guidelines/${params.name}/${params.name}.md`)} />);
    return (
      <Page label="Guidelines" title={title} content={content} />
    );
  }
}

export default Guidelines;
