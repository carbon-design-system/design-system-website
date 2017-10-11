import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ImageGrid extends Component {
  static propTypes = {
    children: PropTypes.node,
    darkBg: PropTypes.array
  }

  render() {
    const {
      children,
      darkBg,
    } = this.props;
    const html = children;
    const needsDarkBg = darkBg;
    const needsDarkBgObj = {};
    for (let i = 0; i < needsDarkBg.length; i++) {
      needsDarkBgObj[needsDarkBg[i]] = needsDarkBg[i];
    }
    const classNames = classnames({
      'image-grid': true,
      'image-grid--1': needsDarkBgObj[1] !== undefined,
      'image-grid--2': needsDarkBgObj[2] !== undefined,
      'image-grid--3': needsDarkBgObj[3] !== undefined,
      'image-grid--4': needsDarkBgObj[4] !== undefined,
    });

    return (
      <div className={classNames} dangerouslySetInnerHTML={{ __html: html }} />
    );
  }
}

export default ImageGrid;
