import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-remarkable';

import MotionExample from '../../internal/MotionExample';

class Motion extends React.Component {

  componentDidMount() {
    this.addCustomComponent();
  }

  addCustomComponent = () => {
    const customComponents = {
      MotionExample,
    };

    const insertComponent = [... document.querySelectorAll('[data-insert-component]')];
    insertComponent.forEach(component => {
      const comp = component.dataset.insertComponent;
      const NewComponent = customComponents[comp];
      const props = component.dataset.props.split(',');
      component.classList.add('custom-component-parent');
      ReactDOM.render(
        <NewComponent motionType={props[0]} correctText={props[1]} incorrectText={props[2]} />,
        component
      );
    });
  }

  render() {
    const motion = require('../../content/style/motion/motion.md'); // eslint-disable-line

    return (
      <div className="page">
        <Markdown options={{ html: true }}>
          {motion}
        </Markdown>
      </div>
    );
  }
}

export default Motion;
