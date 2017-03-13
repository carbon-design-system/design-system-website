import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Icon from '@console/bluemix-components-react/dist/components/Icon';
import svgSprite from 'raw!../../assets/bluemix-icons.svg';
import * as BluemixComponents from '@console/bluemix-components/src';

class LiveComponent extends Component {
  static propTypes = {
    component: PropTypes.string,
  }

  // componentDidMount() {
  //   console.log('mount');
  //   initCheckbox();
  //   FileUploader.init();
  //   ContentSwitcher.init();
  //   Tab.init();
  //   OverflowMenu.init();
  //   Modal.init();
  //   Loading.init();
  //   Dropdown.init();
  //   Card.init();
  //   NumberInput.init();
  //   DataTable.init();
  //   DetailPageHeader.init();
  //   InlineLeftNav.init();
  //   Pagination.init();
  //   Search.init();
  //   Accordion.init();
  //   Notification.init();
  //   Toolbar.init();
  //   ProgressIndicator.init();
  // }

  renderVariation = (variation) => {
    const classNames = classnames({
      'live-component__component': true,
      [`${variation}`]: true,
    });

    const htmlFile = require(`@console/bluemix-components/src/components/${this.props.component}/${variation}.html`); // eslint-disable-line
    return (
      <div className="live-component__variation bx--global-light-ui">
        <div className="svg--sprite" dangerouslySetInnerHTML={{ __html: svgSprite }} />
        <a
          href={`https://github.ibm.com/Bluemix/bluemix-components/tree/7.x/src/components/${this.props.component}`}
          className="live-component__title"
        >
          {variation}.html
        </a>
        <div className={classNames} dangerouslySetInnerHTML={{ __html: htmlFile }} />
      </div>
    );
  }

  render() {
    const {
      component,
    } = this.props;

    const content = require(`../../data/components/${component}.js`); // eslint-disable-line
    const variations = content.variations;
    const variationContent = content.variations ?
      (
        Object.keys(variations).map((variation) => this.renderVariation(variation))
      ) :
      this.renderVariation(component);
    const componentTitle = `${component.charAt(0).toUpperCase()}${component.substring(1)}`;

    return (
      <div className="live-component">
        <Link to={`/components/${component}/code`} className="bx--btn live-component__back-btn">
          <Icon className="live-component__back-btn--icon" name="arrow--left" description="Back button icon" />
          {componentTitle} code page
        </Link>
        {variationContent}
      </div>
    );
  }
}

export default LiveComponent;
