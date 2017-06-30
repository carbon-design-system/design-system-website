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
              <img src={designKitImage} alt="Sketch icon" />
              <h2>Carbon Design Kit</h2>
              <p>
                The Design Kit consists of core visual styles and patterns. It has everything a designer needs to start building experiences.
              </p>
              <a href="https://github.com/carbon-design-system/carbon-design-kit" target="_blank">Carbon Design Kit</a>
            </div>
            <div>
              <img src={githubImage} alt="Github icon" />
              <h2>Carbon Component Library</h2>
              <p>
                The Component Library gives developers a collection of re-usable HTML
                and Sass partials they can use for building websites and user interfaces.
              </p>
              <a href="https://github.com/carbon-design-system/carbon-components" target="_blank">Carbon Component Library</a>
            </div>
          </div>
          <h3 className="page__divider-heading">Additional Links</h3>
          <div className="resources__bottom">

            <div>
              <h4>Carbon Boilerplate</h4>
              <p>
                A simple boilerplate for rapid UI prototyping with Carbon Components.
              </p>
              <a href="https://carbon-boilerplate.mybluemix.net/" target="_blank">Carbon Boilerplate</a>
            </div>
            <div>
              <h4>Craft Library</h4>
              <p>
                Craft is a Sketch plugin made by Invision that has an easy to access library of sketch-ready Carbon components and design assets.
              </p>
              <a href="https://github.com/carbon-design-system/carbon-design-kit/wiki/Carbon-Craft-Library" target="_blank">Set-up Instructions</a>
            </div>
            <div>
              <h4>Color Accessibility</h4>
              <p>
                This color contrast checker allows you to easily calculate the
                color contrast ratio between two colors, ensuring that it passes WCAG 2.0 Level AA requirements.
              </p>
              <a href="https://marijohannessen.github.io/color-contrast-checker/" target="_blank">Color Contrast Checker</a>
            </div>
            <div>
              <h4>IBM Design Language</h4>
              <p>Carbon uses the IBM Design Language as our guiding principle. These core values remind us to design for an outcome and to be authentically thoughtful.
              </p>
              <a href="https://www.ibm.com/design/language/" target="_blank">IBM Design Language</a>
            </div>
          </div>
          <h3 className="page__divider-heading">Downloads</h3>
          <div className="resources__bottom">
            <div>
              <h4>Presentation Templates</h4>
              <p>Use our branded templates for your presentation needs.</p>
              <a href={keyNoteTemplate} target="_download" className="bx--btn bx--btn--secondary">Download Keynote</a>
              <a href={powerPointTemplate} target="_download" className="bx--btn bx--btn--secondary">Download Powerpoint</a>
            </div>
            <div>
              <h4>Bluemix logo</h4>
              <p>This comprehensive file contains the various versions of the Bluemix logo.</p>
              <a
                href="https://github.com/carbon-design-system/carbon-design-kit/blob/master/Bluemix_Logo-Assets.zip?raw=true"
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
