import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import SideNav from '../internal/SideNav';
import SideNavToggle from '../internal/SideNavToggle';
import PageFooter from '../internal/PageFooter';
import Prism from '../assets/syntax/prism.js';
import '../assets/syntax/prism.css';
import '../assets/syntax/syntax.css';
import '../scss/main.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    isOpen: true,
    isFinal: false
  }

  componentDidMount() {
    // [... document.querySelectorAll('pre')].forEach(pre => {
    //   Prism.highlightElement(pre);
    // });
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
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
      setTimeout(() => {
        this.setState({
          isFinal: true
        });
      }, 300);
    } else {
      this.setState({
        isFinal: false,
      });
      setTimeout(() => {
        this.setState({
          isOpen: true
        });
      }, 5);
    }
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
          <img class="ibm-eye" alt="ibm eye icon" src=${ibmEye} />
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
      if (evt.which === 27 && this.state.isOpen) {
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
      <SideNav isFinal={this.state.isFinal} isOpen={this.state.isOpen} />
    );
    const toggleBtnContent = currentLocation === 'live' ?
    (
      ''
    ) :
    (
      <SideNavToggle onToggleBtnClick={this.onToggleBtnClick} isOpen={this.state.isOpen} />
    );

    return (
      <div className="wrapper" onLoad={this.initCustomComponents}>
        {toggleBtnContent}
        {sideNavContent}
        <div className={classNames}>
          {this.props.children}
          <PageFooter isExpanded={this.state.isOpen} />
        </div>
      </div>
    );
  }
}

export default App;
