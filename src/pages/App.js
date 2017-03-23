import React, { Component } from 'react';
import classnames from 'classnames';
import SideNav from '../internal/SideNav';
import Prism from '../assets/syntax/prism.js';
import '../assets/syntax/prism.css';
import '../assets/syntax/syntax.css';
import '../scss/main.scss';
import '@console/bluemix-components/src/index.js';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  state = {
    isOpen: true,
  }

  componentDidMount() {
    this.checkWidth();
    this.addBxClasses();
    Prism.highlightAll();
  }

  componentWillUpdate = () => {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    this.addBxClasses();
    Prism.highlightAll();
  }

  onToggleBtnClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  addBxClasses = () => {
    const overlayImages = [... document.querySelectorAll('p em img')];
    const ibmEye = require('../assets/images/ibm-eye.png'); // eslint-disable-line
    overlayImages.forEach(image => {
      const overlay = document.createElement('a');
      overlay.setAttribute('target', '__blank');
      overlay.setAttribute('href', image.src);
      overlay.innerHTML = `
        <img src=${ibmEye} />
        <p>View at 100%</p>
      `;
      overlay.classList.add('image-overlay__overlay');
      image.parentElement.classList.add('image-overlay');
      image.parentElement.appendChild(overlay);
    });
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      this.setState({
        isOpen: false,
      });
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        this.setState({
          isOpen: false,
        });
      } else {
        this.setState({
          isOpen: true
        });
      }
    });
  }

  render() {
    const classNames = classnames({
      'container': true, // eslint-disable-line
      'container--expanded': !this.state.isOpen,
    });

    const currentLocation = window.location.pathname.split('/')[3];
    const sideNavContent = currentLocation === 'live' ?
    (
      ''
    ) :
    (
      <SideNav isOpen={this.state.isOpen} onToggleBtnClick={this.onToggleBtnClick} />
    );

    return (
      <div className="wrapper" onLoad={this.initCustomComponents}>
        {sideNavContent}
        <div className={classNames}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
