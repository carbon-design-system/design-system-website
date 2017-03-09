import React, { Component } from 'react';
import Markdown from 'react-remarkable';

class ImageGrid extends Component {
  renderImages = (images) => {
    const newImageArray = [];
    images.forEach(image => {
      const imgLink = require(`../../content/guidelines/bluemix-brand/${image}`);
      const newImage = `<img src=${imgLink} alt="" />`;
      newImageArray.push(newImage);
    });
    console.log(newImageArray);
    return newImageArray;
  }

  render() {
    const images = this.renderImages(this.props.images);
    return (
      <div className="image-grid">
        <Markdown options={{ html: true }}>
          {images}
        </Markdown>
      </div>
    );
  }
}

export default ImageGrid;
