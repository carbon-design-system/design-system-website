import React from 'react';
import Page from '../../components/internal/Page';
import { ClickableTile } from 'carbon-components-react';

class Resources extends React.Component {

  render() {
    const designKitImage = require('../../../content/resources/images/resources-1.png');
    const githubImage = require('../../../content/resources/images/resources-2.png');
    const codepenImage = require('../../../content/resources/images/codepen-icon.svg');
    const themingImage = require('../../../content/resources/images/sandbox-icon.svg');
    const colorContrastImage = require('../../../content/resources/images/color-contrast-icon.svg');
    const reactImage = require('../../../content/resources/images/react-icon.svg');


    const resourcesContent = (
      <div className="page">
        <div className="page_md">
          <h2 className="resources__heading">Tools</h2>
          <div className="resources__top">
            <ClickableTile className="resources__tile" href="https://github.com/carbon-design-system/carbon-design-kit">
              <div className="resources__tile-icon">
                <img src={designKitImage} alt="Design kit" />
              </div>
              <div className="resources__tile-info">
                <p>Carbon Design Kit</p>
                <p>A Sketch file containing core visual styles, components, and patterns a designer needs to use Carbon as a framework for building product experiences.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="https://github.com/carbon-design-system/carbon-components">
              <div className="resources__tile-icon">
                <img src={githubImage} alt="Components repo" />
              </div>
              <div className="resources__tile-info">
                <p>Carbon Component Library</p>
                <p>The Component Library gives developers a collection of re-usable HTML and Sass partials they can use for building websites and user interfaces.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="http://www.codepen.io/team/carbon">
              <div className="resources__tile-icon">
                <img src={codepenImage} alt="Codepen for Carbon" />
              </div>
              <div className="resources__tile-info">
                <p>Carbon CodePen</p>
                <p>CodePen, a social development playground for front-end designers and developers, houses demos of Carbon Components.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="http://themes.carbondesignsystem.com">
              <div className="resources__tile-icon">
                <img src={themingImage} alt="Carbon Theming Sandbox" />
              </div>
              <div className="resources__tile-info">
                <p>Theming Sandbox</p>
                <p>The sandbox allows you to build a custom theme by changing a color variable’s hex value and then exporting the theme sheet SCSS file.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="https://marijohannessen.github.io/color-contrast-checker/">
              <div className="resources__tile-icon">
                <img src={colorContrastImage} alt="Color Contrast Checker" />
              </div>
              <div className="resources__tile-info">
                <p>Color contrast checker</p>
                <p>This color contrast checker allows you to easily calculate the color contrast ratio between two colors, ensuring that it passes WCAG 2.0 Level AA requirements.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="https://github.com/carbon-design-system/carbon-boilerplate">
              <div className="resources__tile-icon">
                <img src={githubImage} alt="carbon boilerplate icon" />
              </div>
              <div className="resources__tile-info">
                <p>Carbon Boilerplate</p>
                <p>A simple boilerplate for rapid UI prototyping with Carbon components.</p>
              </div>
            </ClickableTile>
            <ClickableTile className="resources__tile" href="http://react.carbondesignsystem.com/">
              <div className="resources__tile-icon">
                <img src={reactImage} alt="React icon" />
              </div>
              <div className="resources__tile-info">
                <p>React Storybook</p>
                <p>Carbon Components, built in React.</p>
              </div>
            </ClickableTile>
          </div>
          <h2 className="resources__heading">Additional resources</h2>
          <div className="resources__bottom">
            <div>
              <h4>IBM Design Language</h4>
              <p>
                Carbon uses the IBM Design Language as our guiding principle. These core values remind us to design for an outcome and to be authentically thoughtful.
              </p>
              <a href="https://www.ibm.com/design/language/" target="_blank">IBM Design Language</a>
            </div>
            <div>
              <h4>IBM Plex</h4>
              <p>
                IBM Design uses Plex across products for brand consistency and cohesion.
              </p>
              <a href="https://github.com/IBM/type" target="_blank">IBM Plex</a>
            </div>
          </div>
          <h2 className="resources__heading">Articles</h2>
          <div className="resources__bottom">
            <div>
              <h4>Carbon: Designing Inside Big Blue</h4>
              <p>Brief article description goes here.</p>
              <a href="https://medium.com/design-ibm/carbon-designing-inside-big-blue-8577883cfe42" target="_blank">Medium Article</a>
            </div>
            <div>
              <h4>Introducing Carbon Themes</h4>
              <p>Brief article description goes here.</p>
              <a href="https://medium.com/design-ibm/introducing-carbon-themes-83d3985a8627" target="_blank">Medium Article</a>
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
