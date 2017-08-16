import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../internal/Page';
import PageTabs from '../../internal/PageTabs';
import MarkdownPage from '../../internal/MarkdownPage';
import CodePage from '../../internal/CodePage';
import { Tabs, Tab } from 'carbon-components-react';
import ReactGA from 'react-ga';
import { browserHistory } from 'react-router';

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

  render() {
    const {
      params
    } = this.props;
    const name = params.name;

    const tabs = ['usage', 'colors', 'style'];
    const title = params.name.charAt(0).toUpperCase() + params.name.substring(1).replace('-', ' ');
    let content;
    let page = 'usage';
    if (params.page) {
      page = params.page;
    }
    if (name === 'overview') {
      content = (
        <PageTabs tabs={tabs} currentPage={page}>
          <Tab href="/data-vis/overview/usage" label="Usage">
             <MarkdownPage content={require('../../content/components/data-vis/overview/usage.md')} />
          </Tab>
          <Tab href="/data-vis/overview/colors" label="Colors">
             <MarkdownPage content={require('../../content/components/data-vis/overview/colors.md')} />
          </Tab>
          <Tab href="/data-vis/overview/style" label="Style">
             <MarkdownPage content={require('../../content/components/data-vis/overview/style.md')} />
          </Tab>
        </PageTabs>
      );
    } else {
      let hasCodePage;
      try {
        const jsFile = require(`../../data/components/${currentComponent}.js`); // eslint-disable-line
        hasCodePage = true;
      } catch (err) {
        hasCodePage = false;
      }
      const codePageContent = hasCodePage
        ? <CodePage component={params.name} />
        : '';
      const usage = require(`../../content/components/data-vis/${params.name}/usage.md`);
      const style = require(`../../content/components/data-vis/${params.name}/style.md`);
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
            {codePageContent}
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
