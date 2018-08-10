import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class Accessibility extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }

  render() {
    const tabs = ['overview', 'disabilities', 'designers', 'developers'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/guidelines/accessibility/overview" label="Overview">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/overview.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/disabilities" label="Disabilities">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/disabilities.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/designers" label="Designers">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/designers.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/developers" label="Developers">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/developers.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Accessibility;
