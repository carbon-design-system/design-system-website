import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import CodeExample from '../CodeExample/CodeExample';

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    component: PropTypes.string,
  }

  render() {
    const {
      htmlFile,
      component,
    } = this.props;

    return (
      <div className="component-example">
        <div className="component-example__live">
          <div dangerouslySetInnerHTML={{ __html: htmlFile }} />
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
