import React, { Component } from 'react';

class GridExample extends Component {

  render() {
    const grid1 = require('../../content/style/grid/images/grid-1.png');
    const grid2 = require('../../content/style/grid/images/grid-2.png');
    const grid3 = require('../../content/style/grid/images/grid-3.png');
    const ibmEye = require('../../assets/images/ibm-eye.png');

    return (
      <div className="grid-example">
        <ul className="grid-example__grids">
          <li className="image-overlay">
            <a className="image-overlay__overlay" href={grid1} target="_blank">
              <img src={ibmEye} alt="ibm eye" />
              <p>View at 100%</p>
            </a>
            <img src={grid1} alt="grid 1" />
          </li>
          <li className="image-overlay">
            <a className="image-overlay__overlay" href={grid2} target="_blank">
              <img src={ibmEye} alt="ibm eye" />
              <p>View at 100%</p>
            </a>
            <img src={grid2} alt="grid 2" />
          </li>
          <li className="image-overlay">
            <a className="image-overlay__overlay" href={grid3} target="_blank">
              <img src={ibmEye} alt="ibm eye" />
              <p>View at 100%</p>
            </a>
            <img src={grid3} alt="grid 3" />
          </li>
        </ul>
        <div className="grid-example__keys">
          <p>Key:</p>
          <p>Columns <span className="columns"></span> / </p>
          <p>Gutter <span className="gutter"></span> / </p>
          <p>Margins <span className="margins"></span></p>
        </div>
      </div>
    );
  }
}

export default GridExample;
