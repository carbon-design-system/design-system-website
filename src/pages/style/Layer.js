import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';
import Tab from '@console/bluemix-components-react/dist/components/Tab';
import PageTabs from '../../internal/PageTabs';

import LayerTypes from '../../internal/LayerTypes';

class Layer extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  componentDidMount() {
    this.addCustomComponent();
  }

  addCustomComponent = () => {
    const customComponents = {
      LayerTypes,
    };

    const insertComponent = [... document.querySelectorAll('[data-insert-component]')];
    insertComponent.forEach(component => {
      const comp = component.dataset.insertComponent;
      const NewComponent = customComponents[comp];
      component.classList.add('custom-component-parent');
      ReactDOM.render(
        <NewComponent />,
        component
      );
    });
  }

  render() {
    const overview = require('../../content/style/layer/overview.md'); // eslint-disable-line
    const usage = require('../../content/style/layer/usage.md'); // eslint-disable-line
    const tabs = ['overview', 'usage'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/layer/overview" label="Overview">
          <div className="page">
            <Markdown options={{ html: true }}>
              {overview}
            </Markdown>
          </div>
        </Tab>
        <Tab href="/style/layer/usage" label="Usage">
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

export default Layer;
