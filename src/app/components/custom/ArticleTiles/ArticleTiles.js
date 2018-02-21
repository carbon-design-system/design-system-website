import React, { Component } from 'react';
import { ClickableTile } from 'carbon-components-react';

class ArticleTiles extends Component {
  render() {
    const articleFour = require('../../../../content/getting-started/FAQ/images/article-4.png');
    const articleFive = require('../../../../content/getting-started/FAQ/images/article-5.png');
    const articleSix = require('../../../../content/getting-started/FAQ/images/article-6.png');

    return (
      <div className="faq__tiles">
      <ClickableTile
        target="_blank"
        className="faq__tile"
        href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6"
      >
        <div className="faq__tile-icon">
          <img src={articleSix} alt="Data Table updates in Carbon React v5.22.0" />
        </div>
        <div className="faq__tile-info">
          <h5>Data Table updates in Carbon React v5.22.0</h5>

          <div className="faq__tile-caption">
            <p>Josh Black</p>
            <p>February 20, 2018</p>
          </div>
        </div>
      </ClickableTile>

        <ClickableTile
          target="_blank"
          className="faq__tile"
          href="https://medium.com/design-ibm/introducing-carbon-themes-83d3985a8627"
        >
          <div className="faq__tile-icon">
            <img src={articleFour} alt="Carbon themes" />
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
          target="_blank"
          className="faq__tile"
          href="https://medium.com/design-ibm/carbon-designing-inside-big-blue-8577883cfe42"
        >
          <div className="faq__tile-icon">
            <img src={articleFive} alt="Designing inside Big blue" />
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
