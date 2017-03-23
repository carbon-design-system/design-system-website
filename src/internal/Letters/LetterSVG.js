import React, { Component, PropTypes } from 'react';

class LetterSVG extends Component {
  static propTypes = {
    letter: PropTypes.string,
  }

  state = {
    A: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="63"
        viewBox="0 0 74 63"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="a1" d="M33.0845 6.1583l30.5773 56.755H.869z" />
          <mask id="a2" width="62.7928" height="56.755" x="0" y="0" fill="#fff">
            <use xlinkHref="#a1" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#8CD211" d="M43.0845.1583l30.5773 56.755H10.869" />
          <use stroke="#152935" strokeWidth="2" mask="url(#a1)" xlinkHref="#a1" />
        </g>
      </svg>
    ),
    B: (
      <svg xmlns="http://www.w3.org/2000/svg" id="B-shape" viewBox="0 0 57.5 73">
        <path fill="#5596e6" id="B-Solid" d="M57.5 67.17H8.33V0H57.5L36.71 32.75 57.5 67.17z" />
        <path fill="#152935" id="B-Outline" d="M45.53 7.83L26.69 37.51l-.66 1 .64 1.06L45.62 71H2V7.83h43.53m3.64-2H0V73h49.17L28.38 38.58 49.17 5.83z" />
      </svg>
    ),
    C: (
      <svg viewBox="0 0 73 73.15">
        <path fill="#e62133" d="M12.18 52.67V17.56L42.59 0 73 17.56v35.11L42.59 70.23 12.18 52.67z" />
        <path fill="#231f20" d="M31.41 73.15L0 55V18.75L31.41.61l31.41 18.14V55zM2 53.87l29.41 17 29.41-17v-34l-29.41-17L2 19.9v34z" />
      </svg>
    ),
    D: (
      <svg viewBox="0 0 55.77 72.75">
        <path fill="#efc100" d="M7.38 0v63c26.72 0 48.38-14.1 48.38-31.48S34.11 0 7.38 0z" />
        <path fill="#152935" d="M1 72.75H0v-65h1c27.22 0 49.38 14.6 49.38 32.52S28.22 72.75 1 72.75zm1-63v61c25.66-.35 46.38-13.89 46.38-30.48S27.66 10.13 2 9.75z" />
      </svg>
    ),
    E: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="61"
        viewBox="0 0 60 61"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="e1" d="M.719 6.884H53.772v53.8232H.719z" />
          <mask id="e2" width="53.0527" height="53.8231" x="0" y="0" fill="#fff">
            <use xlinkHref="#e1" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#5596E6" d="M6.719.884H59.772v53.8232H6.719z" />
          <use stroke="#152935" strokeWidth="4" mask="url(#e2)" xlinkHref="#e1" />
        </g>
      </svg>
    ),
    G: (
      <svg viewBox="0 0 54.87 73">
        <ellipse fill="#5596e6" cx="32.52" cy="33.3" rx="22.35" ry="33.3" />
        <path fill="#152935" d="M22.35 8.41c11.22 0 20.35 14 20.35 31.3S33.57 71 22.35 71 2 57 2 39.7 11.13 8.41 22.35 8.41m0-2C10 6.41 0 21.31 0 39.7S10 73 22.35 73 44.7 58.09 44.7 39.7 34.7 6.4 22.35 6.4z" />
      </svg>
    ),
    I: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="63" viewBox="900 619 21 63">
        <g fill="none" fillRule="evenodd">
          <path fill="#E71D32" d="M907.87 674.142h11.686v-53.916H907.87" />
          <path stroke="#152935" strokeWidth="2" d="M902.87 680.142h11.686v-53.916H902.87z" />
        </g>
      </svg>
    ),
    M: (
      <svg viewBox="0 0 73.01 61.48">
        <path fill="#5596e6" d="M73.01 21.7L61.78 57.36l-37.39.33-11.87-35.45L42.57 0l30.44 21.7z" />
        <path fill="#152935" d="M30.2 6.38l27.94 20.2-10.58 32.81-34.48.08L2.35 26.71 30.2 6.38m0-2.47L.01 26l11.63 35.48 37.37-.09 11.48-35.58L30.19 3.9z" />
      </svg>
    ),
    N: (
      <svg viewBox="0 0 72.5 67.25">
        <path fill="#af6ee8" d="M64 57H10.25l8-57H72.5L64 57z" />
        <path fill="#152935" d="M59.93 12.25l-7.9 53H2.3l7.44-53h50.19m2.32-2H8l-8 57h53.75l8.5-57z" />
      </svg>
    ),
    O: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="306 767 64 65">
        <g fill="none" fillRule="evenodd" transform="translate(307.5 767.806)">
          <ellipse cx="33.607" cy="28.433" fill="#EFC100" rx="27.714" ry="28.117" />
          <ellipse cx="28.607" cy="34.433" stroke="#152935" strokeWidth="2" rx="27.714" ry="28.117" />
        </g>
      </svg>
    ),
    R: (
      <svg xmlns="http://www.w3.org/2000/svg" id="Diamond" viewBox="0 0 65.17 72.81">
        <path fill="#eec11b" d="M38.02 0l27.15 37.09-26.68 35.72-28.04-36.19L38.02 0z" />
        <path fill="#231f20" d="M27.55 3.36l24.68 33.72-24.22 32.43-25.5-32.9 25-33.25M27.58 0L0 36.62l28.08 36.19 26.64-35.72L27.58 0z" />
      </svg>
    ),
    S: (
      <svg viewBox="0 0 73 73">
        <path fill="#8cd211" d="M73 66.5H11.28l18-33.25L11.28 0H73L54 33.25 73 66.5z" />
        <path fill="#152935" d="M58.27 8.5L41 38.76l-.57 1 .57 1L58.27 71H3.36l16.4-30.3.52-1-.52-1L3.36 8.5h54.91m3.45-2H0l18 33.25L0 73h61.72l-19-33.25 19-33.25z" />
      </svg>
    ),
    T: (
      <svg xmlns="http://www.w3.org/2000/svg" width="59" height="78" viewBox="1438 611 59 78">
        <defs>
          <path id="a" d="M.375 8h51v70h-51z" />
          <mask id="b" width="51" height="70" x="0" y="0" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(1438 611)">
          <path fill="#EFC100" d="M7.375 0h51v70h-51z" />
          <use stroke="#152935" strokeWidth="2" mask="url(#a)" xlinkHref="#a" />
        </g>
      </svg>
    ),
    Y: (
      <svg viewBox="0 0 73 60.41">
        <path fill="#e71d32" d="M32.05 60.41L16.02 32.38 0 4.35l32.29.14 32.29.14-16.27 27.89-16.26 27.89z" />
        <path fill="#152935" d="M11.88 2.01l28.82.13 28.83.13L55 27.17 40.48 52.08l-14.3-25-14.3-25m-3.46-2l16 28 16 28 16.31-27.91L73 .28 40.71.14 8.42 0z" />
      </svg>
    )
  }

  render() {
    return (
      <div>{this.state[this.props.letter]}</div>
    );
  }
}

export default LetterSVG;
