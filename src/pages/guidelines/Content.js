import React, { PropTypes } from 'react';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageTabs from '../../internal/PageTabs';
import Glossary from '../../internal/Glossary';
import GlossaryNav from '../../internal/GlossaryNav';
import Markdown from 'markdown-it';
import MarkdownPage from '../../internal/MarkdownPage';

class Content extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const {
      currentPage,
    } = this.props;
    const md = new Markdown({
      html: true
    });
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    const glossaryIntro = md.renderInline(require('../../content/guidelines/content/content-glossary-intro.md'));
    const tabs = ['general', 'guidelines', 'glossary'];
    const glossaryNavContent = (currentPage === 'glossary') ? <GlossaryNav /> : '';
    let page = 'general';
    if (currentPage) {
      page = currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={page}>
        <Tab href="/guidelines/content/general" label="General">
          <MarkdownPage content={require('../../content/guidelines/content/content-general.md')} />
        </Tab>
        <Tab href="/guidelines/content/guidelines" label="Guidelines">
          <MarkdownPage content={require('../../content/guidelines/content/content-guidelines.md')} />
        </Tab>
        <Tab href="/guidelines/content/glossary" label="Glossary">
          <div className="page">
            <div className="page_md" dangerouslySetInnerHTML={{ __html: glossaryIntro }} />
            {glossaryNavContent}
            <Glossary glossary={glossary} />
          </div>
        </Tab>
      </PageTabs>
    );
  }
}

export default Content;
