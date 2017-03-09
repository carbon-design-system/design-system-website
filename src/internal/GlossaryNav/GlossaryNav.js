import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class GlossaryNav extends Component {
  static propTypes = {
    letters: PropTypes.array,
  }

  state = {
    fixed: false,
    activeLetter: window.location.hash.substring(1, 2).toUpperCase() || ''
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrolledItem = this.getActiveItem();
    if (scrolledItem !== this.state.activeLetter) {
      this.setState({
        activeLetter: scrolledItem
      });
    }
    if (window.scrollY > 630) {
      this.setState({
        fixed: true,
      });
    } else {
      this.setState({
        fixed: false,
      });
    }
  }

  updateActive = (evt) => {
    this.setState({
      activeLetter: evt.target.textContent,
    });
  }

  getActiveItem = () => {
    const scrollPosition = window.scrollY;
    let scrollLetter = this.state.activeLetter;

    this.props.letters.forEach((letter) => {
      if (scrollPosition >= letter.positionTop && scrollPosition <= letter.positionBot) {
        scrollLetter = letter.id;
      }
    });

    return scrollLetter;
  }

  renderGlossaryNavItems = (letters) => {
    const glossaryNavItems = [];
    letters.forEach(letter => {
      const isActiveItem = letter.id === this.state.activeLetter;
      const classNames = classnames({
        'glossary-nav__item': true,
        'bx--list__item': true,
        'glossary-nav__item--active': isActiveItem,
      });
      glossaryNavItems.push(
        <li key={letter.id} className={classNames}>
          <a href={`#${letter.id}`} onClick={this.updateActive}>
            {letter.id}
          </a>
        </li>
      );
    });
    return glossaryNavItems;
  }

  render() {
    const letters = this.renderGlossaryNavItems(this.props.letters);
    const classNames = classnames({
      'glossary-nav': true,
      'glossary-nav--fixed': this.state.fixed,
    });
    return (
      <ul className={classNames}>
        {letters}
      </ul>
    );
  }
}

export default GlossaryNav;
