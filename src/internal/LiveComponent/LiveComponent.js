import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from '@console/bluemix-components-react/dist/components/Icon';

class LiveComponent extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  renderVariation = (variation) => {
    const htmlFile = require(`@console/bluemix-components/src/components/${this.props.component}/${variation}.html`); // eslint-disable-line
    return (
      <div className="live-component__variation">
        <a
          href={`https://github.ibm.com/Bluemix/bluemix-components/tree/7.x/src/components/${this.props.component}`}
          className="live-component__title"
        >
          {variation}.html
        </a>
        <div className="live-component__component" dangerouslySetInnerHTML={{ __html: htmlFile }} />
      </div>
    );
  }

  render() {
    const {
      component,
    } = this.props;
    const content = require(`../../data/components/${component}.js`); // eslint-disable-line
    const variations = content[0].variations;
    const variationContent = content[0].variations ?
      (
        Object.keys(variations).map((variation) => this.renderVariation(variation))
      ) :
      this.renderVariation(component);
    const componentTitle = `${component.charAt(0).toUpperCase()}${component.substring(1)}`;

    return (
      <div className="live-component">
        <Link to={`/components/${component}/foundation`} className="bx--btn live-component__back-btn">
          <Icon className="live-component__back-btn--icon" name="arrow--left" description="Back button icon" />
          {componentTitle} code page
        </Link>
        {variationContent}
      </div>
    );
  }
}

export default LiveComponent;
