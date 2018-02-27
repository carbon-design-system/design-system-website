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
    const tabs = ['color', 'keyboard'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/guidelines/accessibility/color" label="Color">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/color.md')} />
        </Tab>
        <Tab href="/guidelines/accessibility/keyboard" label="Keyboard">
          <MarkdownPage content={require('../../../content/guidelines/accessibility/keyboard.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Accessibility;
