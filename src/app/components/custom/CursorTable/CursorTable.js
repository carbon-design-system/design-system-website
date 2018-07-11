import React, { Component } from 'react';

class CursorTable extends Component {
  render() {
    const defaultSvg = require('../../../../content/utilities/system-defaults/images/Default.svg');
    const disabledSvg = require('../../../../content/utilities/system-defaults/images/Disabled.svg');
    const hoverSvg = require('../../../../content/utilities/system-defaults/images/Hover.svg');
    const textSvg = require('../../../../content/utilities/system-defaults/images/Text.svg');

    return (
      <table className="cursor-table">
        <thead>
          <tr>
            <th>Cursor property</th>
            <th>Example</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>default</code>
            </td>
            <td>
              <img src={defaultSvg} alt="Example of a Default cursor" />
            </td>
            <td>The cursor a system automatically defaults to. Can be white or black depending on the operating system.</td>
          </tr>
          <tr>
            <td>
              <code>not-allowed</code>
            </td>
            <td>
              <img src={disabledSvg} alt="Example of a not-allowed cursor" />
            </td>
            <td>Used to indicate that an item is disabled and no action can be taken on the component.</td>
          </tr>
          <tr>
            <td>
              <code>pointer</code>
            </td>
            <td>
              <img src={hoverSvg} alt="Example of a hover cursor" />
            </td>
            <td>Used to indicate a link or clickable object.</td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>
              <img src={textSvg} alt="Example of a text cursor" />
            </td>
            <td>Used to indicate that a user can type into a designated area, or that the text can be highlighted.</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CursorTable;
