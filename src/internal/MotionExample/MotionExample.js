import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from 'carbon-components-react';

class MotionExample extends Component {
  static propTypes = {
    motionType: PropTypes.string,
    correctText: PropTypes.string,
    incorrectText: PropTypes.string,
  }

  state = {
    playing: false,
    mouseover: false,
  };

  toggleMotionExample = () => {
    this.setState({
      playing: !this.state.playing,
      mouseover: false,
    });
  }

  overlayMouseOver = () => {
    if (this.state.playing) {
      this.setState({
        mouseover: true,
      });
    }
  }

  overlayMouseOut = () => {
    if (this.state.playing) {
      this.setState({
        mouseover: false,
      });
    }
  }

  render() {
    const {
      motionType,
      correctText,
      incorrectText,
    } = this.props;

    const isSingleExample = motionType === 'standard' || motionType === 'ease-in' || motionType === 'ease-out';

    const containerClasses = classnames({
      'motion-example': true,
      'motion-example-easing--container': isSingleExample,
      'paused': !this.state.playing,
    });

    const correctClassNames = classnames({
      'motion-example__element': true,
      [`${motionType}--correct`]: true,
    });

    const incorrectClassNames = classnames({
      'motion-example__element': true,
      [`${motionType}--incorrect`]: true,
    });

    const playIconClasses = classnames({
      'play-icon': true,
      'hidden': this.state.playing
    });

    const pauseIconClasses = classnames({
      'pause-icon': true,
      'hidden': !this.state.playing
    });

    const motionCurveClasses = classnames({
      'motion-example__curve': true,
      [`${motionType}`]: true,
    });

    const overlayClasses = classnames({
      'motion-example__overlay': true,
      'motion-example__overlay--hover': this.state.mouseover
    });

    const correctInfo = correctText ?
      (
        <p className="motion-example__correct-text">
          <Icon name="checkmark" description="correct example" />
          {correctText}
        </p>
      ) : '';

    const incorrectInfo = incorrectText ?
      (
        <p className="motion-example__incorrect-text">
          <Icon name="close" description="incorrect example" />
          {incorrectText}
        </p>
      ) : '';

    let curveSvg;

    if (motionType === 'standard') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="standard-curve" fill="none" fillRule="evenodd">
            <path d="M0,320 C64,256 121.6,32 320,0"></path>
          </g>
          <polyline fill="none" points="0 0 0 320 320 320"></polyline>
          <g id="standard-curve-2" fill="none" fillRule="evenodd">
            <path
              className="standard"
              d="M0,320 C64,256 121.6,32 320,0"
              strokeDasharray="1000"
            ></path>
          </g>
        </svg>
      );
    } else if (motionType === 'ease-out') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="out-curve" fill="none" fillRule="evenodd">
            <path d="M0,320 C0,320 121.6,32 320,0"></path>
          </g>
          <polyline fill="none" points="0 0 0 320 320 320"></polyline>
          <g id="out-curve-2" fill="none" fillRule="evenodd">
            <path
              className="ease-out"
              d="M0,320 C0,320 121.6,32 320,0"
              strokeDasharray="1000"
            ></path>
          </g>
        </svg>
      );
    } else if (motionType === 'ease-in') {
      curveSvg = (
        <svg
          width="320px"
          height="320px"
          viewBox="0 0 320 320"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g id="in-curve" fill="none" fillRule="evenodd">
            <path d="M0,320 C64,320 320,32 320,0"></path>
          </g>
          <polyline fill="none" points="0 0 0 320 320 320"></polyline>
          <g id="in-curve-2" fill="none" fillRule="evenodd">
            <path
              className="ease-in"
              d="M0,320 C64,320 320,32 320,0"
              strokeDasharray="1000"
            >
            </path>
          </g>
        </svg>
      );
    }

    let boxUnderCurve;

    if (motionType === 'standard') {
      boxUnderCurve = (
        <div className="motion-example__standard"></div>
      );
    } else if (motionType === 'ease-out') {
      boxUnderCurve = (
        <div className="motion-example__out"></div>
      );
    } else if (motionType === 'ease-in') {
      boxUnderCurve = (
        <div className="motion-example__in"></div>
      );
    }


    const overlayContent = (
      <div
        className={overlayClasses}
        onClick={this.toggleMotionExample}
        onMouseOver={this.overlayMouseOver}
        onMouseOut={this.overlayMouseOut}
      >
        <button className="motion-example__button" aria-label="Play motion example">
          <svg
            width="99px"
            height="100px"
            viewBox="4 4 99 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              className={playIconClasses}
              stroke="none"
              fillRule="evenodd"
              transform="translate(54.000000, 54.000000) rotate(-270.000000) translate(-54.000000, -54.000000) "
              points="54 5 103 103 5 103"
            >
            </polygon>
            <g className={pauseIconClasses} stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="37" height="98"></rect>
              <rect x="61" y="0" width="37" height="98"></rect>
            </g>
          </svg>
        </button>
      </div>
    );

    const motionExampleContent = isSingleExample ? (
        <div className={containerClasses}>
          <div className="motion-example__easing-demo">
            <div className={motionCurveClasses}>
              {curveSvg}
            </div>
            <div className="motion-example__track">
              {boxUnderCurve}
            </div>
          </div>
          {overlayContent}
        </div>
    ) : (
        <div className={containerClasses}>
          <div className="motion-example__track">
            <div className={correctClassNames}></div>
            {correctInfo}
          </div>
          <div className="motion-example__track">
            <div className={incorrectClassNames}></div>
            {incorrectInfo}
          </div>
          {overlayContent}
        </div>
      );
    return motionExampleContent;
  }
}


export default MotionExample;
