import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';
import PageTabs from '../../internal/PageTabs';
import MarkdownPage from '../../internal/MarkdownPage';
import ColorCard from '../../internal/ColorCard';
import { Tabs, Tab } from 'carbon-components-react';
import ReactGA from 'react-ga';
import { browserHistory } from 'react-router';
import ColorList from '../../data/data-vis-colors.json';
import Markdown from 'markdown-it';

class DataVis extends React.Component {
  static propTypes = {
    params: PropTypes.object,
    currentPage: PropTypes.string
  }

  getCurrentTab = () => {
    const tabs = ['code', 'usage', 'style'];
    return tabs.indexOf(this.props.params.page);
  };

  updateTab = evt => {
    ReactGA.event({
      category: 'Tabs',
      action: 'click',
      label: evt.target.innerText,
    });
    const tab = evt.currentTarget.querySelector('a').getAttribute('href');
    browserHistory.push(tab);
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
    const {
      params
    } = this.props;
    const name = params.name;

    const tabs = ['general', 'colors', 'style'];
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1).replace('-', ' ');
    let content;
    let page = 'general';
    if (params.page) {
      page = params.page;
    }
    const md = new Markdown({
      html: true,
    });
    const PrimaryColorCards = this.renderColorCards(ColorList['primary']);
    const SecondaryColorCards = this.renderColorCards(ColorList['secondary']);
    const TertiaryColorCards = this.renderColorCards(ColorList['tertiary']);
    const colors = require('../../content/components/data-vis/overview/colors.md');
    if (name === 'overview') {
      content = (
        <PageTabs tabs={tabs} currentPage={page}>
          <Tab href="/data-vis/overview/general" label="General">
             <MarkdownPage content={require('../../content/components/data-vis/overview/general.md')} />
          </Tab>
          <Tab href="/data-vis/overview/colors" label="Colors">
            <div className="page">
              <div className="page_md">
                <h2>General guidelines</h2>
                <p>There are three theme palettes for data visualizations: primary, secondary, and tertiary. Each palette has been carefully chosen to meet contrast standards for color blindness, with a majority of the colors meeting the Web Content Accessibility Guidelines (WCAG) color contrast requirements of 3.5:1. Data visualizations should always be shown on a white (#fff) background.</p>
                <p><em>Disclaimer: Please note that the first four colors in the palette themes meet the WCAG 2.1 guidelines for accessibility. The last color of each palette does not. This was an intentional decision made in order meet the contrast requirements for color blindness.</em></p>
                <h3 className="page__divider-heading">Primary theme</h3>
                <div className="wrapped-list">
                  {PrimaryColorCards}
                </div>
                <h3 className="page__divider-heading">Secondary theme</h3>
                <div className="wrapped-list">
                  {SecondaryColorCards}
                </div>
                <h3 className="page__divider-heading">Tertiary theme</h3>
                <div className="wrapped-list">
                  {TertiaryColorCards}
                </div>
                <br />
                <br />
                <br />
                <div className="page_md" dangerouslySetInnerHTML={{ __html: md.renderInline(colors) }} />
              </div>
            </div>
          </Tab>
          <Tab href="/data-vis/overview/style" label="Style">
             <MarkdownPage content={require('../../content/components/data-vis/overview/style.md')} />
          </Tab>
        </PageTabs>
      );
    } else {
      const usage = require(`../../content/components/data-vis/${params.name}/usage.md`);
      const style = require(`../../content/components/data-vis/${params.name}/style.md`);
      const code = require(`../../content/components/data-vis/${params.name}/code.md`);
      content = (
        <Tabs
          key={params.name}
          className="bx--global-light-ui page-tabs"
          selected={this.getCurrentTab()}
        >
          <Tab
            href={`/data-vis/${params.name}/code`}
            label="Code"
            onClick={this.updateTab}
          >
            <MarkdownPage content={code} />
          </Tab>
          <Tab
            href={`/data-vis/${params.name}/usage`}
            label="Usage"
            onClick={this.updateTab}
          >
            <MarkdownPage content={usage} />
          </Tab>
          <Tab
            href={`/data-vis/${params.name}/style`}
            label="Style"
            onClick={this.updateTab}
          >
            <MarkdownPage content={style} />
          </Tab>
        </Tabs>
      );
    }
    return (
      <Page label="Data Vis" title={title} content={content} />
    );
  }
}

export default DataVis;
