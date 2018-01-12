import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts6 extends Component {
  render() {
    const service3 = require('./images/service-icon-3.png');
    const service4 = require('./images/service-icon-4.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={service3} />
          <Example incorrect caption="Incorrect" text="" img={service4} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts6;
