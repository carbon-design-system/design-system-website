import React, { Component, PropTypes } from 'react';
import ComponentExample from '../ComponentExample/ComponentExample';
import '@console/bluemix-components/src/index.js';

class CodePage extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  renderVariation = (parent, variation, title) => {
    const htmlFile = require(`@console/bluemix-components/src/components/${parent}/${variation}.html`);
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
    const svgSprite = require('@console/bluemix-icons/sprite.svg');
    const component = this.props.component;
    const componentInfo = require(`../../data/components/${component}.js`); // eslint-disable-line
    const description = componentInfo.desc;
    let componentContent;
    if (componentInfo.variations) {
      componentContent = Object.keys(componentInfo.variations).map(variation => this.renderVariation(component, variation, componentInfo.variations[variation]));
    } else {
      const htmlFile = require(`@console/bluemix-components/src/components/${component}/${component}.html`); // eslint-disable-line
      componentContent = (
        <ComponentExample component={component} htmlFile={htmlFile} />
      );
    }
    let javascriptContent;
    if (!this.renderJavascriptContent(component) === '') {
      javascriptContent = (
        <div className="code__javascript-section" dangerouslySetInnerHTML={{ __html: this.renderJavascriptContent(component) }} />
      );
    } else {
      javascriptContent = '';
    }

    return (
      <div className="page code-page">
        {svgSprite}
        <p className="page__desc" dangerouslySetInnerHTML={{ __html: description }} />
        {componentContent}
        {javascriptContent}
      </div>
    );
  }
}

export default CodePage;
