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
    if (window.CDS['carbon-components'][currentComponent]) {
      if (currentComponent === 'Tab') {
        window.CDS['carbon-components'].Tab.init();
        window.CDS['carbon-components'].ContentSwitcher.init();
      } else if (currentComponent === 'DataTable') {
        window.CDS['carbon-components'].OverflowMenu.init();
        window.CDS['carbon-components'].DataTable.init();
        window.CDS['carbon-components'].Toolbar.init();
        window.CDS['carbon-components'].DataTableV2.init();
      } else {
        if (this.props.component === 'detail-page-header--with-tabs') {
          window.CDS['carbon-components'].Tab.init();
          window.CDS['carbon-components'].OverflowMenu.init();
        }
        window.CDS['carbon-components'][currentComponent].init();
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
    } else if (
      this.props.component === 'data-table' && variation === 'data-table-v2'
    ) {
      htmlFile = require('carbon-components/src/components/data-table-v2/data-table-v2.html');
    } else if (
      this.props.component === 'data-table' && variation === 'data-table-v2-expandable'
    ) {
      htmlFile = require('carbon-components/src/components/data-table-v2/data-table-v2-expandable.html');
    } else if (
      this.props.component === 'data-table' && variation === 'data-table-v2--pagination'
    ) {
      htmlFile = require('carbon-components/src/components/data-table-v2/data-table-v2--pagination.html');
    } else if (
      this.props.component === 'data-table' && variation === 'data-table-v2--small'
    ) {
      htmlFile = require('carbon-components/src/components/data-table-v2/data-table-v2--small.html');
    } else if (
      this.props.component === 'header'
    ) {
      htmlFile = require('carbon-addons-bluemix/src/components/cloud-header/cloud-header.html');
    } else {
      htmlFile = require(`carbon-components/src/components/${this.props.component}/${variation}.html`);
    }

    if (variation.includes('card')) {
      const oldPath = '/globals/assets/images/placeholder-icon-32x32.svg';
      const newPath = require('../../../../assets/images/placeholder.svg');
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
    let backLink;

    if (component === 'header' || component === 'card' || component === 'interior-left-nav' || component === 'module' || component === 'order-summary') {
      backLink = `/add-ons/${component}/code`;
    } else if (component === 'detail-page-header--no-tabs' || component === 'detail-page-header--with-tabs') {
      backLink = '/add-ons/detail-page-header/code';
    } else {
      backLink = `/components/${component}/code`;
    }

    let content;
    if (
      component === 'detail-page-header--no-tabs' ||
      component === 'detail-page-header--with-tabs'
    ) {
      variationContent = this.renderVariation(component);
      componentTitle = 'Detail page header';
    } else {
      if (component === 'header') {
        content = require('../../../../data/add-ons/header.js');
      } else {
        content = require(`../../../../data/components/${component}.js`); // eslint-disable-line
      }
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
