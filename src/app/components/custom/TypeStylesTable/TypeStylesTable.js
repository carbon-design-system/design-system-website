import React, { Component } from 'react';

class TypeStylesTable extends Component {

  render() {
    const typeStylesTable = require('../../../../content/style/typography/type-styles-table.md');
    return (
     <div className="type-styles-table" dangerouslySetInnerHTML={{ __html: typeStylesTable }} />
    );
  }
}

export default TypeStylesTable;
