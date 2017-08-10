import React from 'react';
import PropTypes from 'prop-types';
import Page from '../internal/Page';

class Themes extends React.Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const {
      params,
    } = this.props;
    const contentFile = require(`../content/themes/themes.md`);
    return (
      <Page label='' title='Themes' content={contentFile} />
    );
  }
}

export default Themes;
