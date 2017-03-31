import React, { Component } from 'react';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import SideNav from '../internal/SideNav';
import Prism from '../assets/syntax/prism.js';
import '../assets/syntax/prism.css';
import '../assets/syntax/syntax.css';
import '../scss/main.scss';

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

  componentWillUpdate() {
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
      if (!image.parentElement.classList.contains('image-overlay')) {
        const overlay = document.createElement('a');
        overlay.setAttribute('target', '__blank');
        overlay.setAttribute('href', image.src);
        overlay.innerHTML = `
          <img class="ibm-eye" src=${ibmEye} />
          <p>View at 100%</p>
        `;
        overlay.classList.add('image-overlay__overlay');
        image.parentElement.classList.add('image-overlay');
        image.parentElement.appendChild(overlay);
      }
    });
  }

  handleClose = (evt) => {
    let isTarget = false;
    if (document.querySelector('.side-nav')) {
      isTarget = document.querySelector('.side-nav').contains(evt.target);
    }
    const isSmallerScreen = window.innerWidth < 1024 || screen.width < 1024;
    if (!isTarget && isSmallerScreen) {
      this.setState({
        isOpen: false
      });
    }
  }

  checkWidth = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      this.setState({
        isOpen: false,
      });
    }
    const debouncedResize = debounce(this.handleResize, 1000);
    window.addEventListener('resize', debouncedResize);
    document.addEventListener('click', (evt) => {
      this.handleClose(evt);
    });
    document.addEventListener('touchstart', (evt) => {
      this.handleClose(evt);
    });
    document.addEventListener('keydown', (evt) => {
      const isSmallerScreen = window.innerWidth < 1024;
      if (evt.which === 27 && this.state.isOpen && isSmallerScreen) {
        this.setState({
          isOpen: false
        });
      }
    });
  }

  handleResize = () => {
    if (window.innerWidth < 1024) {
      this.setState({
        isOpen: false,
      });
    } else {
      this.setState({
        isOpen: true
      });
    }
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
