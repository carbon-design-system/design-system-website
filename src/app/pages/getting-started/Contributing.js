import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';

import MarkdownPage from '../../components/internal/MarkdownPage';
import PageTabs from '../../components/internal/PageTabs';

class Contributing extends React.Component {
  static propTypes = {
    currentPage: PropTypes.string,
  }; 

  render() {
    const tabs = ['designers', 'developers'];
    let currentPage = tabs[0];
    if (this.props.currentPage) {
      currentPage = this.props.currentPage;
    }

    return (
      <PageTabs tabs={tabs} currentPage={currentPage}>
        <Tab href="/getting-started/contributing/designers" label="Designers">
          <MarkdownPage content={require('../../../content/getting-started/contributing/designers.md')} />
        </Tab>
        <Tab href="/getting-started/contributing/developers" label="Developers">
          <MarkdownPage content={require('../../../content/getting-started/contributing/developers.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Contributing;
