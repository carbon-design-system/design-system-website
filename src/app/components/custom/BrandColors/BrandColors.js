import React, { Component } from 'react';

class BrandColors extends Component {

  render() {
    return (
      <div className="brand-colors">
        <div className="brand-colors__color">
          <div></div>
          <p>IBM Blue 30</p>
          <p>#5aaafa</p>
          <p>RGB 90 170 250</p>
        </div>
        <div className="brand-colors__color">
          <div></div>
          <p>IBM Blue 80</p>
          <p>#1d3649</p>
          <p>RGB 29 54 73</p>
        </div>
        <div className="brand-colors__color">
          <div></div>
          <p>IBM Teal 30</p>
          <p>#41d6c3</p>
          <p>RGB 65 214 195</p>
        </div>
      </div>
    );
  }
}

export default BrandColors;
