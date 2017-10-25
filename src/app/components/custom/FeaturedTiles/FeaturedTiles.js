import React, { Component } from 'react';
import { ClickableTile } from 'carbon-components-react';

class FeaturedTiles extends Component {
  render() {
    const articleOne = require('../../../../content/getting-started/FAQ/images/article-1.png');
    const articleTwo = require('../../../../content/getting-started/FAQ/images/article-2.png');
    const articleThree = require('../../../../content/getting-started/FAQ/images/article-3.png');

    return (
      <div className="faq__tiles">
        <ClickableTile
          target="_blank"
          className="faq__tile"
          href="https://www.smashingmagazine.com/design-systems-book/"
        >
          <div className="faq__tile-icon">
            <img src={articleOne} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <h5>Smashing Magazine's “Design Systems” book</h5>
          </div>
        </ClickableTile>

        <ClickableTile
          target="_blank"
          className="faq__tile"
          href="http://www.howdesign.com/84-award-winning-projects-from-in-house-design-teams/"
        >
          <div className="faq__tile-icon">
            <img src={articleTwo} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <h5>Winter 2017 HOW In-House Design Award Winner</h5>
          </div>
        </ClickableTile>

        <ClickableTile
          target="_blank"
          className="faq__tile"
          href="https://medium.com/ux-power-tools/the-path-to-design-system-maturity-d403daba692a"
        >
          <div className="faq__tile-icon">
            <img src={articleThree} alt="Smashing Magazine article" />
          </div>
          <div className="faq__tile-info">
            <h5>The Path to Design System Maturity</h5>
          </div>
        </ClickableTile>
      </div>
    );
  }
}

export default FeaturedTiles;
