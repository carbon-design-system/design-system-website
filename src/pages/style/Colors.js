import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import PageTabs from '../../internal/PageTabs';
import MarkdownPage from '../../internal/MarkdownPage';
import ColorCard from '../../internal/ColorCard';
import ColorList from '../../data/colors.json';

class Colors extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  renderColorCards = ColorItems =>
    Object.keys(ColorItems).map(ColorItem => {
      const ColorItemObj = ColorItems[ColorItem];
      return (
        <ColorCard
          key={ColorItem}
          name={ColorItemObj.name}
          hex={ColorItemObj.hex}
          white={ColorItemObj.white}
        />
      );
    });

  render() {
    const ColorCards = this.renderColorCards(ColorList['ui-colors']);
    const SupportColorCards = this.renderColorCards(
      ColorList['support-colors'],
    );
    const tabs = ['swatches', 'usage'];
    let currentPage = 'swatches';
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/colors/swatches" label="Swatches">
          <div className="page">
            <h2>Carbon default theme</h2>
            <div className="wrapped-list">
              {ColorCards}
            </div>
            <h3 className="page__divider-heading">Supporting Colors</h3>
            <div className="wrapped-list">
              {SupportColorCards}
            </div>
          </div>
        </Tab>
        <Tab href="/style/colors/usage" label="Usage">
          <MarkdownPage
            content={require('../../content/style/colors/usage.md')}
          />
        </Tab>
      </PageTabs>
    );
  }
}

export default Colors;
