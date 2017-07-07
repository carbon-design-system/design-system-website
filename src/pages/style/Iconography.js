import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Search, Loading } from 'carbon-components-react';
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

  handleChange = evt => {
    if (evt.target.value !== '') {
      this.setState({ isSearching: true });

      // Return an array of icons filtered by name
      const namedIcons = this.state.icons.filter(icon =>
        icon.name.includes(evt.target.value)
      );

      // Return an array of icons filtered by tag
      const taggedIcons = this.state.icons.filter(icon =>
        icon.tags.join('').includes(evt.target.value)
      );

      // Return an array of icons filtered by name and tag
      // concat combines the namedIcons and taggedIcons arrays
      // filter again to remove duplicate icons
      const iconSearchResults = namedIcons
        .concat(taggedIcons)
        .filter((icon, index, self) => index === self.indexOf(icon));

      this.setState({ iconSearchResults });
    } else {
      this.setState({
        isSearching: false,
        iconSearchResults: []
      });
    }
  };

  renderIconCards = icons => {
    return icons.map((icon, index) =>
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
  };

  renderIcons = () => {
    let icons;

    if (!this.state.isSearching) {
      icons =
        this.state.icons === null
          ? <Loading withOverlay={false} />
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
                id="iconography-search"
                onChange={this.handleChange}
                placeHolderText="Search the icon library"
                aria-label="Icon library search"
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
