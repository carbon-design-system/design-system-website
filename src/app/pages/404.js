import React from 'react';

const jackalope = require('../../assets/images/jackalope.svg');

class FourOhFour extends React.Component {
  render() {
    return (
      <main id="maincontent">
        <div className="fourohfour-container">
          <div className="fourohfour-large">
            <img alt="404 jackalope" src={jackalope} />
          </div>

          <div className="fourohfour-caption">
            <p>Congratulations! You found the illusive jackalope!</p>
            <span>
              Unfortunately, we couldn't find the page you were looking for.
              Here are some helpful links instead:{' '}
              <a href="/components">Components</a>,{' '}
              <a href="/resources">Resources</a>
            </span>
          </div>
        </div>
      </main>
    );
  }
}

export default FourOhFour;
