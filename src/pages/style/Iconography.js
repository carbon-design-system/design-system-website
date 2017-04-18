import React, { PropTypes } from 'react';
import IconList from 'carbon-icons';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import Search from '@console/bluemix-components-react/dist/components/Search';
import PageTabs from '../../internal/PageTabs';
import IconCard from '../../internal/IconCard';
import MarkdownPage from '../../internal/MarkdownPage';
import Packages from 'carbon-components/package.json';

class Iconography extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string
  };
  state = {
    isSearching: false,
    searchValue: ''
  };

  componentDidMount() {
    document.title = `Carbon Design System | ${this.props.currentPage}`;
  }

  handleSearch = evt => {
    if (evt.target.value) {
      this.setState({
        isSearching: true,
        searchValue: evt.target.value
      });
    } else {
      this.setState({
        isSearching: false,
        searchValue: ''
      });
    }
  };

  tempModifyIconName = name => {
    return name.split('--').filter(string => string !== 'icon').join('--');
  };
  renderIconCards = IconItems =>
    Object.keys(IconItems).map(IconItem => {
      const Icon = IconItems[IconItem];
      const path = require(`../../assets/svg/${this.tempModifyIconName(Icon.name)}.svg`);
      let iconElement;
      if (
        !this.state.isSearching || Icon.name.includes(this.state.searchValue)
      ) {
        iconElement = (
          <IconCard
            key={IconItem}
            name={this.tempModifyIconName(Icon.name)}
            viewBox={Icon.viewBox}
            height={Icon.height}
            width={Icon.width}
            path={path}
          />
        );
      }
      return iconElement;
    });

  render() {
    const tabs = ['library', 'usage', 'contribution'];
    const packageVer = Packages.dependencies['carbon-icons'];
    let currentPage = 'library';
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/iconography/library" label="Library">
          <div className="page iconography">
            <h2>Icon library</h2>
            <em className="version">Version {packageVer}</em>
            <div className="icon-container">
              <Search
                small
                onChange={this.handleSearch}
                placeHolderText="Search the icon library"
                aria-label="Icon library search"
              />
              {this.renderIconCards(IconList)}
            </div>
          </div>
        </Tab>
        <Tab href="/style/iconography/usage" label="Usage">
          <MarkdownPage
            content={require('../../content/style/iconography/usage.md')}
          />
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
