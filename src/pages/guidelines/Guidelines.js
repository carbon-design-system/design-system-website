import React from 'react';
import Accessibility from './Accessibility';
import BluemixBrand from './BluemixBrand';
import Content from './Content';
import Principles from './Principles';
import WatsonBrand from './WatsonBrand';

class Guidelines extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    let page;
    if (paramsName === 'accessibility') page = <Accessibility />;
    else if (paramsName === 'bluemix-brand') page = <BluemixBrand />;
    else if (paramsName === 'content') page = <Content />;
    else if (paramsName === 'principles') page = <Principles />;
    else if (paramsName === 'watson-brand') page = <WatsonBrand />;
    return page;
  }
}

export default Guidelines;
