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
    const tabs = ['overview','color', 'keyboard', 'developers'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
      <Tab href="/guidelines/accessibility/overview" label="Overview">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/overview.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/color" label="Color">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/color.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/keyboard" label="Keyboard">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/keyboard.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/developers" label="Developers">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/developers.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Accessibility;
