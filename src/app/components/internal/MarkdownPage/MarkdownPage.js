import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';
import MarkdownTaskLists from 'markdown-it-task-lists';

class MarkdownPage extends Component {
  static propTypes = {
    content: PropTypes.any
  };

  render() {
    const { content } = this.props;
    const md = new Markdown({
      html: true
    });
    md.use(MarkdownTaskLists, { enabled: true });
    // console.log(md.render(content));
    return (
      <div className="page">
        <div
          className="page_md"
          dangerouslySetInnerHTML={{ __html: md.render(content) }}
        />
      </div>
    );
  }
}

export default MarkdownPage;
