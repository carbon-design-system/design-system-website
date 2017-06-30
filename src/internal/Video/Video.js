import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
  static propTypes = {
    videoLink: PropTypes.string
  }

  render() {
    const video = require(`../../content/style/iconography/images/${this.props.videoLink}`);

    return (
      <div className="video">
        <video controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Video;
