import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class Grid extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['design', 'code'];
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
          <MarkdownPage content={require('../../../content/getting-started/service-providers/serivce-icon.md')} />
        </Tab>
        <Tab href="/getting-started/service-providers/design-approval" label="Design Approval">
          <MarkdownPage content={require('../../../content/getting-started/service-providers/design-approval.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Grid;
