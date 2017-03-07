import React, { Component, PropTypes } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Icon from '@console/bluemix-components-react/dist/components/Icon';
import Button from '@console/bluemix-components-react/dist/components/Button';

class IconCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    viewBox: PropTypes.string,
    path: PropTypes.string,
  }

  state = {
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

  render() {
    const name = `${this.props.name}.svg`;
    const path = this.props.path || null;
    const id = `#${this.props.name}`;
    const icon = `<svg width="${this.props.width}" height="${this.props.height}">
      <use xlink:href="/@console/bluemix-icons/bluemix-icons.svg#${this.props.name}"></use>
    </svg>`;
    return (
      <div className="icon">
        <div className="icon__card">
          <Icon
            name={this.props.name}
            description={this.props.name}
            height={this.props.height}
            width={this.props.width}
            viewBox={this.props.viewBox}
          />
          <div className="icon__actions">
            <CopyToClipboard
              text={icon}
              onCopy={this.toggleCopied}
            >
              <Button className="icon-button">{this.state.displayCopied ? 'Icon Copied!' : 'Copy Icon'}</Button>
            </CopyToClipboard>
            <Button href={path} className="icon-button" download={name}>Download</Button>
          </div>
        </div>
        <h5>{this.props.name}</h5>
        <span>{id}</span>
      </div>
    );
  }
}

export default IconCard;
