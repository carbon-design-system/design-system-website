import React, { Component, PropTypes } from 'react';
import ComponentExample from '../ComponentExample/ComponentExample';

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

  render() {
    const component = this.props.component;
    const componentInfo = require(`../../data/components/${component}.js`);
    const description = componentInfo[0].desc;
    let componentContent;
    if (componentInfo[0].variations) {
      componentContent = Object.keys(componentInfo[0].variations).map(variation => this.renderVariation(component, variation, componentInfo[0].variations[variation]));
    } else {
      const htmlFile = require(`@console/bluemix-components/src/components/${component}/${component}.html`);
      componentContent = (
        <ComponentExample component={component} htmlFile={htmlFile} />
      );
    }

    return (
      <div className="page">
        <p className="page__desc" dangerouslySetInnerHTML={{ __html: description }} />
        {componentContent}
      </div>
    );
  }
}

export default CodePage;
