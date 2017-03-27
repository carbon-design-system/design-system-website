import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts4 extends Component {

  render() {
    return (
      <div>
        <div className="do-and-dont full-width">
          <Example
            correct
            caption="Using Please:"
            text="Indexing might take a few minutes. Please wait."
          />
          <p>Instead of using <strong>may</strong>, use <strong>can </strong>
           to indicate ability or use <strong>might</strong> to indicate possibility.</p>
        </div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Ability:"
            text="You can use the command line interface to update your app."
          />
          <Example
            caption="Ability:"
            text="You may use the command line interface to update your app."
          />
        </div>
        <div className="do-and-dont">
          <Example
            correct
            caption="Possibility:"
            text="You might need more advanced features when you're integrating with another app."
          />
          <Example
            caption="Possibility:"
            text="You may need more advanced features when you're integrating with another app."
          />
        </div>
      </div>
    );
  }
}

export default DosAndDonts4;
