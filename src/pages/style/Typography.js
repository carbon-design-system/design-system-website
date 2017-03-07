import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';

import TypographyTable from '../../internal/TypographyTable';

class Typography extends React.Component {

  componentDidMount() {
    this.addCustomComponent();
  }

  addCustomComponent = () => {
    const customComponents = {
      TypographyTable,
    };

    const insertComponent = [... document.querySelectorAll('[data-insert-component]')];
    insertComponent.forEach(component => {
      const comp = component.dataset.insertComponent;
      const NewComponent = customComponents[comp];
      component.classList.add('custom-component-parent');
      ReactDOM.render(
        <NewComponent />,
        component
      );
    });
  }

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
