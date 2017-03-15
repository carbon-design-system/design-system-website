import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';

class Typography extends React.Component {

  render() {
    const typography = require('../../content/style/typography/typography.md'); // eslint-disable-line

    return (
      <div className="page">
        <Markdown options={{ html: true }}>
          {typography}
        </Markdown>
      </div>
    );
  }
}

export default Typography;
