import React, { Component, PropTypes } from 'react';
import Markdown from 'markdown-it';
import ComponentExample from '../ComponentExample/ComponentExample';

class CodePage extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  renderVariation = (parent, variation, title) => {
    let htmlFile;
    if (parent === 'text-input' && variation === 'text-area') {
      htmlFile = require('@console/bluemix-components/src/components/text-area/text-area.html');
    } else {
      htmlFile = require(`@console/bluemix-components/src/components/${parent}/${variation}.html`);
    }

    if (parent === 'card') {
      const oldPath = '/globals/assets/images/placeholder-icon-32x32.svg';
      const newPath = require('../../assets/images/placeholder.svg');
      htmlFile = htmlFile.replace(oldPath, newPath);
    }
    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <ComponentExample component={parent} htmlFile={htmlFile} />
      </div>
    );
  }

  renderJavascriptContent = (component) => {
    let javascriptSection;
    try {
      javascriptSection = require(`@console/bluemix-components/src/components/${component}/README.md`);
    } catch (e) {
      javascriptSection = '';
    }
    return javascriptSection;
  }

  render() {
    const component = this.props.component;
    const componentInfo = require(`../../data/components/${component}.js`); // eslint-disable-line
    const description = componentInfo.desc;
    const md = new Markdown({
      html: true
    });
    let componentContent;
    if (componentInfo.variations) {
      componentContent =
      Object.keys(componentInfo.variations).map(variation =>
        this.renderVariation(component, variation, componentInfo.variations[variation]));
    } else {
      const htmlFile = require(`@console/bluemix-components/src/components/${component}/${component}.html`); // eslint-disable-line
      componentContent = (
        <ComponentExample component={component} htmlFile={htmlFile} />
      );
    }
    let javascriptContent;
    if (!(this.renderJavascriptContent(component) === '')) {
      javascriptContent = (
        <div className="page_md" dangerouslySetInnerHTML={{ __html: md.renderInline(this.renderJavascriptContent(component)) }} />
      );
    } else {
      javascriptContent = '';
    }

    return (
      <div className="page code-page">
        <p className="page__desc" dangerouslySetInnerHTML={{ __html: description }} />
        {componentContent}
        {javascriptContent}
      </div>
    );
  }
}

export default CodePage;
