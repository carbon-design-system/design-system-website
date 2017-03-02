import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class SideNavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isCurrentPath: PropTypes.bool,
  }

  state = {
    open: this.props.isCurrentPath,
  }

  handleClick = (evt) => {
    const targetIsSubItem =
      evt.target.classList.contains('sub-nav__item') ||
      evt.target.classList.contains('sub-nav__item-link');
    if (!targetIsSubItem) {
      const open = !this.state.open;
      this.setState({ open });
    }
  }

  render() {
    const {
      children,
    } = this.props;

    const classNames = classnames({
      'main-nav-item': true,
      'main-nav-item__open': this.state.open,
    });

    return (
      <li className={classNames} onClick={this.handleClick}>
        {children}
      </li>
    );
  }
}

export default SideNavItem;
