import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts12 extends Component {
  render() {
    const service15 = require('./images/service-icon-15.png');
    const service16 = require('./images/service-icon-16.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service15} />
          <Example incorrect caption="Incorrect" text="" img={service16} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts12;
