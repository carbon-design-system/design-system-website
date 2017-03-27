import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import CodeExample from '../CodeExample/CodeExample';
import svgSprite from 'raw!../../assets/bluemix-icons.svg'; // eslint-disable-line

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    component: PropTypes.string,
  }

  // generateComponentJS = () => {
  //   const script = document.createElement('script');
  //   const js = require('carbon-components/scripts/carbon-components.min.js');
  //   script.setAttribute('src', js);
  //   console.log(script);
  // }

  render() {
    const {
      htmlFile,
      component,
    } = this.props;

    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true,
    });

    return (
      <div className="component-example bx--global-light-ui">
        <div className="svg--sprite" dangerouslySetInnerHTML={{ __html: svgSprite }} />
        <div className="component-example__live">
          <div className={classNames}>
            <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
          </div>
          <Link
            className="component-example__view-full-render"
            to={`/components/${component}/live`}
          >
            View full render
          </Link>
        </div>
        <CodeExample htmlFile={htmlFile} />
      </div>
    );
  }
}

export default ComponentExample;
