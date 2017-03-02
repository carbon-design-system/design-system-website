import React from 'react';
import Colors from './Colors';
import Iconography from './Iconography';
import Page from '../../internal/Page';

class Style extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    const title = paramsName.charAt(0).toUpperCase() + paramsName.substring(1);
    let content;
    if (paramsName === 'colors') {
      content = <Colors currentPage={this.props.params.page} />;
    }
    if (paramsName === 'iconography') {
      content = <Iconography currentPage={this.props.params.page} />;
    }
    return <Page label="Style" title={title} content={content} />;
  }
}

export default Style;
