import React, { Component } from 'react';
import SideNav from '../components/SideNav/SideNav';

class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="wrapper">
        <SideNav />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
