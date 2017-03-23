import React, { Component } from 'react';

class TypographyTable extends Component {

  render() {
    const typographyTable = require('../../content/style/typography/typography-table.md');
    return (
     <div className="typography-table" dangerouslySetInnerHTML={{ __html: typographyTable }} />
    );
  }
}

export default TypographyTable;
