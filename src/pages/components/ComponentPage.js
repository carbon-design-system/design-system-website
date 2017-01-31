import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import Tabs from '@console/bluemix-components-react/dist/components/Tabs';
import Tab from '@console/bluemix-components-react/dist/components/Tab';

import PageHeader from '../../internal/PageHeader';
import CodePage from '../../internal/CodePage';
import LiveComponent from '../../internal/LiveComponent';

class ComponentPage extends Component {

  render() {
    const currentComponent = this.props.params.name;
    const componentTitle = currentComponent.replace(/-/g, ' ');
    const usage = require(`../../content/components/${currentComponent}/usage.md`);
    const style = require(`../../content/components/${currentComponent}/style.md`);

    if (this.props.params.page === 'live') {
      return <LiveComponent component={currentComponent} />;
    }

    return (
      <div>
        <PageHeader
          label="component"
          title={componentTitle}
        />
        <Tabs className="page-tabs">
          <Tab label="Code">
            <CodePage component={currentComponent} />
          </Tab>
          <Tab label="Usage">
            <div className="page">
              <Markdown options={{ html: true }}>
                {usage}
              </Markdown>
            </div>
          </Tab>
          <Tab label="Style">
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
