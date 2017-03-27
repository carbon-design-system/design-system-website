import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts3 extends Component {

  render() {
    return (
      <div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Exclamation points:"
            text="Your IBM Bluemix account is ready!"
          />
          <Example
            caption="Exclamation points:"
            text="You've reached your usage limit!"
          />
        </div>
      </div>
    );
  }
}

export default DosAndDonts3;
