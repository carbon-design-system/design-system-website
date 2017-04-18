import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LetterSVG from './LetterSVG';

class Letter extends Component {
  static propTypes = {
    letter: PropTypes.string,
    active: PropTypes.bool,
    purple: PropTypes.bool,
    green: PropTypes.bool,
    className: PropTypes.string,
  }

  state = {
    active: this.props.active || false,
    hover: false,
  }

  getLetterSVG = (letter) => <LetterSVG letter={letter} purple={this.props.purple} green={this.props.green} />;

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  handleMouseEnter = () => {
    if (window.innerWidth > 700) {
      this.setState({
        hover: true,
      });
    }
  }

  endAnimation = (evt) => {
    evt.currentTarget.removeEventListener('animationiteration', this.endAnimation);
    this.setState({
      hover: false,
    });
  }

  handleMouseLeave = (evt) => {
    evt.currentTarget.addEventListener('animationiteration', this.endAnimation);
  }

  render() {
    const classNames = classnames(this.props.className, {
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
