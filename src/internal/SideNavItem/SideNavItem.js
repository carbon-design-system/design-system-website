import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SideNavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isCurrentPath: PropTypes.bool,
    isActiveItem: PropTypes.bool,
    type: PropTypes.string
  };

  state = {
    open: this.props.isCurrentPath
  };

  handleClick = evt => {
    const targetIsSubItem = evt.target.classList.contains('sub-nav__item') || evt.target.classList.contains('sub-nav__item-link');
    const hasSubMenu = !(evt.currentTarget.querySelector('ul') === null);
    const targetIsInnerSubNav = evt.currentTarget.classList.contains('main-nav-item--sub');
    const targetIsInnerSubNavItem = evt.target.classList.contains('sub-nav__item-link--sub');
    const targetIsInnerSubNavItemContainer = evt.target.classList.contains('sub-nav__item--sub');
    if ((!targetIsSubItem && hasSubMenu) || (targetIsInnerSubNav && !targetIsInnerSubNavItem && !targetIsInnerSubNavItemContainer)) {
      const open = !this.state.open;
      this.setState({ open });
      const subMenu = evt.currentTarget.querySelector('ul');
      if (!this.state.open) {
        let height = 0;
        [...subMenu.children].forEach(child => {
          height += child.offsetHeight;
        });
        subMenu.style.maxHeight = `${height + 400}px`;
      } else {
        const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        if (!evt.currentTarget.classList.contains('main-nav-item__open') && isIE11) {
          subMenu.style.maxHeight = 0;
        } else if (!isIE11) {
          subMenu.style.maxHeight = 0;
        }
      }
    }
  };

  handleKeyDown = evt => {
    if (evt.which === 13) {
      const targetIsSubItem = evt.target.classList.contains('sub-nav__item') || evt.target.classList.contains('sub-nav__item-link');
      const hasSubMenu = !(evt.currentTarget.querySelector('ul') === null);
      if (!targetIsSubItem && hasSubMenu) {
        const open = !this.state.open;
        this.setState({ open });
        const subMenu = evt.currentTarget.querySelector('ul');
        if (!this.state.open) {
          let height = 0;
          [...subMenu.children].forEach(child => {
            height += child.offsetHeight;
          });
          subMenu.style.maxHeight = `${height}px`;
        } else {
          const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
          if (!evt.currentTarget.classList.contains('main-nav-item__open') && isIE11) {
            subMenu.style.maxHeight = 0;
          } else if (!isIE11) {
            subMenu.style.maxHeight = 0;
          }
        }
      }
    }
    if (evt.which === 39) {
      document.querySelector('#maincontent').focus();
    }
    [...evt.currentTarget.querySelectorAll('.sub-nav__item')].forEach(link => {
      const currentLink = link;
      if (this.state.open) {
        currentLink.querySelector('a').tabIndex = 0;
      } else {
        currentLink.querySelector('a').tabIndex = -1;
      }
    });
  };

  render() {
    const { children, isActiveItem } = this.props;

    const classNames = classnames({
      'main-nav-item': true,
      'main-nav-item__open': this.state.open,
      'main-nav-item__active': isActiveItem,
      'main-nav-item--sub': this.props.type === 'sub'
    });

    const tabIndex = children.length ? 0 : -1;

    return (
      <li role="menuitem" tabIndex={tabIndex} className={classNames} onClick={this.handleClick} onKeyDown={this.handleKeyDown}>
        {children}
      </li>
    );
  }
}

export default SideNavItem;
