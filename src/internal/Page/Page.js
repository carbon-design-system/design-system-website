import React, { PropTypes, Component } from 'react';
import Markdown from 'react-remarkable';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import PageHeader from '../../internal/PageHeader';

class Page extends Component {
  static propTypes = {
    content: PropTypes.any,
    label: PropTypes.string,
    title: PropTypes.string,
  }

  componentDidMount() {
    this.updateClasses();
  }

  componentDidUpdate() {
    this.updateClasses();
  }

  updateClasses = () => {
    // const codeBlocks = [... document.querySelectorAll('pre')];
    // codeBlocks.forEach(block => {
    //   block.classList.add('bx--snippet', 'bx--snippet--code');
    //   hljs.highlightBlock(block.querySelector('code'));
    // });
    // const firstIntro = document.querySelector('div span p strong');
    // firstIntro.parentElement.style.marginBottom = '5rem';
    // const linkButtons = [... document.querySelectorAll('hr')];
    // linkButtons.forEach(sibling => {
    //   if (sibling.nextElementSibling.tagName === 'P') {
    //     if (sibling.nextElementSibling.querySelector('a')) {
    //       sibling.nextElementSibling.querySelector('a').classList.add('bx--btn', 'bx--btn--secondary');
    //     }
    //   }
    // });
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
        {pageContent}
      </div>
    );
  }
}

export default Page;
