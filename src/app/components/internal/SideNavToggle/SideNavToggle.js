import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SideNavToggle extends Component {
  static propTypes = {
    onToggleBtnClick: PropTypes.func,
    isOpen: PropTypes.bool,
  }

  render() {
    const {
      onToggleBtnClick,
      isOpen,
    } = this.props;

    const classNames = classnames({
      'side-nav__toggle-btn': true,
      'side-nav__toggle-btn--closed': !isOpen,
    });

    return (
      <button
        aria-label="Toggle Side Navigation"
        onClick={onToggleBtnClick}
        className={classNames}
      >
        <div>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </button>
    );
  }
}

export default SideNavToggle;
