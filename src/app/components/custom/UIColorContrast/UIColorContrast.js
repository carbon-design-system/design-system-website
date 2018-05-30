import React, { Component } from 'react';

class UIColorContrast extends Component {
  render() {
    const contrast1 = require('../../../../content/style/color/images/high-contrast-icon.svg');
    const contrast2 = require('../../../../content/style/color/images/low-contrast-icon.svg');
    const ui4 = require('../../../../content/style/color/images/ui-04.svg');
    const ui5 = require('../../../../content/style/color/images/ui-05.svg');

    return (
      <div className="color-contrast">
        <ul className="color-contrast__keys">
          <li>
            <img alt="normal text icon" src={contrast1} />
            <p>3:1 contrast</p>
          </li>
          <li>
            <img alt="large text icon" src={contrast2} />
            <p>4:5:1 contrast</p>
          </li>
        </ul>
        <ul className="color-contrast__examples">
          <li>
            <h4>Foreground colors</h4>
            <ul className="color-contrast__examples--type-colors">
              <li className="blue-51">
                <div />
                <div>
                  <p>brand-01</p>
                  <p>#3d70b2</p>
                </div>
              </li>
              <li className="ui-05">
                <div />
                <div>
                  <p>ui-05</p>
                  <p>#5a6872</p>
                </div>
              </li>
              <li className="ui-04">
                <div />
                <div>
                  <p>ui-04</p>
                  <p>#8897a2</p>
                </div>
              </li>
              <li className="ui-03">
                <div />
                <div>
                  <p>ui-03</p>
                  <p>#dfe3e6</p>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h4>Background colors</h4>
            <ul className="color-contrast__examples--bg-colors">
              <li className="ui-01">
                <img src={ui4} alt="ui-01" />
                <p>ui-01</p>
                <p>#ffffff</p>
              </li>
              <li className="ui-02">
                <img src={ui5} alt="ui-02" />
                <p>ui-02</p>
                <p>#f4f7fb</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default UIColorContrast;
