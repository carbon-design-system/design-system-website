import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class ServiceProviders extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['general', 'service-icon', 'design-approval'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }
    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/getting-started/service-providers/general" label="General">
          <MarkdownPage content={require('../../../content/getting-started/service-providers/general.md')} />
        </Tab>
        <Tab href="/getting-started/service-providers/service-icon" label="Service Icon">
          <MarkdownPage content={require('../../../content/getting-started/service-providers/service-icon.md')} />
        </Tab>
        <Tab href="/getting-started/service-providers/design-approval" label="Design Approval">
          <MarkdownPage content={require('../../../content/getting-started/service-providers/design-approval.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default ServiceProviders;
