import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import Page from '../../internal/Page';
import Content from './Content';

class Guidelines extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const {
      params,
    } = this.props;
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1);
    const content = (params.name === 'content') ? (
      <Content currentPage={params.page} />
    ) : (
      <div className="page">
        <Markdown
          options={{ html: true }}
          source={require(`../../content/guidelines/${params.name}/${params.name}.md`)} // eslint-disable-line
        />
      </div>
    );
    return (
      <Page label="Guidelines" title={title} content={content} />
    );
  }
}

export default Guidelines;
