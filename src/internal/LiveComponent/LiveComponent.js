import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Icon from '@console/bluemix-components-react/dist/components/Icon';

class LiveComponent extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  renderVariation = (variation) => {
    const htmlFile = require(`@console/bluemix-components/src/components/${this.props.component}/${variation}.html`);
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
    const content = require(`../../data/components/${component}.js`);
    const variations = content[0].variations;

    return (
      <div className="live-component">
        <Link to={`/components/${component}/foundation`} className="bx--btn live-component__back-btn">
          <Icon className="live-component__back-btn--icon" name="arrow--left" description="Back button icon" />
          {component} guidelines
        </Link>
        {Object.keys(variations).map((variation) => {
          return this.renderVariation(variation);
        })}
      </div>
    );
  }
}

export default LiveComponent;
