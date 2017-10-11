import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Markdown from 'markdown-it';
import classNames from 'classnames';

class GlobalSearch extends Component {
  static propTypes = {
    val: PropTypes.string,
    results: PropTypes.array,
    relatedResults: PropTypes.array,
    currentQuery: PropTypes.string,
    activeSearch: PropTypes.bool,
  };

  render() {
    let hideSection = false;
    let count = 0;
    if (
      !(this.relatedSearch === undefined || this.relatedSearch === null) &&
      this.relatedSearch.children.length > 0
    ) {
      [...this.relatedSearch.children].forEach(child => {
        if (
          child.classList.contains('result') &&
          child.classList.contains('is-hidden')
        ) {
          count++;
        }
        if (count === this.relatedSearch.children.length - 1) {
          hideSection = true;
        }
      });
    }
    const searchClasses = classNames({
      'global-search': true,
      'global-search--active': this.props.activeSearch,
    });
    const topResultsClasses = classNames({
      'global-search__results--section': true,
      'global-search__results--section--hidden':
        this.props.results.length === 0,
    });
    const relatedResultsClasses = classNames({
      'global-search__results--section': true,
      'global-search__results--section--hidden':
        this.props.relatedResults.length === 0 || hideSection,
    });
    const relatedResultsText =
      this.props.results.length === 0 ? 'Results' : 'Related';
    const resultsText =
      this.props.relatedResults.length === 0 ? 'Results' : 'Top results';
    const resultsHTML =
      this.props.results.length === 0 &&
      this.props.relatedResults.length === 0 &&
      this.props.val.length > 2
        ? <div className="global-search__results">
            <p className="no-result__text">No results.</p>
            <p className="no-result__help-text">
              It appears we don't have anything that matches your search. Please
              revise and try again.
            </p>
          </div>
        : <div className="global-search__results">
            <div className={topResultsClasses}>
              <h4 className="global-search__sub-heading page__divider-heading">
                {resultsText}
              </h4>
              {Object.keys([...this.props.results]).map(item => {
                const result = this.props.results[item];
                const componentName =
                  result.child.replace(/-/g, ' ').charAt(0).toUpperCase() +
                  result.child.replace(/-/g, ' ').substring(1);
                const resultLink =
                  result.parent === result.child
                    ? `/${result.parent}`
                    : `/${result.parent}/${result.child}`;
                return (
                  <div key={item} className="result top-result">
                    <Link to={resultLink} className="result__component-name">
                      {componentName}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div
              className={relatedResultsClasses}
              ref={relatedSearch => {
                this.relatedSearch = relatedSearch;
              }}
            >
              <h4 className="global-search__sub-heading">
                {relatedResultsText}
              </h4>
              {Object.keys([...this.props.relatedResults]).map((item, key) => {
                if (key >= 10) {
                  return '';
                }
                const result = this.props.relatedResults[item];
                let index;
                if (result.content.indexOf(this.props.currentQuery) < 0) {
                  if (
                    result.content.indexOf(
                      this.props.currentQuery.toLowerCase(),
                    ) < 0
                  ) {
                    index = -1;
                  } else {
                    index = result.content.indexOf(
                      this.props.currentQuery.toLowerCase(),
                    );
                  }
                } else {
                  index = result.content.indexOf(this.props.currentQuery);
                }
                const componentName =
                  result.child.replace(/-/g, ' ').charAt(0).toUpperCase() +
                  result.child.replace(/-/g, ' ').substring(1);
                const section =
                  result.section.replace(/-/g, ' ').charAt(0).toUpperCase() +
                  result.section.replace(/-/g, ' ').substring(1);
                const startIndex = index < 10 ? index : index - 10;
                const slicedString = `...${result.content.slice(
                  startIndex,
                  index + 35,
                )}...`;
                let toHTML = '';
                const md = new Markdown({
                  html: true,
                });
                toHTML = md.render(slicedString);
                toHTML = toHTML
                  .replace(/<[^>]*>/g, ' ')
                  .replace(/\s{2,}/g, ' ')
                  .replace('&amp;', '&')
                  .replace('<span>', '')
                  .replace('</span>', '')
                  .replace('&gt;', '')
                  .replace('&lt;', '')
                  .replace('&quot;', '"')
                  .replace('&lt;g&gt;', '')
                  .trim();
                const shouldHide =
                  toHTML.includes('(images') ||
                  index === -1 ||
                  (process.env.ENV === 'external' &&
                    result.child === 'service-providers');
                const resultClasses = classNames({
                  result: true,
                  'is-hidden': shouldHide,
                });
                const resultLink =
                  result.child === result.section
                    ? `/${result.parent}/${result.child}`
                    : `/${result.parent}/${result.child}/${result.section}`;
                const resultLinkText =
                  result.child === result.section
                    ? `${componentName}`
                    : `${componentName} / ${section}`;
                let indexNumber;
                if (toHTML.indexOf(this.props.currentQuery) < 0) {
                  if (
                    toHTML.indexOf(this.props.currentQuery.toLowerCase()) < 0
                  ) {
                    indexNumber = -1;
                  } else {
                    indexNumber = toHTML.indexOf(
                      this.props.currentQuery.toLowerCase(),
                    );
                  }
                } else {
                  indexNumber = toHTML.indexOf(this.props.currentQuery);
                }
                const firstSubstring = toHTML.substr(0, indexNumber);
                const highlightedWord = toHTML.substr(
                  indexNumber,
                  this.props.currentQuery.length,
                );
                const lastSubstring = toHTML.substr(
                  indexNumber + this.props.currentQuery.length,
                );
                return (
                  <Link key={item} to={resultLink} className={resultClasses}>
                    <p className="related-results__link">
                      <span className="bx--link">
                        {resultLinkText}
                      </span>
                    </p>
                    <p className="result-content">
                      <span>
                        {firstSubstring}
                      </span>
                      <span className="query">
                        {highlightedWord}
                      </span>
                      <span>
                        {lastSubstring}
                      </span>
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>;

    return (
      <div className={searchClasses}>
        {resultsHTML}
      </div>
    );
  }
}

export default GlobalSearch;
