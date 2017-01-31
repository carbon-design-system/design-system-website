import React, { Component, PropTypes } from 'react';

class PageHeader extends Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const {
      label,
      title,
    } = this.props;

    return (
      <div className="page-header">
        <h4 className="page-header__label">{label}</h4>
        <h1 className="page-header__title">{title}</h1>
      </div>
    );
  }
}

export default PageHeader;
