import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import { Tabs, Tab } from 'carbon-components-react';
import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';
import OverviewPage from '../../internal/OverviewPage';

import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';

class ComponentPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  };

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
    const { params } = this.props;

    const currentComponent = params.name;
    if (currentComponent === 'overview') {
      return <OverviewPage />;
    }

    if (params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    const componentTitle =
      currentComponent.replace(/-/g, ' ').charAt(0).toUpperCase() +
      currentComponent.replace(/-/g, ' ').substring(1);
    const usage = require(`../../content/components/${currentComponent}/usage.md`);
    const style = require(`../../content/components/${currentComponent}/style.md`);

    let hasCodePage;
    try {
      const jsFile = require(`../../data/components/${currentComponent}.js`); // eslint-disable-line
      hasCodePage = true;
    } catch (err) {
      hasCodePage = false;
    }
    const codePageContent = hasCodePage
      ? <CodePage component={currentComponent} />
      : '';
    const content = (
      <Tabs
        key={params.name}
        className="bx--global-light-ui page-tabs"
        selected={this.getCurrentTab()}
      >
        <Tab
          href={`/components/${currentComponent}/code`}
          label="Code"
          onClick={this.updateTab}
        >
          {codePageContent}
        </Tab>
        <Tab
          href={`/components/${currentComponent}/usage`}
          label="Usage"
          onClick={this.updateTab}
        >
          <MarkdownPage content={usage} />
        </Tab>
        <Tab
          href={`/components/${currentComponent}/style`}
          label="Style"
          onClick={this.updateTab}
        >
          <MarkdownPage content={style} />
        </Tab>
      </Tabs>
    );
    return <Page label="component" title={componentTitle} content={content} />;
  }
}

export default ComponentPage;
