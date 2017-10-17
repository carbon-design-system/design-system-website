import React from 'react';
import Page from '../../components/internal/Page';
import { ClickableTile } from 'carbon-components-react';

class Resources extends React.Component {

  render() {
    const designKitImage = require('../../../content/resources/images/resources-1.png');
    const githubImage = require('../../../content/resources/images/resources-2.png');

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
          </div>
          <h2 className="resources__heading">Additional Links</h2>
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
              <a href="" target="_blank">IBM Plex</a>
            </div>
          </div>
          <h2 className="resources__heading">Articles</h2>
          <div className="resources__bottom">
            <div>
              <h4>Carbon: Designing Inside Big Blue</h4>
              <p>Brief article description goes here.</p>
              <a href="" target="_blank">Medium Article</a>
            </div>
            <div>
              <h4>Introducing Carbon Themes</h4>
              <p>Brief article description goes here.</p>
              <a href="" target="_blank">Medium Article</a>
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
