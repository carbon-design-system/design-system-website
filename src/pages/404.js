import React from 'react';
import Letter from '../internal/Letters';

class FourOhFour extends React.Component {

  render() {
    return (
      <main id="maincontent">
        <div className="fourohfour-container">
          <div className="fourohfour-error">
            <Letter letter="E" active purple className="fourohfour-letter" />
            <Letter letter="R" className="fourohfour-letter" />
            <Letter letter="R" className="fourohfour-letter" />
            <Letter letter="O" active green className="fourohfour-letter" />
            <Letter letter="R" className="fourohfour-letter" />
          </div>

          <div className="fourohfour-large">
            <span>4</span>
            <Letter letter="O" active className="fourohfour-letter" />
            <span>4</span>
          </div>

          <div className="fourohfour-caption">
            <p>Oops! We couldn’t find the page you were looking for.</p>
            <span>Try finding it in the left navigation.</span>
          </div>
        </div>
      </main>
    );
  }
}

export default FourOhFour;
