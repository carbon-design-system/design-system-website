import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import PageHeader from '../../internal/PageHeader';
import ImageGrid from '../../internal/ImageGrid';
import ColorContrast from '../../internal/ColorContrast';

class Page extends Component {
  static propTypes = {
    content: PropTypes.any,
    label: PropTypes.string,
    title: PropTypes.string,
  }

  componentDidMount() {
    this.updateClasses();
    this.addCustomComponent();
  }

  componentDidUpdate() {
    this.updateClasses();
    this.addCustomComponent();
  }

  addCustomComponent = () => {
    const customComponents = {
      ImageGrid,
      ColorContrast
    };

    const insertComponent = [... document.querySelectorAll('[data-insert-component]')];
    insertComponent.forEach(component => {
      const comp = component.dataset.insertComponent;
      const NewComponent = customComponents[comp];
      if (comp === 'ImageGrid') {
        let needsDarkBg;
        if (component.dataset.darkBg) {
          needsDarkBg = component.dataset.darkBg.split(',');
        } else {
          needsDarkBg = [];
        }
        const compChildren = component.innerHTML;
        component.classList.add('custom-component-parent');
        ReactDOM.render(
          <NewComponent darkBg={needsDarkBg}>
            {compChildren}
          </NewComponent>,
          component
        );
      } else {
        ReactDOM.render(
          <NewComponent />,
          component
        );
      }
    });
  }

  updateClasses = () => {
    // Make link buttons
    const linkButtons = [... document.querySelectorAll('hr')];
    if (linkButtons) {
      linkButtons.forEach(sibling => {
        if (sibling.nextElementSibling.tagName === 'P') {
          if (sibling.nextElementSibling.querySelector('a')) {
            sibling.nextElementSibling.querySelector('a').classList.add('bx--btn', 'bx--btn--secondary');
          }
        }
      });
    }

    // Code blocks
    const codeBlocks = [... document.querySelectorAll('pre')];
    if (codeBlocks) {
      codeBlocks.forEach(block => {
        block.classList.add('bx--snippet', 'bx--snippet--code');
        hljs.highlightBlock(block.querySelector('code'));
      });
    }

    // First paragraph margin styling
    const firstIntro = document.querySelector('div span p strong');
    const firstChild = document.querySelector('.page div span').firstChild;
    if (firstIntro && firstChild) {
      if (firstIntro.parentElement === firstChild) {
        firstIntro.parentElement.style.marginBottom = '5rem';
      }
    }
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
