import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';
import ComponentExample from '../ComponentExample/ComponentExample';

class CodePage extends Component {
  static propTypes = {
    component: PropTypes.string,
  };

  componentDidMount() {
    let currentComponent = this.props.component;
    currentComponent = currentComponent.replace(/-([a-z])/g, g =>
      g[1].toUpperCase());
    currentComponent = currentComponent.charAt(0).toUpperCase() +
      currentComponent.substring(1);
    if (currentComponent === 'Tabs') {
      currentComponent = 'Tab';
    } else if (currentComponent === 'Card') {
      currentComponent = 'OverflowMenu';
    } else if (currentComponent === 'CodeSnippet') {
      currentComponent = 'CopyButton';
    }
    if (window.CarbonComponents[currentComponent]) {
      if (currentComponent === 'Tab') {
        window.CarbonComponents.Tab.init();
        window.CarbonComponents.ContentSwitcher.init();
      } else if (currentComponent === 'DataTable') {
        window.CarbonComponents.OverflowMenu.init();
        window.CarbonComponents.DataTable.init();
        window.CarbonComponents.Toolbar.init();
      } else if (currentComponent === 'DatePicker') {
        window.CarbonComponents.DatePicker.init();
      } else if (currentComponent === 'DetailPageHeader') {
        window.CarbonComponents.OverflowMenu.init();
        window.CarbonComponents.Tab.init();
      } else {
        window.CarbonComponents[currentComponent].init();
      }
    }
  }

  renderVariation = (parent, variation, title) => {
    let htmlFile;
    if (parent === 'text-input' && variation === 'text-area') {
      htmlFile = require('carbon-components/src/components/text-area/text-area.html');
    } else if (parent === 'data-table' && variation === 'toolbar') {
      htmlFile = require('carbon-components/src/components/toolbar/toolbar.html');
    } else if (parent === 'date-picker' && variation === 'time-picker') {
      htmlFile = require('carbon-components/src/components/time-picker/time-picker.html');
    } else {
      htmlFile = require(`carbon-components/src/components/${parent}/${variation}.html`);
    }

    if (parent === 'card') {
      const oldPath = '/globals/assets/images/placeholder-icon-32x32.svg';
      const newPath = require('../../assets/images/placeholder.svg');
      htmlFile = htmlFile.replace(oldPath, newPath);
    }
    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <ComponentExample
          variation={variation}
          component={parent}
          htmlFile={htmlFile}
        />
      </div>
    );
  };

  renderJavascriptContent = component => {
    let javascriptSection;
    try {
      javascriptSection = require(`carbon-components/src/components/${component}/README.md`);
    } catch (e) {
      javascriptSection = '';
    }
    return javascriptSection;
  };

  render() {
    const component = this.props.component;
    const componentInfo = require(`../../data/components/${component}.js`); // eslint-disable-line
    const description = componentInfo.desc;
    const md = new Markdown({
      html: true,
    });
    let componentContent;
    if (componentInfo.variations) {
      componentContent = Object.keys(componentInfo.variations).map(variation =>
        this.renderVariation(
          component,
          variation,
          componentInfo.variations[variation],
        ));
    } else {
      const htmlFile = require(`carbon-components/src/components/${component}/${component}.html`); // eslint-disable-line
      componentContent = (
        <ComponentExample component={component} htmlFile={htmlFile} />
      );
    }
    let javascriptContent;
    if (!(this.renderJavascriptContent(component) === '')) {
      javascriptContent = (
        <div
          className="page_md"
          dangerouslySetInnerHTML={{
            __html: md.render(this.renderJavascriptContent(component)),
          }}
        />
      );
    } else {
      javascriptContent = '';
    }

    return (
      <div className="page code-page test">
        <p
          className="page__desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {componentContent}
        {javascriptContent}
      </div>
    );
  }
}

export default CodePage;
