import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';
import Content from './Content';

class Guidelines extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const {
      params,
    } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1).replace('-', ' ');
    const content = (params.name === 'content') ?
    (<Content currentPage={params.page} />) :
    (<MarkdownPage content={require(`../../content/guidelines/${params.name}/${params.name}.md`)} />);
    return (
      <Page label="Guidelines" title={title} content={content} />
    );
  }
}

export default Guidelines;
