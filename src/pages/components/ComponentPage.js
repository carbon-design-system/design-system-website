import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import { browserHistory } from 'react-router';
import Tabs from '@console/bluemix-components-react/dist/components/Tabs';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageHeader from '../../internal/PageHeader';
import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';

class ComponentPage extends Component {

  updateTab = (evt) => {
    const tab = evt.currentTarget.querySelector('a').getAttribute('href');
    browserHistory.push(tab);
  }

  render() {
    const currentComponent = this.props.params.name;
    const currentPage = this.props.params.page;
    const componentTitle = currentComponent.replace(/-/g, ' ');
    const usage = require(`../../content/components/${currentComponent}/usage.md`); // eslint-disable-line
    const style = require(`../../content/components/${currentComponent}/style.md`); // eslint-disable-line
    const tabs = ['code', 'usage', 'style'];
    const currentTab = tabs.indexOf(currentPage);

    if (this.props.params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    return (
      <div>
        <PageHeader
          label="component"
          title={componentTitle}
        />
        <Tabs className="bx--global-light-ui page-tabs" selected={currentTab}>
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
      </div>
    );
  }
}

export default ComponentPage;
