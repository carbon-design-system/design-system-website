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
          href="https://www.smashingmagazine.com/design-systems-book/"
        >
          <div className="faq__tile-icon">
            <img src={articleFour} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <p>Introducing: Carbon Themes</p>

            <div className="faq__tile-caption">
              <p>Bethany Sonefeld</p>
              <p>August 11, 2017</p>
            </div>
          </div>
        </ClickableTile>

        <ClickableTile
          className="faq__tile"
          href="http://www.howdesign.com/84-award-winning-projects-from-in-house-design-teams/"
        >
          <div className="faq__tile-icon">
            <img src={articleFive} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <p>Winter 2017 HOW In-House Design Award Winner</p>

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
