import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Search } from 'carbon-components-react';
import PageTabs from '../../internal/PageTabs';
import IconCard from '../../internal/IconCard';
import IconEmptyState from '../../internal/IconEmptyState';
import MarkdownPage from '../../internal/MarkdownPage';

class Iconography extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string
  };

  static defaultProps = {
    currentPage: 'library'
  };

  state = {
    icons_all: null,
    icons_glyphs: null,
    icons_ui: null,
    icons_pictograms: null,
    searchValue: '',
    iconSearchResults: []
  };

  componentDidMount() {
    document.title = `Carbon Design System | ${this.props.currentPage}`;
    axios.get('http://carbon-apis.mybluemix.net/icons').then(res =>
      this.setState({
        icons_all: res.data,
        icons_ui: res.data
          .filter(icon => !icon.tags.join('').includes('glyph'))
          .filter(icon => !icon.tags.join('').includes('pictogram')),
        icons_glyphs: this.filterIconsByTag(res.data, 'glyph'),
        icons_pictograms: this.filterIconsByTag(res.data, 'pictogram')
      })
    );
  }

  filterIconsByName = (icons, name) => icons.filter(icon => icon.name.includes(name));

  filterIconsByTag = (icons, tag) =>
    icons.filter(icon => icon.tags.join('').includes(tag));

  handleSearch = (icons, searchValue) => {
    const namedIcons = this.filterIconsByName(icons, searchValue);
    const taggedIcons = this.filterIconsByTag(icons, searchValue);
    const searchResults = namedIcons
      .concat(taggedIcons)
      .filter((icon, index, self) => index === self.indexOf(icon));

    return searchResults;
  };

  handleChange = evt => {
    this.setState({
      searchValue: evt.target.value.trim(),
      iconSearchResults: this.handleSearch(this.state.icons_all, this.state.searchValue)
    });
  };

  renderIconCards = icons =>
    icons.map(icon =>
      <IconCard
        key={icon._id}
        name={icon.name}
        viewBox={icon.viewBox}
        width={icon.width.toString()}
        height={icon.height.toString()}
        downloadUrl={icon.url}
        svgString={icon.svgString}
      />
    );

  renderEmptyIconCards = length => {
    const dummyArray = [];
    for (let i = 0; i < length; i++) {
      dummyArray.push(<IconCard key={i} loading />);
    }
    return dummyArray;
  };

  render() {
    const { currentPage } = this.props;

    const initialIcons = (
      <div style={{ marginTop: '70px' }}>
        <h2>UI icons</h2>
        <div className="icon-container">
          {this.state.icons_ui === null
            ? this.renderEmptyIconCards(62)
            : this.renderIconCards(this.state.icons_ui)}
        </div>
        <h2>UI glyphs</h2>
        <div className="icon-container">
          {this.state.icons_glyphs === null
            ? this.renderEmptyIconCards(19)
            : this.renderIconCards(this.state.icons_glyphs)}
        </div>
        <h2>Pictograms</h2>
        <div className="icon-container">
          {this.state.icons_pictograms === null
            ? this.renderEmptyIconCards(26)
            : this.renderIconCards(this.state.icons_pictograms)}
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
              />
            </div>
            {this.state.searchValue.length > 0 ? searchResults : initialIcons}
          </div>
        </Tab>
        <Tab href="/style/iconography/usage" label="Usage">
          <MarkdownPage content={require('../../content/style/iconography/usage.md')} />
        </Tab>
        <Tab href="/style/iconography/contribution" label="Contribution">
          <MarkdownPage
            content={require('../../content/style/iconography/contribution.md')}
          />
        </Tab>
      </PageTabs>
    );
  }
}

export default Iconography;
