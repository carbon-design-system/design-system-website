import React, { PropTypes, Component } from 'react';
import Markdown from 'react-remarkable';
import PageTransition from 'react-router-page-transition';

import PageHeader from '../../internal/PageHeader';

class Page extends Component {
  static propTypes = {
    content: PropTypes.any,
    label: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const {
      content,
      label,
      title,
    } = this.props;

    const contentType = typeof content;
    const pageContent = (contentType === 'object') ?
      content : (
      <div className="page">
        <Markdown options={{ html: true, breaks: true }} source={content} />
      </div>
      );
    return (
      <div>
        <PageHeader
          label={label}
          title={title}
        />
        <PageTransition>
          {pageContent}
        </PageTransition>
      </div>
    );
  }
}

export default Page;
