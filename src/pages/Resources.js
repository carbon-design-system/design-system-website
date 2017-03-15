import React from 'react';
import Page from '../internal/Page';

class Resources extends React.Component {

  render() {
    const designKitImage = require('../content/resources/images/resources-1.png');
    const githubImage = require('../content/resources/images/resources-2.png');

    const resourcesContent = (
      <div className="page">
        <ul className="resources__top">
          <li>
            <img src={designKitImage} alt="Design kit" />
            <h2>Design Kit</h2>
            <p>
              The Design Kit consists of core visual styles and patterns.
              It contains everything needed to get started building an experience that contributes to our platform.
            </p>
            <a href="#" target="_blank">Design Kit</a>
          </li>
          <li>
            <img src={githubImage} alt="Design kit" />
            <h2>Component Library</h2>
            <p>
              The Component Library gives developers (FEDs & Engineers) a collection of re-usable HTML
              and Sass partials they can use for building websites and user interfaces.
            </p>
            <a href="#" target="_blank">Component Library</a>
          </li>
          <li>
            <h2>IBM Design Language</h2>
            <p>
              Carbon uses the IBM Design Language as our guiding principle.
              These core values remind us to design for an outcome and to be authentically thoughtful.
            </p>
            <a href="#" target="_blank">IBM Design Language</a>
          </li>
          <li>
            <h2>IBM Web Fonts</h2>
            <p>
              IBM Design uses the Helvetica Neue for IBM font family across products for brand consistency and cohesion.
            </p>
            <a href="#" target="_blank">IBM web fonts</a>
          </li>
        </ul>
      </div>
    );

    return (
      <Page label="" title="Resources" content={resourcesContent} />
    );
  }
}

export default Resources;
