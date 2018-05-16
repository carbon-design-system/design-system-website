import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';

import ComponentExample from '../ComponentExample/ComponentExample';
import ComponentReactExample from '../ComponentReactExample/ComponentReactExample';

class CodePage extends Component {
  static propTypes = {
    component: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
  };

  componentDidMount() {
    let currentComponent = this.props.component;
    currentComponent = currentComponent.replace(/-([a-z])/g, g =>
      g[1].toUpperCase()
    );
    currentComponent =
      currentComponent.charAt(0).toUpperCase() + currentComponent.substring(1);
    if (currentComponent === 'Tabs') {
      currentComponent = 'Tab';
    } else if (currentComponent === 'Card') {
      currentComponent = 'OverflowMenu';
    } else if (currentComponent === 'CodeSnippet') {
      currentComponent = 'CopyButton';
    } else if (currentComponent === 'OrderSummary') {
      currentComponent = 'Dropdown';
    }
    if (window.CDS['carbon-components'][currentComponent]) {
      if (currentComponent === 'Tab') {
        window.CDS['carbon-components'].Tab.init();
        window.CDS['carbon-components'].ContentSwitcher.init();
      } else if (currentComponent === 'DataTable') {
        window.CDS['carbon-components'].OverflowMenu.init();
        window.CDS['carbon-components'].DataTable.init();
        window.CDS['carbon-components'].Toolbar.init();
        window.CDS['carbon-components'].DataTableV2.init();
      } else if (currentComponent === 'DatePicker') {
        window.CDS['carbon-components'].DatePicker.init();
      } else if (currentComponent === 'DetailPageHeader') {
        window.CDS['carbon-components'].OverflowMenu.init();
        window.CDS['carbon-components'].Tab.init();
      } else {
        window.CDS['carbon-components'][currentComponent].init();
      }
    }
  }

  componentDidUpdate() {
    let currentComponent = this.props.component;
    currentComponent = currentComponent.replace(/-([a-z])/g, g =>
      g[1].toUpperCase()
    );
    currentComponent =
      currentComponent.charAt(0).toUpperCase() + currentComponent.substring(1);
    if (currentComponent === 'Tabs') {
      currentComponent = 'Tab';
    } else if (currentComponent === 'Card') {
      currentComponent = 'OverflowMenu';
    } else if (currentComponent === 'CodeSnippet') {
      currentComponent = 'CopyButton';
    } else if (currentComponent === 'OrderSummary') {
      currentComponent = 'Dropdown';
    }
    if (window.CDS['carbon-components'][currentComponent]) {
      if (currentComponent === 'Tab') {
        window.CDS['carbon-components'].Tab.init();
        window.CDS['carbon-components'].ContentSwitcher.init();
      } else if (currentComponent === 'DataTable') {
        window.CDS['carbon-components'].OverflowMenu.init();
        window.CDS['carbon-components'].DataTable.init();
        window.CDS['carbon-components'].Toolbar.init();
        window.CDS['carbon-components'].DataTableV2.init();
      } else if (currentComponent === 'DatePicker') {
        window.CDS['carbon-components'].DatePicker.init();
      } else if (currentComponent === 'DetailPageHeader') {
        window.CDS['carbon-components'].OverflowMenu.init();
        window.CDS['carbon-components'].Tab.init();
      } else {
        window.CDS['carbon-components'][currentComponent].init();
      }
    }
  }

  renderVariation = (parent, variation, title, codepenSlug) => {
    let currentCodepenSlug = '';
    if (!(codepenSlug === undefined)) {
      if (typeof codepenSlug === 'string') {
        currentCodepenSlug = codepenSlug;
      } else {
        Object.keys(codepenSlug).map(slug => {
          if (variation === slug) {
            currentCodepenSlug = codepenSlug[slug][0];
          }
        });
      }
    }
    let htmlFile;
    if (parent === 'dropdown') {
      if (/^dropdown/.test(variation)) {
        htmlFile = require(`carbon-components/html/${parent}/${variation}.html`);
      } else {
        return this.renderReactComponent(parent, variation, title);
      }
    } else {
      if (parent === 'text-input' && variation === 'text-area') {
        htmlFile = require('carbon-components/html/text-area/text-area.html');
      } else if (parent === 'data-table' && variation === 'toolbar') {
        htmlFile = require('carbon-components/html/toolbar/toolbar.html');
      } else if (parent === 'date-picker' && variation === 'time-picker') {
        htmlFile = require('carbon-components/html/time-picker/time-picker.html');
      } else if (parent === 'data-table' && variation === 'data-table-v2') {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--expandable'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--expandable.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--pagination'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--pagination.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--small'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--small.html');
      } else {
        htmlFile = require(`carbon-components/html/${parent}/${variation}.html`);
      }
      if (parent === 'card') {
        const oldPath = '/globals/assets/images/placeholder-icon-32x32.svg';
        const newPath = require('../../../../assets/images/placeholder.svg');
        htmlFile = htmlFile.replace(oldPath, newPath);
      }
    }

    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <ComponentExample
          codepenSlug={currentCodepenSlug}
          variation={variation}
          component={parent}
          htmlFile={htmlFile}
          hideViewFullRender={this.props.hideViewFullRender}
        />
      </div>
    );
  };


  renderReactComponent = (parent, variation, title) => {
    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <p>This component is currently only available in <a href="https://github.com/carbon-design-system/carbon-components-react" target="_blank">our React library</a>.</p>
        <ComponentReactExample component={parent} variation={variation} />
      </div>
    );
  }

  renderJavascriptContent = component => {
    let javascriptSection;
    try {
      if (component === 'data-table') {
        javascriptSection = require('carbon-components/src/components/data-table-v2/README.md');
      } else {
        javascriptSection = require(`carbon-components/src/components/${component}/README.md`);
      }
    } catch (e) {
      javascriptSection = '';
    }
    return javascriptSection;
  };

  render() {
    const component = this.props.component;
    let componentInfo;
    if (
      component === 'card' ||
      component === 'detail-page-header' ||
      component === 'interior-left-nav' ||
      component === 'module' ||
      component === 'order-summary' ||
      component === 'cloud-header'
    ) {
      componentInfo = require(`../../../../data/add-ons/${component}.js`); // eslint-disable-line
    } else {
      componentInfo = require(`../../../../data/components/${component}.js`); // eslint-disable-line
    }
    const description = componentInfo.desc;
    const md = new Markdown({
      html: true,
    });
    let componentContent;
    let codepenSlug = componentInfo.codepen;
    if (componentInfo.variations) {
      componentContent = Object.keys(componentInfo.variations).map(variation =>
        this.renderVariation(
          component,
          variation,
          componentInfo.variations[variation],
          codepenSlug
        )
      );
    } else {
      let htmlFile;
      if (component === 'cloud-header') {
        htmlFile = require('carbon-addons-bluemix/src/components/cloud-header/cloud-header.html');
      } else {
        htmlFile = require(`carbon-components/html/${component}/${component}.html`); // eslint-disable-line
      }
      componentContent = (
        <ComponentExample
          hideViewFullRender={this.props.hideViewFullRender}
          component={component}
          htmlFile={htmlFile}
          codepenSlug={codepenSlug}
        />
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
