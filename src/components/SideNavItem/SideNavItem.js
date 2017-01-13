import React from 'react';
import classnames from 'classnames';

class SideNavItem extends React.Component {
  state = {
    open: this.props.open,
  }

  handleClick = (evt) => {
    const targetIsSubItem = evt.target.classList.contains('sub-nav__item-link');
    if (!targetIsSubItem) {
      const open = !this.state.open;
      this.setState({ open });
    }
  }

  render() {
    const classNames = classnames({
      'menu-item__open': this.state.open,
    },
      this.props.className,
    );
    return (
      <li className={classNames} onClick={this.handleClick}>
        {this.props.children}
      </li>
    );
  }
}

export default SideNavItem;
