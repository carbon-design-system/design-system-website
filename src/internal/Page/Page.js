import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PageHeader from '../../internal/PageHeader';
import ImageGrid from '../../internal/ImageGrid';
import ColorContrast from '../../internal/ColorContrast';
import GridExample from '../../internal/GridExample';
import DosAndDonts1 from '../../internal/DosAndDonts/DosAndDonts1';
import DosAndDonts2 from '../../internal/DosAndDonts/DosAndDonts2';
import DosAndDonts3 from '../../internal/DosAndDonts/DosAndDonts3';
import DosAndDonts4 from '../../internal/DosAndDonts/DosAndDonts4';
import LayerTypes from '../../internal/LayerTypes';
import LayerUsage from '../../internal/LayerUsage';
import TypographyTable from '../../internal/TypographyTable';
import BrandColors from '../../internal/BrandColors';
import MotionExample from '../../internal/MotionExample';
import MarkdownPage from '../../internal/MarkdownPage';
// import Icon from '@console/bluemix-components-react/dist/components/Icon';
// import glamorous from 'glamorous';

// const TitleAnchor = glamorous.a({
//   color: 'red',
// });

class Page extends Component {
  static propTypes = {
    content: PropTypes.any,
    label: PropTypes.string,
    title: PropTypes.string,
  };

  componentDidMount() {
    this.updateClasses();
    this.addCustomComponent();
    this.addAnchor();
    this.colorHex();
    document.title = `Carbon Design System | ${this.props.title}`;
  }

  componentDidUpdate() {
    this.updateClasses();
    this.addCustomComponent();
    this.addAnchor();
    this.colorHex();
    document.title = `Carbon Design System | ${this.props.title}`;
  }

  handleKeyDown = evt => {
    if (evt.keyCode === 37) {
      document.querySelector('.sub-nav__item.selected').querySelector('a').focus();
    }
  };

  createAnchor = id => {
    const anchor = document.createElement('a');
    anchor.href = `#${id}`;
    anchor.classList.add('title-anchor');
    anchor.insertAdjacentHTML(
      'afterbegin',
      `<svg width="24" height="24" viewBox="0 0 24 24" fill-rule="evenodd">
          <path d="M22.3 1.7C21.2.7 19.8 0 18.2 0c-1.6 0-3.1.7-4.1 1.7l-2.5 2.5c-1.1 1.1-1.7 2.5-1.7 4.1 0 .6.1 1.2.3 1.8-.7-.2-1.2-.3-1.9-.3-1.6 0-3.1.7-4.1 1.7L1.7 14C.7 15.1 0 16.5 0 18.2c0 1.6.6 3.1 1.7 4.2 1 1 2.5 1.6 4.1 1.6 1.6 0 3.1-.7 4.1-1.7l2.5-2.5c1.1-1.1 1.7-2.5 1.7-4.1 0-.6-.1-1.2-.3-1.8.6.2 1.2.3 1.8.3 1.6 0 3.1-.7 4.1-1.7l2.5-2.5C23.3 8.9 24 7.5 24 5.8c0-1.6-.7-3-1.7-4.1zM10.9 18.2l-2.5 2.5c-.7.7-1.6 1.1-2.6 1.1s-2-.4-2.6-1c-.7-.7-1-1.6-1-2.6s.4-1.9 1.1-2.6l2.5-2.5c.6-.7 1.6-1.1 2.5-1.1.6 0 1.2.2 1.7.4l-3.2 3.2 1.5 1.5 3.2-3.2c.3.5.4 1.1.4 1.7.1 1-.3 2-1 2.6zm9.8-9.8l-2.5 2.5c-.7.7-1.6 1.1-2.6 1.1-.6 0-1.2-.2-1.7-.4l3.2-3.2-1.5-1.5-3.2 3.2c-.2-.6-.4-1.1-.4-1.8 0-1 .4-1.9 1.1-2.6l2.5-2.5c.7-.7 1.6-1.1 2.6-1.1s1.9.4 2.6 1.1c.7.7 1.1 1.6 1.1 2.6-.1 1-.5 1.9-1.2 2.6z" />
        </svg>`
    );
    return anchor;
  };

  addAnchor = () => {
    [...document.querySelectorAll('.title-anchor')].forEach(titleAnchor => {
      titleAnchor.parentNode.removeChild(titleAnchor);
    });
    [...document.querySelectorAll('h2')].forEach(heading => {
      if (
        heading.id.split() === [''] ||
        heading.classList.contains('component-variation__name')
      ) {
        return;
      }
      heading.insertAdjacentElement('afterbegin', this.createAnchor(heading.id));
    });
  };

  addPageClass = () => {
    const path = window.location.pathname.split('/');
    const dataAttr = path.length > 3
      ? `${path[1]}-${path[3]}-${path[2]}`
      : `${path[1]}-${path[2]}`;
    return dataAttr;
  };

  colorHex = () => {
    const tableCells = document.querySelectorAll('td');
    const colors = [...tableCells].filter(color => {
      let node;
      if (color.textContent.includes('#')) {
        node = color;
      }
      return node;
    });

    [...colors].forEach(color => {
      const colorBlock = document.createElement('span');
      colorBlock.classList.add('color-block');

      if (color.textContent.length > 7 && color.textContent.length < 20) {
        colorBlock.style.left = '7rem';
      } else if (color.textContent.length > 7) {
        colorBlock.style.left = '10rem';
      }

      if (color.textContent === '#3d70b2 @ 10%') {
        colorBlock.style.backgroundColor = '#E5EAF7';
        colorBlock.style.border = '1px solid #8c9ba5';
      } else {
        colorBlock.style.backgroundColor = color.textContent;
      }

      if (
        color.textContent === '#ffffff' ||
        color.textContent === '#f5f7fa' ||
        color.textContent === '#f0f3f6'
      ) {
        colorBlock.style.border = '1px solid #8c9ba5';
      }

      color.appendChild(colorBlock);
    });
  };

  addCustomComponent = () => {
    const customComponents = {
      ImageGrid,
      ColorContrast,
      GridExample,
      LayerTypes,
      LayerUsage,
      TypographyTable,
      MotionExample,
      BrandColors,
      DosAndDonts1,
      DosAndDonts2,
      DosAndDonts3,
      DosAndDonts4,
    };

    const insertComponent = [...document.querySelectorAll('[data-insert-component]')];
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
        if (!component.querySelector('.image-grid')) {
          ReactDOM.render(
            <NewComponent darkBg={needsDarkBg}>
              {compChildren}
            </NewComponent>,
            component
          );
        }
      } else if (comp === 'MotionExample') {
        const props = component.dataset.props.split(',');
        ReactDOM.render(
          <NewComponent
            motionType={props[0]}
            correctText={props[1]}
            incorrectText={props[2]}
          />,
          component
        );
      } else {
        ReactDOM.render(<NewComponent />, component);
      }
    });
  };

  updateClasses = () => {
    // Make link buttons
    const linkButtons = [...document.querySelectorAll('hr')];
    if (linkButtons) {
      linkButtons.forEach(sibling => {
        if (sibling.nextElementSibling.tagName === 'P') {
          if (sibling.nextElementSibling.querySelector('a')) {
            sibling.nextElementSibling
              .querySelector('a')
              .classList.add('bx--btn', 'bx--btn--secondary');
          }
        }
      });
    }
  };

  render() {
    const { content, label, title } = this.props;
    const contentType = typeof content;
    const pageContent = contentType === 'object' || title === ''
      ? content
      : <MarkdownPage content={content} />;
    return (
      <main
        role="main"
        id="maincontent"
        aria-labelledby="page-title"
        tabIndex="-1"
        data-page={this.addPageClass()}
        onKeyDown={this.handleKeyDown}
      >
        <PageHeader label={label} title={title} />
        {pageContent}
      </main>
    );
  }
}

export default Page;
