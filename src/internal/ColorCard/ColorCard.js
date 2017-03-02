import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import color from 'color';
import classnames from 'classnames';

class ColorCard extends Component {

  // declare prop types

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

  colorContrast = (ColorHEX) => {
    if (ColorHEX.charAt(0) === '#') {
      const ConvertedHEX = color(ColorHEX);
      return (ConvertedHEX.luminosity() > 0.44) ? 'dark-text' : 'light-text';
    }
    return 'dark-text';
  }

  render() {
    const textClass = this.colorContrast(this.props.hex);
    // add all props
    const {
      hex,
    } = this.props;

    const classNames = classnames({
      'color': true,
      'color--border': this.props.white,
    });

    return (
      <div className={classNames}>
        <div className="color__example" style={{ backgroundColor: hex }} >
          <CopyToClipboard
            text={this.state.value}
            onCopy={this.toggleCopied}
          >
            <button className={textClass}>{this.state.displayCopied ? 'HEX Copied!' : 'Copy HEX'}</button>
          </CopyToClipboard>
        </div>
        <p>{this.props.name}</p>
        <p>{hex}</p>
      </div>
    );
  }
}

export default ColorCard;
