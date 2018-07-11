import window from 'window-or-global';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PageHeader from '../PageHeader';
import ImageGrid from '../../custom/ImageGrid';
import ColorContrast from '../../custom/ColorContrast';
import GridExample from '../../custom/GridExample';
import DosAndDonts1 from '../../custom/DosAndDonts/DosAndDonts1';
import DosAndDonts2 from '../../custom/DosAndDonts/DosAndDonts2';
import DosAndDonts3 from '../../custom/DosAndDonts/DosAndDonts3';
import DosAndDonts4 from '../../custom/DosAndDonts/DosAndDonts4';
import DosAndDonts5 from '../../custom/DosAndDonts/DosAndDonts5';
import DosAndDonts6 from '../../custom/DosAndDonts/DosAndDonts6';
import DosAndDonts7 from '../../custom/DosAndDonts/DosAndDonts7';
import DosAndDonts8 from '../../custom/DosAndDonts/DosAndDonts8';
import DosAndDonts9 from '../../custom/DosAndDonts/DosAndDonts9';
import DosAndDonts10 from '../../custom/DosAndDonts/DosAndDonts10';
import DosAndDonts11 from '../../custom/DosAndDonts/DosAndDonts11';
import DosAndDonts12 from '../../custom/DosAndDonts/DosAndDonts12';
import LayerTypes from '../../custom/LayerTypes';
import LayerUsage from '../../custom/LayerUsage';
import TypographyTable from '../../custom/TypographyTable';
import MotionExample from '../../custom/MotionExample';
import MarkdownPage from '../MarkdownPage';
import Video from '../../custom/Video';
import TypeStylesTable from '../../custom/TypeStylesTable';
import FeaturedTiles from '../../custom/FeaturedTiles';
import ArticleTiles from '../../custom/ArticleTiles';
import UIColorContrast from '../../custom/UIColorContrast';
import CursorTable from '../../custom/CursorTable';

class Page extends Component {
  static propTypes = {
    content: PropTypes.any,
    label: PropTypes.string,
    title: PropTypes.string,
  };

  componentDidMount() {
    this.updateClasses();
    this.addCustomComponent();
    this.colorHex();
    document.title = `Carbon Design System | ${this.props.title}`;
    requestAnimationFrame(() => {
      const { hash } = window.location || {};
      if (hash) {
        const id = hash.substr(1);
        const doc = window.document;
        const target = doc.querySelector(`[name=${id}]`) || doc.getElementById(id);
        if (target) {
          target.scrollIntoView();
        }
      }
    });
  }

  componentDidUpdate() {
    this.updateClasses();
    this.addCustomComponent();
    this.colorHex();
    document.title = `Carbon Design System | ${this.props.title}`;
  }

  handleKeyDown = evt => {
    if (evt.keyCode === 37) {
      document
        .querySelector('.sub-nav__item.selected')
        .querySelector('a')
        .focus();
    }
  };

  addPageClass = () => {
    const path = window.location.pathname.split('/');
    const dataAttr = path.length > 3 ? `${path[1]}-${path[3]}-${path[2]}` : `${path[1]}-${path[2]}`;
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

      if (color.textContent === '#f4f7fb') {
        colorBlock.style.backgroundColor = '#E5EAF7';
        colorBlock.style.border = '1px solid #cdd1d4';
      } else {
        colorBlock.style.backgroundColor = color.textContent;
      }

      if (color.textContent === '#ffffff' || color.textContent === '#f4f7fb' || color.textContent === '#dfe3e6') {
        colorBlock.style.border = '1px solid #cdd1d4';
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
      DosAndDonts1,
      DosAndDonts2,
      DosAndDonts3,
      DosAndDonts4,
      DosAndDonts5,
      DosAndDonts6,
      DosAndDonts7,
      DosAndDonts8,
      DosAndDonts9,
      DosAndDonts10,
      DosAndDonts11,
      DosAndDonts12,
      Video,
      TypeStylesTable,
      FeaturedTiles,
      ArticleTiles,
      UIColorContrast,
      CursorTable,
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
          ReactDOM.render(<NewComponent darkBg={needsDarkBg}>{compChildren}</NewComponent>, component);
        }
      } else if (comp === 'MotionExample') {
        const props = component.dataset.props.split(',');
        ReactDOM.render(<NewComponent motionType={props[0]} correctText={props[1]} incorrectText={props[2]} />, component);
      } else if (comp === 'Video') {
        const videoProp = component.dataset.props;
        ReactDOM.render(<NewComponent videoLink={videoProp} />, component);
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
            sibling.nextElementSibling.querySelector('a').classList.add('bx--btn', 'bx--btn--secondary');
          }
        }
      });
    }
  };

  render() {
    const { content, label, title } = this.props;
    const contentType = typeof content;
    const pageContent = contentType === 'object' || title === '' ? content : <MarkdownPage content={content} />;
    return (
      <main role="main" id="maincontent" tabIndex="-1" data-page={this.addPageClass()} onKeyDown={this.handleKeyDown}>
        <PageHeader label={label} title={title} />
        {pageContent}
      </main>
    );
  }
}

export default Page;
