import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import LetterSVG from './LetterSVG';

class Letter extends Component {
  static propTypes = {
    letter: PropTypes.string,
    active: PropTypes.bool,
  }

  state = {
    active: this.props.active || false,
    hover: false,
  }

  getLetterSVG = (letter) => <LetterSVG letter={letter} />;

  handleClick = () => {
    this.setState({
      active: !this.state.active,
      hover: !this.state.hover,
    });
  }

  handleMouseEnter = () => {
    if (!this.state.active) {
      this.setState({
        hover: true,
      });
    }
  }

  endAnimation = (evt) => {
    this.setState({
      hover: false,
    });

    evt.currentTarget.removeEventListener('animationiteration', this.endAnimation);
  }

  handleMouseLeave = (evt) => {
    evt.currentTarget.addEventListener('animationiteration', this.endAnimation);
  }

  render() {
    const classNames = classnames({
      overview__letter: true,
      'overview__letter--active': this.state.active,
      'overview__letter--hover': this.state.hover,
    });

    let html = this.props.letter;

    return (
      <div
        className={classNames}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span className="letter">
          {html}
        </span>
        {this.getLetterSVG(this.props.letter)}
      </div>
    );
  }
}

export default Letter;
