import React, { Component } from 'react';
import classnames from 'classnames';

class GlossaryNav extends Component {
  state = {
    fixed: false,
  }

  componentDidMount() {
    this.checkScroll();
  }

  checkScroll = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 630) {
        this.setState({
          fixed: true,
        });
      } else {
        this.setState({
          fixed: false,
        });
      }
    });
  }

  renderGlossaryNavItem = (glossaryEntry) => {
    const isActiveItem = glossaryEntry === window.location.hash.substring(1, 2).toUpperCase();
    const classNames = classnames({
      'glossary-nav__item': true,
      'bx--list__item': true,
      'glossary-nav__item--active': isActiveItem,
    });
    return (
      <li key={glossaryEntry} className={classNames}>
        <a href={`#${glossaryEntry}`}>
          {glossaryEntry}
        </a>
      </li>
    );
  }

  render() {
    const glossary = this.props.glossary;
    const classNames = classnames({
      'glossary-nav': true,
      'glossary-nav--fixed': this.state.fixed,
    });
    return (
      <ul className={classNames}>
        {Object.keys(glossary).map(entry => {
          if (!(entry === '__content')) {
            return this.renderGlossaryNavItem(entry);
          }
          return '';
        })}
      </ul>
    );
  }
}

export default GlossaryNav;
