import React from 'react';
import ColorCard from '../../internal/ColorCard';
import ColorList from '../../data/colors.json';
import PageHeader from '../../internal/PageHeader';

class Colors extends React.Component {
  renderColorCards = ColorItems =>
    Object.keys(ColorItems).map((ColorItem) => {
      const ColorItemObj = ColorItems[ColorItem];
      return (
        <ColorCard
          name={ColorItemObj.name}
          hex={ColorItemObj.hex}
          scss={ColorItemObj.scss}
        />
      );
    });

  render() {
    const ColorCards = this.renderColorCards(ColorList['light-ui-colors']);
    const AccentColorCards = this.renderColorCards(ColorList['light-ui-accent-colors']);

    return (
      <div>
        <PageHeader label="Style" title="Colors" />
        <div>
          <p>Color brings a design to life. Color is versatile;
            it&apos;s used to express emotion and tone, as well as place
            emphasis and create associations. Color should always
            be used in meaningful and intentional ways that create patterns and visual cues.</p>
          <ul className="wrapped-list">
            {ColorCards}
            {AccentColorCards}
          </ul>
        </div>
      </div>
    );
  }
}

export default Colors;
