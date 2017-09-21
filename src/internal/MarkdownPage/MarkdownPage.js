import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';

class MarkdownPage extends Component {
  static propTypes = {
    content: PropTypes.any
  };

  render() {
    const { content } = this.props;
    const md = new Markdown({
      html: true
    });

    return (
      <div className="page">
        <div className="page_md" dangerouslySetInnerHTML={{ __html: md.renderInline(content) }} />
      </div>
    );
  }
}

export default MarkdownPage;
