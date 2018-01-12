import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts5 extends Component {
  render() {
    const service1 = require('./images/service-icon-1.png');
    const service2 = require('./images/service-icon-2.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service1} />
          <Example incorrect caption="Incorrect" text="" img={service2} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts5;
