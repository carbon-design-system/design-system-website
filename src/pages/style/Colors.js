import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageTabs from '../../internal/PageTabs';
import ColorCard from '../../internal/ColorCard';
import ColorList from '../../data/colors.json';

class Colors extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  renderColorCards = ColorItems =>
    Object.keys(ColorItems).map((ColorItem) => {
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
    const SupportColorCards = this.renderColorCards(ColorList['support-colors']);
    const usage = require('../../content/style/color/usage.md'); // eslint-disable-line
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
          <div className="page">
            <Markdown options={{ html: true }}>
              {usage}
            </Markdown>
          </div>
        </Tab>
      </PageTabs>
    );
  }
}

export default Colors;
