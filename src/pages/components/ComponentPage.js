import React, { Component, PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { browserHistory } from 'react-router';
import Tabs from '@console/bluemix-components-react/dist/components/Tabs';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';
import Page from '../../internal/Page';

class ComponentPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  getCurrentTab = () => {
    const tabs = ['code', 'usage', 'style'];
    return tabs.indexOf(this.props.params.page);
  }

  updateTab = (evt) => {
    const tab = evt.currentTarget.querySelector('a').getAttribute('href');
    browserHistory.push(tab);
  }

  render() {
    const currentComponent = this.props.params.name;
    const componentTitle = currentComponent.replace(/-/g, ' ');
    const usage = require(`../../content/components/${currentComponent}/usage.md`); // eslint-disable-line
    const style = require(`../../content/components/${currentComponent}/style.md`); // eslint-disable-line

    if (this.props.params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    const content = (
      <Tabs className="bx--global-light-ui page-tabs" selected={this.getCurrentTab()}>
        <Tab href={`/components/${currentComponent}/code`} label="Code" onClick={this.updateTab}>
          <CodePage component={currentComponent} />
        </Tab>
        <Tab href={`/components/${currentComponent}/usage`} label="Usage" onClick={this.updateTab}>
          <div className="page">
            <Markdown options={{ html: true }}>
              {usage}
            </Markdown>
          </div>
        </Tab>
        <Tab href={`/components/${currentComponent}/style`} label="Style" onClick={this.updateTab}>
          <div className="page">
            <Markdown options={{ html: true }}>
              {style}
            </Markdown>
          </div>
        </Tab>
      </Tabs>
    );

    return <Page label="component" title={componentTitle} content={content} />;
  }
}

export default ComponentPage;
