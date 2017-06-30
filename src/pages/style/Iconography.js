import React from 'react';
import PropTypes from 'prop-types';
import IconList from 'carbon-icons';
import { Tab, Search } from 'carbon-components-react';
import PageTabs from '../../internal/PageTabs';
import IconCard from '../../internal/IconCard';
import IconEmptyState from '../../internal/IconEmptyState';
import MarkdownPage from '../../internal/MarkdownPage';
import Packages from 'carbon-components/package.json';

class Iconography extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };
  state = {
    isSearching: false,
    searchValue: '',
    icons: '',
    newIcons: '',
  };

  componentDidMount() {
    document.title = `Carbon Design System | ${this.props.currentPage}`;
    this.renderIcons(IconList);
  }

  handleSearch = evt => {
    if (evt.target.value) {
      const newIcons = [];
      this.state.icons.forEach(icon => {
        if (icon.props.name.includes(evt.target.value)) {
          newIcons.push(icon);
          this.setState({
            newIcons,
          });
        } else {
          const index = newIcons.indexOf(icon);
          if (index !== -1) {
            newIcons.splice(index, 1);
          }
          this.setState({
            newIcons,
          });
        }
      });
    } else {
      this.setState({
        newIcons: this.state.icons,
      });
    }
  };

  tempModifyIconName = name => {
    return name.split('--').filter(string => string !== 'icon').join('--');
  };

  renderIcons = IconItems => {
    const allIcons = [];
    Object.keys(IconItems).map(IconItem => {
      const Icon = IconItems[IconItem];
      const path = require(`../../assets/svg/${this.tempModifyIconName(
        Icon.name
      )}.svg`);
      if (
        !this.state.isSearching ||
        Icon.name.includes(this.state.searchValue)
      ) {
        allIcons.push(
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
    });
    this.setState({
      icons: allIcons,
      newIcons: allIcons,
    });
  };

  render() {
    const tabs = ['library', 'usage', 'contribution'];
    let packageVer = Packages.dependencies['carbon-icons'];
    if (packageVer.slice(0, 1) === '^') {
      packageVer = packageVer.slice(1);
    }
    let currentPage = 'library';
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }
    const iconList = this.state.newIcons;

    const iconContent = iconList.length > 0
      ? this.state.newIcons
      : <IconEmptyState />;

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
              {iconContent}
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
