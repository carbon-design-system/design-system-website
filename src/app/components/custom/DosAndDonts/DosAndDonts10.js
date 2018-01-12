import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts10 extends Component {
  render() {
    const service11 = require('./images/service-icon-11.png');
    const service12 = require('./images/service-icon-12.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service11} />
          <Example incorrect caption="Incorrect" text="" img={service12} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts10;
