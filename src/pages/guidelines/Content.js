import React from 'react';
import Markdown from 'react-remarkable';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageTabs from '../../internal/PageTabs';

class Content extends React.Component {
  renderGlossaryEntry = (glossary, glossaryEntry) => {
    const entry = glossary[glossaryEntry];
    const letterImage = require(`../../content/guidelines/content/images/glossary/${glossaryEntry}.png`); // eslint-disable-line
    return (
      <div id={glossaryEntry} key={glossaryEntry} className="glossary-entry">
        <img alt={glossaryEntry} src={letterImage} className="glossary-entry__main-heading" />
        {Object.keys(entry).map(list => {
          const listItems = Object.keys(entry[list]).map(word => {
            const currentWord = entry[list][word];
            return (
              <div id={word} key={word} className="glossary-entry__word">
                <h4 className="glossary-entry__word-heading">{word}</h4>
                <Markdown container="p">
                  {currentWord.desc}
                </Markdown>
                <Markdown container="p">
                  {currentWord.subtext}
                </Markdown>
              </div>
            );
          });
          return (
            <div key={list} className="glossary-entry__list">
              <h2 className="glossary-entry__heading">{list}</h2>
              {listItems}
            </div>
          );
        })}
      </div>
    );
  }

  renderGlossaryList = (list) => {
    Object.keys(list).map(item => {
      const word = list[item];
      return (
        <div id={item} className="glossary-entry__word">
          <h4>{item}</h4>
          <p>{word.desc}</p>
          <p>{word.subtext}</p>
        </div>
      )
    });
  }

  render() {
    const general = require('../../content/guidelines/content/content-general.md'); // eslint-disable-line
    const guidelines = require('../../content/guidelines/content/content-guidelines.md'); // eslint-disable-line
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    const tabs = ['general', 'guidelines', 'glossary'];
    let currentPage = 'general';
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/guidelines/content/general" label="General">
          <div className="page">
            <Markdown options={{ html: true }} source={general} />
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
            {Object.keys(glossary).map(glossaryEntry => {
              if (!(glossaryEntry === '__content')) {
                return this.renderGlossaryEntry(glossary, glossaryEntry);
              }
            })}
          </div>
        </Tab>
      </PageTabs>
    );
  }
}

export default Content;
