import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts1 extends Component {

  render() {
    return (
      <div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Future Tense:"
            text="The API returns a promise."
          />
          <Example
            caption="Future Tense:"
            text="The API will return a promise."
          />
        </div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Past tense:"
            text="The limit was exceeded."
          />
          <Example
            caption="Past tense:"
            text="The limit has been exceeded."
          />
        </div>
      </div>
    );
  }
}

export default DosAndDonts1;
