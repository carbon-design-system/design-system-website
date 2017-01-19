import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Color from 'color';

class ColorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.hex,
      copied: false,
    };
  }

  componentDidUpdate() {
    if (this.state.copied === true) {
      setTimeout(() => {
        this.setState({
          copied: false,
        });
      }, 2500);
    }
  }

  colorContrast = (ColorHEX) => {
    const ConvertedHEX = Color(ColorHEX);
    return (ConvertedHEX.luminosity() > 0.44) ? 'dark-text' : 'light-text';
  }

  render() {
    const textClass = this.colorContrast(this.props.hex);

    return (
      <div className="light-ui-color">
        <div className="color__example" style={{ backgroundColor: this.props.hex }} >
          <input
            value={this.state.value}
            onChange={({ target: { value } }) => this.setState({ value, copied: false })}
          />&nbsp;

          <CopyToClipboard
            text={this.state.value}
            onCopy={() =>
              this.setState({ copied: true })
            }
          >
            <button className={textClass}>{this.state.copied ? 'HEX Copied!' : 'Copy HEX'}</button>
          </CopyToClipboard>
        </div>
        <p>{this.props.name}</p>
        <p>{this.props.hex}</p>
        <p>{this.props.scss}</p>
      </div>
    );
  }
}

export default ColorCard;
