import React, { Component } from 'react';
import Markdown from 'react-remarkable';

class TypographyTable extends Component {

  render() {
    const typographyTable = require('../../content/style/typography/typography-table.md');

    return (
     <div className="typography-table">
        <Markdown options={{ html: true }}>
            {typographyTable}
        </Markdown>
      </div>
    );
  }
}

export default TypographyTable;
