import React from 'react';
import Markdown from 'react-remarkable';
import Colors from './Colors';
import Iconography from './Iconography';
import Layer from './Layer';
import Motion from './Motion';
import Typography from './Typography';
import Page from '../../internal/Page';

class Style extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    const paramsPage = this.props.params.page;
    const title = paramsName.charAt(0).toUpperCase() + paramsName.substring(1);
    let content;
    if (paramsName === 'colors') {
      content = <Colors currentPage={paramsPage} />;
    } else if (paramsName === 'layer') {
      content = <Layer currentPage={paramsPage} />;
    } else if (paramsName === 'iconography') {
      content = <Iconography currentPage={paramsPage} />;
    } else if (paramsName === 'motion') {
      content = <Motion />;
    } else if (paramsName === 'typography') {
      content = <Typography />;
    } else {
      content = (
        <div className="page">
          <Markdown
            options={{ html: true }}
            source={require(`../../content/style/${paramsName}/${paramsName}.md`)} // eslint-disable-line
          />
        </div>
      );
    }

    return <Page label="Style" title={title} content={content} />;
  }
}

export default Style;
