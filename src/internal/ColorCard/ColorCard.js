import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import color from 'color';
import classnames from 'classnames';
import ReactGA from 'react-ga';

class ColorCard extends Component {
  static propTypes = {
    hex: PropTypes.string,
    white: PropTypes.bool,
    name: PropTypes.string
  }

  state = {
    value: this.props.hex,
    displayCopied: false,
  };

  toggleCopied = () => {
    this.setState({
      displayCopied: true,
    });
    setTimeout(() => {
      this.setState({
        displayCopied: false,
      });
    }, 2500);
  }

  handleClick = () => {
    ReactGA.event({
      category: 'Copy Color',
      action: 'click'
    });
  }

  colorContrast = (ColorHEX) => {
    if (ColorHEX.charAt(0) === '#') {
      const ConvertedHEX = color(ColorHEX);
      return (ConvertedHEX.luminosity() > 0.44) ? 'dark-text' : 'light-text';
    }
    return 'dark-text';
  }

  render() {
    const textClass = this.colorContrast(this.props.hex);
    const {
      hex,
      white,
      name,
    } = this.props;

    const classNames = classnames({
      'color': true,
      'color--border': white,
    });

    return (
      <div tabIndex="0" className={classNames}>
        <div tabIndex="0" className="color__example" style={{ backgroundColor: hex }} >
          <CopyToClipboard
            text={this.state.value}
            onCopy={this.toggleCopied}
          >
            <button tabIndex="0" className={textClass} onClick={() => this.handleClick()}>{this.state.displayCopied ? 'HEX Copied!' : 'Copy HEX'}</button>
          </CopyToClipboard>
        </div>
        <p>{name}</p>
        <p>{hex}</p>
      </div>
    );
  }
}

export default ColorCard;
