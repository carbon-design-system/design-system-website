import React, { Component } from 'react';

class ColorContrast extends Component {
  render() {
    const normalTextImage = require('../../content/style/colors/images/normal-text-icon.svg');
    const largeTextImage = require('../../content/style/colors/images/large-text-icon.svg');
    const ui1 = require('../../content/style/colors/images/ui-01.svg');
    const ui2 = require('../../content/style/colors/images/ui-02.svg');
    const ui3 = require('../../content/style/colors/images/ui-03.svg');

    return (
      <div className="color-contrast">
        <ul className="color-contrast__keys">
          <li>
            <img alt="normal text icon" src={normalTextImage} />
            <p>Text (4.5:1)</p>
          </li>
          <li>
            <img alt="large text icon" src={largeTextImage} />
            <p>
              Large Text (3:1): <span>at least 24px / 19px bold</span>
            </p>
          </li>
        </ul>
        <ul className="color-contrast__examples">
          <li>
            <h4>Type colors</h4>
            <ul className="color-contrast__examples--type-colors">
              <li className="blue-40">
                <div />
                <div>
                  <p>brand-02</p>
                  <p>#5596e6</p>
                </div>
              </li>
              <li className="blue-51">
                <div />
                <div>
                  <p>brand-01</p>
                  <p>#3d70b2</p>
                </div>
              </li>
              <li className="navy-gray-6">
                <div />
                <div>
                  <p>text-02</p>
                  <p>#5a6872</p>
                </div>
              </li>
              <li className="blue-90">
                <div />
                <div>
                  <p>text-01</p>
                  <p>#152935</p>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h4>Background colors</h4>
            <ul className="color-contrast__examples--bg-colors">
              <li className="ui-01">
                <img src={ui1} alt="ui-01" />
                <p>ui-01</p>
                <p>#ffffff</p>
              </li>
              <li className="ui-02">
                <img src={ui2} alt="ui-02" />
                <p>ui-02</p>
                <p>#f5f7fa</p>
              </li>
              <li className="ui-03">
                <img src={ui3} alt="ui-03" />
                <p>ui-03</p>
                <p>#f0f3f6</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorContrast;
