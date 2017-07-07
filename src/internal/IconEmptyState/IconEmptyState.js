import React, { Component } from 'react';
import { Button } from 'carbon-components-react';

class IconEmptyState extends Component {
  render() {
    return (
      <div className="icon-empty-state">
        <div className="icon-empty-state__container">
          <div className="icon-empty-state__shapes">
            <svg viewBox="0 0 73 73.15">
              <path
                fill="#e62133"
                d="M12.18 52.67V17.56L42.59 0 73 17.56v35.11L42.59 70.23 12.18 52.67z"
              />
              <path
                fill="#231f20"
                d="M31.41 73.15L0 55V18.75L31.41.61l31.41 18.14V55zM2 53.87l29.41 17 29.41-17v-34l-29.41-17L2 19.9v34z"
              />
            </svg>
            <svg viewBox="0 0 73 73">
              <path
                fill="#8cd211"
                d="M73 66.5H11.28l18-33.25L11.28 0H73L54 33.25 73 66.5z"
              />
              <path
                fill="#152935"
                d="M58.27 8.5L41 38.76l-.57 1 .57 1L58.27 71H3.36l16.4-30.3.52-1-.52-1L3.36 8.5h54.91m3.45-2H0l18 33.25L0 73h61.72l-19-33.25 19-33.25z"
              />
            </svg>
            <svg viewBox="0 0 65.17 72.81">
              <path
                fill="#eec11b"
                d="M38.02 0l27.15 37.09-26.68 35.72-28.04-36.19L38.02 0z"
              />
              <path
                fill="#231f20"
                d="M27.55 3.36l24.68 33.72-24.22 32.43-25.5-32.9 25-33.25M27.58 0L0 36.62l28.08 36.19 26.64-35.72L27.58 0z"
              />
            </svg>
            <svg viewBox="0 0 59.17 60.41">
              <path fill="#AF6EE8" d="M6 0h53.17v53.92H6z" />
              <path
                fill="#152935"
                d="M51.17 8.49v49.92H2V8.49h49.17m2-2H0v53.92h53.17V6.49z"
              />
            </svg>
          </div>
          <h4>No results found.</h4>
          <p>
            It appears we don't have an icon that matches your search. Try different search terms or give us a hand - submit your own design to the library.
          </p>
          <Button
            href="https://github.com/carbon-design-system/carbon-icons"
            className="icon-empty-state__btn bx--btn"
            kind="secondary"
            icon="add--glyph"
            target="_blank"
            role="button"
            iconDescription="submit an icon"
          >
            Submit an Icon
          </Button>
        </div>
      </div>
    );
  }
}

export default IconEmptyState;
