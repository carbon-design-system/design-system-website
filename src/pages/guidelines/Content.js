import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageTabs from '../../internal/PageTabs';
import Glossary from '../../internal/Glossary';
import GlossaryNav from '../../internal/GlossaryNav';

class Content extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  state = {
    letters: [],
  }

  componentDidMount() {
    this.getEntryPositions();
  }

  getEntryPositions() {
    const letters = [];
    document.querySelectorAll('.glossary-entry').forEach(entry => {
      letters.push({
        id: entry.id,
        positionTop: entry.offsetTop,
        positionBot: entry.offsetTop + entry.offsetHeight,
      });
    });

    this.setState({
      letters,
    });
  }

  render() {
    const {
      currentPage,
    } = this.props;
    const general = require('../../content/guidelines/content/content-general.md'); // eslint-disable-line
    const guidelines = require('../../content/guidelines/content/content-guidelines.md'); // eslint-disable-line
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    const glossaryIntro = require('../../content/guidelines/content/content-glossary-intro.md');
    const tabs = ['general', 'guidelines', 'glossary'];
    let page = 'general';
    if (currentPage) {
      page = currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={page}>
        <Tab href="/guidelines/content/general" label="General">
          <div className="page">
            <Markdown options={{ html: true }}>
              {general}
            </Markdown>
          </div>
        </Tab>
        <Tab href="/guidelines/content/guidelines" label="Guidelines">
          <div className="page">
            <Markdown options={{ html: true }}>
              {guidelines}
            </Markdown>
          </div>
        </Tab>
        <Tab href="/guidelines/content/glossary" label="Glossary">
          <div className="page">
            <Markdown options={{ html: true }}>
              {glossaryIntro}
            </Markdown>
            <GlossaryNav letters={this.state.letters} />
            <Glossary glossary={glossary} />
          </div>
        </Tab>
      </PageTabs>
    );
  }
}

export default Content;
