import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'carbon-components-react';
import MarkdownPage from '../../internal/MarkdownPage';
import PageTabs from '../../internal/PageTabs';

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
        <Tab href="/style/grid/design" label="Design">
          <MarkdownPage content={require('../../content/style/grid/design.md')} />
        </Tab>
        <Tab href="/style/grid/code" label="Code">
          <MarkdownPage content={require('../../content/style/grid/code.md')} />
        </Tab>
      </PageTabs>
    );
  }
}

export default Grid;
