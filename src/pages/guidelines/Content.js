import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import PageTabs from '../../internal/PageTabs';
import Glossary from '../../internal/Glossary';
import GlossaryNav from '../../internal/GlossaryNav';
import Markdown from 'markdown-it';
import MarkdownPage from '../../internal/MarkdownPage';

class Content extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  render() {
    const { currentPage } = this.props;
    const md = new Markdown({
      html: true,
    });
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    const glossaryIntro = md.renderInline(
      require('../../content/guidelines/content/content-glossary-intro.md'),
    );
    const tabs = ['general', 'guidelines', 'glossary'];
    const glossaryNavContent = currentPage === 'glossary'
      ? <GlossaryNav />
      : '';
    let page = 'general';
    if (currentPage) {
      page = currentPage;
    }
    const { ENV } = process.env;
    const resources = ENV === 'internal'
      ? <div className="page page_md">
          <h2>Resources</h2>
          <ul>
            <li>
              <a
                href="https://apps.na.collabserv.com/communities/service/html/communitystart?communityUuid=279b622e-3902-4086-9cc7-6c07d8d2d745"
                target="_blank"
              >
                IBM style
              </a>
            </li>
            <li>
              <a
                href="http://tlwi.w3-969.ibm.com/standards/terminology/cgi-bin/lookup.pl?user_group=corporate"
                target="_blank"
              >
                IBM Terminology
              </a>
            </li>
          </ul>
        </div>
      : '';

    return (
      <PageTabs tabs={tabs} currentPage={page}>
        <Tab href="/guidelines/content/general" label="General">
          <MarkdownPage
            content={require('../../content/guidelines/content/general.md')}
          />
          {resources}
        </Tab>
        <Tab href="/guidelines/content/guidelines" label="Guidelines">
          <MarkdownPage
            content={require('../../content/guidelines/content/guidelines.md')}
          />
        </Tab>
        <Tab href="/guidelines/content/glossary" label="Glossary">
          <div className="page">
            <div
              className="page_md"
              dangerouslySetInnerHTML={{ __html: glossaryIntro }}
            />
            {glossaryNavContent}
            <Glossary glossary={glossary} />
          </div>
        </Tab>
      </PageTabs>
    );
  }
}

export default Content;
