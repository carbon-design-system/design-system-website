import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';
const md = new Markdown({
  html: true
});

class Glossary extends Component {
  static propTypes = {
    glossary: PropTypes.object
  }

  renderGlossaryEntry = (glossary, glossaryEntry) => {
    const entry = glossary[glossaryEntry];
    const letterImage = require(`../../content/guidelines/content/images/glossary/${glossaryEntry}.png`); // eslint-disable-line
    return (
      <div id={glossaryEntry} key={glossaryEntry} className="glossary-entry">
        <img alt={glossaryEntry} src={letterImage} className="glossary-entry__main-heading" />
        {Object.keys(entry).map(list => {
          const listItems = Object.keys(entry[list]).map(word => {
            const currentWord = entry[list][word];
            const wordId = word.toLowerCase().replace(' ', '-');
            const desc = (currentWord.desc) ? md.renderInline(currentWord.desc) : '';
            const subtext = (currentWord.subtext) ? md.renderInline(currentWord.subtext) : '';
            return (
              <div id={wordId} key={word} className="glossary-entry__word">
                <h4 className="glossary-entry__word-heading">{word}</h4>
                <p className="glossary-entry__desc" dangerouslySetInnerHTML={{ __html: desc }} />
                <p className="glossary-entry__subtext" dangerouslySetInnerHTML={{ __html: subtext }} />
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

  render() {
    const {
      glossary
    } = this.props;

    const navItems =
      Object.keys(glossary).map(glossaryEntry => {
        if (!(glossaryEntry === '__content')) {
          return this.renderGlossaryEntry(glossary, glossaryEntry);
        }
        return '';
      });

    return (
      <div className="glossary">
        {navItems}
      </div>
    );
  }
}

export default Glossary;
