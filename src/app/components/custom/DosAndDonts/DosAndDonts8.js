import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts8 extends Component {
  render() {
    const service7 = require('./images/service-icon-7.png');
    const service8 = require('./images/service-icon-8.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service7} />
          <Example incorrect caption="Incorrect" text="" img={service8} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts8;
