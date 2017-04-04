import React, { PropTypes } from 'react';
import Colors from './Colors';
import Iconography from './Iconography';
import Layer from './Layer';
import Page from '../../internal/Page';
import MarkdownPage from '../../internal/MarkdownPage';

class Style extends React.Component {
  static propTypes = {
    params: PropTypes.object
  }

  render() {
    const {
      params
    } = this.props;
    const paramsName = params.name;
    const paramsPage = params.page;
    const title = paramsName.charAt(0).toUpperCase() + paramsName.substring(1);
    let content;
    if (paramsName === 'colors') {
      content = <Colors currentPage={paramsPage} />;
    } else if (paramsName === 'layer') {
      content = <Layer currentPage={paramsPage} />;
    } else if (paramsName === 'iconography') {
      content = <Iconography currentPage={paramsPage} />;
    } else {
      content = (
        <MarkdownPage content={require(`../../content/style/${paramsName}/${paramsName}.md`)} />
      );
    }
    return <Page label="Style" title={title} content={content} />;
  }
}

export default Style;
