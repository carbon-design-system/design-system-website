import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import MarkdownPage from '../../internal/MarkdownPage';
import PageTabs from '../../internal/PageTabs';

class Layer extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['overview', 'usage'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/layer/overview" label="Overview">
          <MarkdownPage content={require('../../content/style/layer/overview.md')} />
        </Tab>
        <Tab href="/style/layer/usage" label="Usage">
          <MarkdownPage content={require('../../content/style/layer/usage.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Layer;
