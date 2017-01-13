import React from 'react';
import Designers from './Designers';
import Developers from './Developers';

class GettingStarted extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    let page;
    if (paramsName === 'designers') page = <Designers />;
    if (paramsName === 'developers') page = <Developers />;
    return page;
  }
}

export default GettingStarted;
