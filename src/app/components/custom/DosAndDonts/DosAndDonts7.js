import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts7 extends Component {
  render() {
    const service5 = require('./images/service-icon-5.png');
    const service6 = require('./images/service-icon-6.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service5} />
          <Example incorrect caption="Incorrect" text="" img={service6} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts7;
