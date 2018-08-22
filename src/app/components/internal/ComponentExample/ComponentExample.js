import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CodeExample from '../CodeExample/CodeExample';

import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

const componentNamesMap = {
  Card: ['OverflowMenu'],
  CodeSnippet: ['CodeSnippet', 'CopyButton'],
  DataTable: ['DataTable', 'DataTableV2', 'OverflowMenu', 'Toolbar'],
  DetailPageHeader: ['OverflowMenu', 'Tab'],
  OrderSummary: ['Dropdown'],
  Tabs: ['Tab', 'ContentSwitcher'],
};

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
    codepenSlug: PropTypes.string,
  };

  static _initHandles = new WeakMap();

  state = {
    currentFieldColor: 'field-01',
    currentHTMLfile: this.props.htmlFile,
  };

  componentDidUpdate = () => {
    this._releaseAndInstantiateComponents();
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

  _ref = null;

  _instances = [];

  _liveDemoRef = ref => {
    this._ref = ref;
    this._releaseAndInstantiateComponents();
  };

  _releaseAndInstantiateComponents() {
    const instances = this._instances;
    for (let instance = instances.pop(); instance; instance = instances.pop()) {
      instance.release();
    }
    const ref = this._ref;
    if (ref) {
      const componentsList = window.CDS['carbon-components'];
      const currentComponent = this.props.component
        .replace(/-([a-z])/g, (match, token) => token.toUpperCase())
        .replace(/^([a-z])/, (match, token) => token.toUpperCase());
      (componentNamesMap[currentComponent] || [currentComponent]).forEach((name) => {
        const TheComponent = componentsList[name];
        if (TheComponent) {
          if (TheComponent.prototype.createdByLauncher) {
            const initHandles = this.constructor._initHandles;
            if (!initHandles.has(TheComponent)) {
              initHandles.set(TheComponent, TheComponent.init());
            }
          } else {
            const selectorInit = TheComponent.options.selectorInit;
            instances.push(...[...ref.querySelectorAll(selectorInit)].map(elem => TheComponent.create(elem)));
          }
        }
      });
    }
  }

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
    let hasAngularVersion = false;
    let hasLightVersion = false;

    if (
      component === 'accordion' ||
      component === 'dropdown' ||
      component === 'content-switcher' ||
      component === 'tooltip' ||
      component === 'checkbox' ||
      component === 'radio-button' ||
      component === 'label' ||
      component === 'toggle' ||
      component === 'modal' ||
      component === 'tabs'

    ) {
      hasAngularVersion = true;
    }

    if (
      component === 'text-input' ||
      component === 'date-picker' ||
      component === 'dropdown' ||
      component === 'form' ||
      component === 'number-input' ||
      component === 'select' ||
      component === 'search' ||
      component === 'list-box' ||
      component === 'slider' ||
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
    const reactLink = `http://react.carbondesignsystem.com/?selectedKind=${componentNameLink}`;
    
    

    if (
      component === 'checkbox' ||
      component === 'label'
    ) {
      var angularLink = `http://angular.carbondesignsystem.com/?selectedKind=Forms&selectedStory=${componentNameLink}`;
    } 
    else if (
      component === 'toggle'
    ) {
      var angularLink = `http://angular.carbondesignsystem.com/?selectedKind=Forms&selectedStory=switch`;
    } 
    else if (
      component === 'radio-button'
    ) {
      var angularLink = `http://angular.carbondesignsystem.com/?selectedKind=Forms&selectedStory=radio`;
    } 
    else {
      var angularLink = `http://angular.carbondesignsystem.com/?selectedKind=${componentNameLink}`;
    }

    return (
      <div className={lightUIclassnames}>
        <div className="svg--sprite" aria-hidden="true" />
        <div className={liveBackgroundClasses}>
          <div className={classNames}>
            <div ref={this._liveDemoRef} dangerouslySetInnerHTML={{ __html: this.state.currentHTMLfile }} />
          </div>
        </div>
        <div className="component-toolbar">
          <div className="component-toolbar__current">
            <p>Vanilla JS</p>
          </div>
          <div className="component-toolbar__links">
            {hasReactVersion && (
              <a href={reactLink} target="_blank">
                React
              </a>
            )}
            {hasAngularVersion && (
              <a href={angularLink} target="_blank">
                Angular
              </a>
            )}
            <a target="_blank" href={componentLink}>
              CodePen
            </a>
          </div>
          {hasLightVersion && (
            <div className="component-toolbar__switcher">
              <RadioButtonGroup
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
