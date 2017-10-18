import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class Typography extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['overview', 'type-styles'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/style/typography/overview" label="Overview">
          <MarkdownPage content={require('../../../content/style/typography/overview.md')} />
        </Tab>
        <Tab href="/style/typography/type-styles" label="Type styles">
          <MarkdownPage content={require('../../../content/style/typography/type-styles.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Typography;
