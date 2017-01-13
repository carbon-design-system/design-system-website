import React from 'react';
import Colors from './Colors';
import Grids from './Grids';
import Iconography from './Iconography';
import Layer from './Layer';
import Motion from './Motion';
import Typography from './Typography';

class Style extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    let page;
    if (paramsName === 'colors') page = <Colors />;
    else if (paramsName === 'grids') page = <Grids />;
    else if (paramsName === 'iconography') page = <Iconography />;
    else if (paramsName === 'layer') page = <Layer />;
    else if (paramsName === 'motion') page = <Motion />;
    else if (paramsName === 'typography') page = <Typography />;
    return page;
  }
}

export default Style;
