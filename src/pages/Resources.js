import React from 'react';
import Page from '../internal/Page';

class Resources extends React.Component {

  render() {
    const designKitImage = require('../content/resources/images/resources-1.png');
    const githubImage = require('../content/resources/images/resources-2.png');
    const powerPointTemplate = require('../assets/downloads/Bluemix-Powerpoint-Template.pptx');
    const keyNoteTemplate = require('../assets/downloads/Bluemix-Keynote-Template.key');

    const resourcesContent = (
      <div className="page">
        <div className="page_md">
          <div className="resources__top">
            <div>
              <img src={designKitImage} alt="Design kit" />
              <h2>Design Kit</h2>
              <p>
                The Design Kit consists of core visual styles and patterns.
                It contains everything needed to get started building an experience that contributes to our platform.
              </p>
              <a href="#" target="_blank">Design Kit</a>
            </div>
            <div>
              <img src={githubImage} alt="Design kit" />
              <h2>Component Library</h2>
              <p>
                The Component Library gives developers (FEDs & Engineers) a collection of re-usable HTML
                and Sass partials they can use for building websites and user interfaces.
              </p>
              <a href="#" target="_blank">Component Library</a>
            </div>
            <div>
              <h2>IBM Design Language</h2>
              <p>
                Carbon uses the IBM Design Language as our guiding principle.
                These core values remind us to design for an outcome and to be authentically thoughtful.
              </p>
              <a href="#" target="_blank">IBM Design Language</a>
            </div>
            <div>
              <h2>IBM Web Fonts</h2>
              <p>
                The IBM Design Language uses the Helvetica Neue as the IBM font family across products for brand consistency and cohesion.
              </p>
              <a href="#" target="_blank">IBM web fonts</a>
            </div>
            <div>
              <h2>Carbon Boilerplate</h2>
              <p>
                A simple boilerplate for rapid UI prototyping with Carbon components.
              </p>
              <a href="#" target="_blank">Carbon Boilerplate</a>
            </div>
            <div>
              <h2>Color Accessibility</h2>
              <p>
                This color contrast checker allows you to easily calculate the color contrast ratio between two colors,
                ensuring that it passes WCAG 2.0 Level AA requirements.
              </p>
              <a href="https://marijohannessen.github.io/color-contrast-checker/" target="_blank">Color Contrast Checker</a>
            </div>
          </div>
          <h3 className="page__divider-heading">Downloads</h3>
          <div className="resources__bottom">
            <div>
              <h3>Presentation Templates</h3>
              <p>Use our branded templates for your presentation needs.</p>
              <a href={keyNoteTemplate} target="_download" className="bx--btn bx--btn--secondary">Download Keynote</a>
              <a href={powerPointTemplate} target="_download" className="bx--btn bx--btn--secondary">Download Powerpoint</a>
            </div>
            <div>
              <h3>Bluemix logo</h3>
              <p>This comprehensive file contains the various versions of the Bluemix logo.</p>
              <a
                href="https://github.ibm.com/Bluemix/design-kit/blob/master/Bluemix_Logo-Assets.zip?raw=true"
                target="_blank"
                className="bx--btn bx--btn--secondary"
              >
                Download logo assets
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <Page label="" title="Resources" content={resourcesContent} />
    );
  }
}

export default Resources;
