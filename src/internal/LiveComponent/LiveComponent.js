import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';

class LiveComponent extends Component {
  static propTypes = {
    component: PropTypes.string,
  };

  componentDidMount() {
    let currentComponent = this.props.component ===
      'detail-page-header--no-tabs' ||
      this.props.component === 'detail-page-header--with-tabs'
      ? 'detail-page-header'
      : this.props.component;
    currentComponent = currentComponent.replace(/-([a-z])/g, g =>
      g[1].toUpperCase()
    );
    currentComponent =
      currentComponent.charAt(0).toUpperCase() + currentComponent.substring(1);
    if (currentComponent === 'Tabs') {
      currentComponent = 'Tab';
    } else if (currentComponent === 'Card') {
      currentComponent = 'OverflowMenu';
    }
    if (window.CarbonComponents[currentComponent]) {
      if (currentComponent === 'Tab') {
        window.CarbonComponents.Tab.init();
        window.CarbonComponents.ContentSwitcher.init();
      } else if (currentComponent === 'DataTable') {
        window.CarbonComponents.OverflowMenu.init();
        window.CarbonComponents.DataTable.init();
        window.CarbonComponents.Toolbar.init();
      } else {
        if (this.props.component === 'detail-page-header--with-tabs') {
          window.CarbonComponents.Tab.init();
          window.CarbonComponents.OverflowMenu.init();
        }
        window.CarbonComponents[currentComponent].init();
      }
    }
  }

  renderVariation = variation => {
    const classNames = classnames({
      'live-component__component': true,
      [`${variation}`]: true,
    });
    let htmlFile;
    if (this.props.component === 'text-input' && variation === 'text-area') {
      htmlFile = require('carbon-components/src/components/text-area/text-area.html');
    } else if (
      this.props.component === 'data-table' && variation === 'toolbar'
    ) {
      htmlFile = require('carbon-components/src/components/toolbar/toolbar.html');
    } else if (
      this.props.component === 'detail-page-header--no-tabs' ||
      this.props.component === 'detail-page-header--with-tabs'
    ) {
      htmlFile = require(`carbon-components/src/components/detail-page-header/${this.props.component}.html`);
    } else {
      htmlFile = require(`carbon-components/src/components/${this.props.component}/${variation}.html`);
    }

    if (variation.includes('card')) {
      const oldPath = '/globals/assets/images/placeholder-icon-32x32.svg';
      const newPath = require('../../assets/images/placeholder.svg');
      htmlFile = htmlFile.replace(oldPath, newPath);
    }

    let headerContent = this.props.component ===
      'detail-page-header--no-tabs' ||
      this.props.component === 'detail-page-header--with-tabs'
      ? <div className="live-component-header" />
      : '';
    const variationLink = this.props.component ===
      'detail-page-header--no-tabs' ||
      this.props.component === 'detail-page-header--with-tabs'
      ? 'detail-page-header'
      : `${this.props.component}`;
    return (
      <div key={variation} className="live-component__variation">
        <div className="svg--sprite" />
        <a
          href={`http://www.github.com/carbon-design-system/carbon-components/tree/master/src/components/${variationLink}`}
          target="_blank"
          className="live-component__title"
        >
          {variation}.html
        </a>
        {headerContent}
        <div
          className={classNames}
          dangerouslySetInnerHTML={{ __html: htmlFile }}
        />
      </div>
    );
  };

  render() {
    const { component } = this.props;
    let componentTitle;
    let variationContent;
    let backLink = component === 'detail-page-header--no-tabs' ||
      component === 'detail-page-header--with-tabs'
      ? '/components/detail-page-header/code'
      : `/components/${component}/code`;
    if (
      component === 'detail-page-header--no-tabs' ||
      component === 'detail-page-header--with-tabs'
    ) {
      variationContent = this.renderVariation(component);
      componentTitle = 'Detail page header';
    } else {
      const content = require(`../../data/components/${component}.js`); // eslint-disable-line
      const variations = content.variations;
      variationContent = content.variations
        ? Object.keys(variations).map(variation =>
            this.renderVariation(variation)
          )
        : this.renderVariation(component);
      componentTitle = `${component
        .charAt(0)
        .toUpperCase()}${component.substring(1)}`;
    }
    return (
      <div className="live-component">
        <Link to={backLink} className="bx--btn live-component__back-btn">
          <Icon
            className="live-component__back-btn--icon"
            name="arrow--left"
            description="Back button icon"
          />
          {componentTitle} code page
        </Link>
        {variationContent}
      </div>
    );
  }
}

export default LiveComponent;
