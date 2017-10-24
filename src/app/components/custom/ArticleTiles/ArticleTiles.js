import React, { Component } from 'react';
import { ClickableTile } from 'carbon-components-react';

class ArticleTiles extends Component {
  render() {
    const articleFour = require('../../../../content/getting-started/FAQ/images/article-4.png');
    const articleFive = require('../../../../content/getting-started/FAQ/images/article-5.png');

    return (
      <div className="faq__tiles">
        <ClickableTile
          className="faq__tile"
          href="https://medium.com/design-ibm/introducing-carbon-themes-83d3985a8627"
        >
          <div className="faq__tile-icon">
            <img src={articleFour} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <h5>Introducing: Carbon Themes</h5>

            <div className="faq__tile-caption">
              <p>Bethany Sonefeld</p>
              <p>August 11, 2017</p>
            </div>
          </div>
        </ClickableTile>

        <ClickableTile
          className="faq__tile"
          href="https://medium.com/design-ibm/carbon-designing-inside-big-blue-8577883cfe42"
        >
          <div className="faq__tile-icon">
            <img src={articleFive} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <h5>Carbon: Designing inside Big Blue</h5>

            <div className="faq__tile-caption">
              <p>Bethany Sonefeld</p>
              <p>March 30, 2017</p>
            </div>
          </div>
        </ClickableTile>
      </div>
    );
  }
}

export default ArticleTiles;
