import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'carbon-components-react';

class Example extends Component {
  static propTypes = {
    correct: PropTypes.bool,
    caption: PropTypes.string,
    text: PropTypes.string,
  }

  render() {
    const greenCheck = <Icon name="checkmark" description="checkmark" height="16px" width="16px" fill="#8CD211" />;
    const redX = <Icon name="close" description="close" height="12px" width="12px" fill="#e71d32" />;

    const icon = this.props.correct ? greenCheck : redX;
    const fill = this.props.correct ? '#8CD211' : '#e71d32';
    const divStyle = {
      borderLeft: `10px solid ${fill}`,
    };

    return (
      <div className="example">
        <p className="example-caption">
          {icon}
          {this.props.caption}
        </p>
        <div className="example-text" style={divStyle}>
          <p>"{this.props.text}"</p>
        </div>
      </div>
    );
  }
}

export default Example;
