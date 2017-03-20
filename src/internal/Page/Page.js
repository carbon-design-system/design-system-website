import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';
import PageHeader from '../../internal/PageHeader';
import ImageGrid from '../../internal/ImageGrid';
import ColorContrast from '../../internal/ColorContrast';
import GridExample from '../../internal/GridExample';
import LayerTypes from '../../internal/LayerTypes';
import LayerUsage from '../../internal/LayerUsage';
import TypographyTable from '../../internal/TypographyTable';
import BrandColors from '../../internal/BrandColors';

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
      ColorContrast,
      GridExample,
      LayerTypes,
      LayerUsage,
      TypographyTable,
      BrandColors
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

    // First paragraph margin styling
    const firstChildren = [... document.querySelectorAll('.page')];
    firstChildren.forEach(child => {
      const firstPageChild = child.firstChild;
      if (firstPageChild.querySelector('span p') && firstPageChild.querySelector('span p').innerHTML === '') {
        firstPageChild.querySelector('span p').style.display = 'none';
      }
      const paragraphs = [... child.querySelectorAll('div span p')];
      paragraphs.forEach(paragraph => {
        if (paragraph.innerHTML === '') {
          paragraph.style.display = 'none';
        }
      });
    });
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
