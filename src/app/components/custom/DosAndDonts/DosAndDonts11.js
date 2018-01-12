import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts11 extends Component {
  render() {
    const service13 = require('./images/service-icon-13.png');
    const service14 = require('./images/service-icon-14.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service13} />
          <Example incorrect caption="Incorrect" text="" img={service14} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts11;
