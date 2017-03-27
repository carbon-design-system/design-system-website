import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts2 extends Component {

  render() {
    return (
      <div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Active voice:"
            text="In the Limits window, specify the minimum and maximum values."
          />
          <Example
            caption="Passive voice:"
            text="The Limits window is used to specify the minimum and maximum values."
          />
        </div>
      </div>
    );
  }
}

export default DosAndDonts2;
