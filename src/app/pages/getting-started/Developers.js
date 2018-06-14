import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class Developers extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  };

  render() {
    const tabs = ['vanilla', 'react'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/getting-started/developers/vanilla" label="Vanilla">
          <MarkdownPage content={require('../../../content/getting-started/developers/vanilla.md')} />
        </Tab>
        <Tab href="/getting-started/developers/react" label="React">
          <MarkdownPage content={require('../../../content/getting-started/developers/react.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Developers;
