import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CodeExample from '../CodeExample/CodeExample';

import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
    codepenSlug: PropTypes.string,
  };

  state = {
    currentFieldColor: 'field-01',
    currentHTMLfile: this.props.htmlFile,
  };

  componentDidUpdate = () => {
    let currentComponent = this.props.component;
    currentComponent = currentComponent.replace(/-([a-z])/g, g => g[1].toUpperCase());
    currentComponent = currentComponent.charAt(0).toUpperCase() + currentComponent.substring(1);
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
  };

  onSwitchFieldColors = value => {
    this.setState({
      currentFieldColor: value,
    });
    let newHTML;
    let currentComponent = this.props.component;
    const currentVariation = this.props.variation;
    if (currentComponent !== currentVariation && !currentVariation.includes(currentComponent)) {
      currentComponent = currentVariation;
    }
    if (value === 'field-02') {
      if (currentVariation.includes('--') || currentVariation === 'code-snippet--inline') {
        newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}-light.html`);
      } else {
        newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}--light.html`);
      }
    } else {
      newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}.html`);
    }
    this.setState({
      currentHTMLfile: newHTML,
    });
  };

  render() {
    const { component, codepenSlug, variation } = this.props;
    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true,
    });

    const lightUIclassnames = classnames({
      'component-example': true,
      'bx--global-light-ui': component === 'tabs',
    });
    let componentName =
      component
        .replace(/-/g, ' ')
        .charAt(0)
        .toUpperCase() + component.replace(/-/g, ' ').substring(1);
    if (componentName === 'Button') {
      componentName = 'Buttons';
    }
    if (componentName === 'Notification') {
      componentName = 'Notifications';
    }
    if (componentName.split(' ').length > 1) {
      componentName = `${componentName.split(' ')[0]} ${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }
    let componentNameLink = componentName;
    if (componentName.split(' ').length > 1) {
      componentNameLink = `${componentName.split(' ')[0]}${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }
    if (variation === 'toolbar') {
      componentNameLink = 'Toolbar';
    }
    if (componentName === 'Progress Indicator') {
      componentNameLink = 'Progress%20Indicator';
    }
    let hasReactVersion = true;
    let hasLightVersion = false;

    if (
      component === 'text-input' ||
      component === 'date-picker' ||
      component === 'dropdown' ||
      component === 'form' ||
      component === 'number-input' ||
      component === 'select' ||
      component === 'search' ||
      component === 'list-box' ||
      (component === 'code-snippet' && variation === 'code-snippet--inline')
    ) {
      hasLightVersion = true;
    }
    if (component === 'list') {
      hasReactVersion = false;
    }

    const liveBackgroundClasses = classnames('component-example__live', {
      'component-example__live--light': this.state.currentFieldColor === 'field-01' && hasLightVersion,
    });

    const componentLink = `https://codepen.io/team/carbon/full/${codepenSlug}/`;
    const counter = Math.floor(Math.random() * 100) + 1;

    return (
      <div className={lightUIclassnames}>
        <div className="svg--sprite" aria-hidden="true" />
        <div className={liveBackgroundClasses}>
          <div className={classNames}>
            <div dangerouslySetInnerHTML={{ __html: this.state.currentHTMLfile }} />
          </div>
        </div>
        <div className="component-toolbar">
          <div className="component-toolbar__current">
            <p>Vanilla JS</p>
          </div>
          <div className="component-toolbar__links">
            {hasReactVersion && (
              <a href={`http://react.carbondesignsystem.com/?selectedKind=${componentNameLink}`} target="_blank">
                React
              </a>
            )}
            <a target="_blank" href={componentLink}>
              CodePen
            </a>
          </div>
          {hasLightVersion && (
            <div className="component-toolbar__switcher">
              <RadioButtonGroup
                ref={switcher => (this.switcher = switcher)}
                defaultSelected={this.state.currentFieldColor}
                name={`radio-button-group-${counter}`}
                legend="Field selector"
                onChange={this.onSwitchFieldColors}
              >
                <RadioButton value="field-01" id={`field-01-${counter}`} labelText="field-01" />
                <RadioButton value="field-02" id={`field-02-${counter}`} labelText="field-02" />
              </RadioButtonGroup>
            </div>
          )}
        </div>
        <CodeExample htmlFile={this.state.currentHTMLfile} />
      </div>
    );
  }
}

export default ComponentExample;
