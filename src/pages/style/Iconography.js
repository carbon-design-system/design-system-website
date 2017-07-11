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
    searchValue: '',
    isSearching: false,
    icons: null,
    iconSearchResults: []
  };

  componentDidMount() {
    document.title = `Carbon Design System | ${this.props.currentPage}`;
    axios
      .get('http://carbon-apis.mybluemix.net/icons')
      .then(res => this.setState({ icons: res.data }));
  }

  // Return an array of icons filtered by name
  filterIconsByName = (icons, name) => icons.filter(icon => icon.name.includes(name));

  // Return an array of icons filtered by tag
  filterIconsByTag = (icons, tag) =>
    icons.filter(icon => icon.tags.join('').includes(tag));

  handleChange = evt => {
    this.setState({ isSearching: true, searchValue: evt.target.value });

    const namedIcons = this.filterIconsByName(this.state.icons, evt.target.value);
    const taggedIcons = this.filterIconsByTag(this.state.icons, evt.target.value);

    // Return an array of icons filtered by name and tag
    // concat combines the namedIcons and taggedIcons arrays
    // filter again to remove duplicate icons
    const iconSearchResults = namedIcons
      .concat(taggedIcons)
      .filter((icon, index, self) => index === self.indexOf(icon));

    this.setState({ iconSearchResults });
  };

  renderIconCards = icons =>
    icons.map((icon, index) =>
      <IconCard
        key={index}
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

  renderIcons = () => {
    let icons;

    if (!this.state.isSearching) {
      icons =
        this.state.icons === null
          ? this.renderEmptyIconCards(116)
          : this.renderIconCards(this.state.icons);
    } else {
      icons =
        this.state.iconSearchResults.length > 0
          ? this.renderIconCards(this.state.iconSearchResults)
          : <IconEmptyState />;
    }

    return icons;
  };

  render() {
    const { currentPage } = this.props;

    return (
      <PageTabs tabs={['library', 'usage', 'contribution']} currentPage={currentPage}>
        <Tab href="/style/iconography/library" label="Library">
          <div className="page iconography">
            <h2>Icon library</h2>
            <div className="icon-container">
              <Search
                small
                onChange={this.handleChange}
                placeHolderText="Search the icon library"
                aria-label="Icon library search"
                value={this.state.searchValue}
              />
              {this.renderIcons()}
            </div>
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
