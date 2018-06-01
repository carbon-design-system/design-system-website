import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Search } from 'carbon-components-react';
import icons from 'carbon-icons';

import PageTabs from '../../components/internal/PageTabs';
import IconCard from '../../components/internal/IconCard';
import IconEmptyState from '../../components/internal/IconEmptyState';
import MarkdownPage from '../../components/internal/MarkdownPage';

function printAttributes(attrs) {
  return Object.keys(attrs).map(key => `${key}="${attrs[key]}"`).join(' ');
}

function toSVG(icon) {
  const { svgData, width, height, viewBox } = icon;
  const svg = children =>
    `<svg ${printAttributes({ width, height, viewBox })}>${children}</svg>`;
  const paths = svgData.paths.map(path => `<path d="${path.d}"></path>`).join('');

  if (!svgData.g) {
    return svg(paths);
  }

  return svg(`<g ${printAttributes(svgData.g)}>${paths}</g>`);
}

export default class Iconography extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string
  };

  static defaultProps = {
    currentPage: 'library'
  };

  state = {
    searchValue: '',
    iconSearchResults: []
  };

  filterIconsByName = (icons, name) => icons.filter(icon => icon.name.includes(name));

  filterIconsByTag = (icons, tag) =>
    icons.filter(icon => icon.tags.join('').includes(tag));

  handleSearch = (icons, searchValue) => {
    const searchVal = searchValue.toLowerCase();
    const namedIcons = this.filterIconsByName(icons, searchVal);
    // const taggedIcons = this.filterIconsByTag(icons, searchVal);
    const searchResults = namedIcons
      // .concat(taggedIcons)
      .filter((icon, index, self) => index === self.indexOf(icon));

    return searchResults;
  };

  handleChange = evt => {
    const searchValue = evt.target.value.trim()
    this.setState({
      searchValue,
      iconSearchResults: this.handleSearch(icons, searchValue)
    });
  };

  render() {
    const { currentPage } = this.props;

    const initialIcons = (
      <div style={{ marginTop: '70px' }}>
        <h2>UI icons</h2>
        <div className="icon-container">
          {this.renderIconCards(icons)}
        </div>
      </div>
    );

    const searchResults = (
      <div style={{ marginTop: '70px' }}>
        <h2>Search results</h2>
        <div className="icon-container">
          {this.state.iconSearchResults.length > 0
            ? this.renderIconCards(this.state.iconSearchResults)
            : <IconEmptyState />}
        </div>
      </div>
    );

    return (
      <PageTabs tabs={['library', 'usage', 'contribution']} currentPage={currentPage}>
        <Tab href="/style/iconography/library" label="Library">
          <div className="page iconography">
            <div className="icon-container">
              <Search
                small
                onChange={this.handleChange}
                onKeyUp={this.handleClearInput}
                placeHolderText="Search icon library"
                aria-label="Icon library search"
                value={this.state.searchValue}
                labelText="Icon library search"
              />
            </div>
            {this.state.searchValue.length > 0 ? searchResults : initialIcons}
          </div>
        </Tab>
        <Tab href="/style/iconography/usage" label="Usage">
          <MarkdownPage content={require('../../../content/style/iconography/usage.md')} />
        </Tab>
        <Tab href="/style/iconography/contribution" label="Contribution">
          <MarkdownPage
            content={require('../../../content/style/iconography/contribution.md')}
          />
        </Tab>
      </PageTabs>
    );
  }

  renderIconCards(icons) {
    return icons.map(icon =>
      <IconCard
        key={icon.id}
        name={icon.name}
        viewBox={icon.viewBox}
        width={icon.width.toString()}
        height={icon.height.toString()}
        svgString={toSVG(icon)}
      />);
  }
}
