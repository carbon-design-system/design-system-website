import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts9 extends Component {
  render() {
    const service9 = require('./images/service-icon-9.png');
    const service10 = require('./images/service-icon-10.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service9} />
          <Example incorrect caption="Incorrect" text="" img={service10} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts9;
