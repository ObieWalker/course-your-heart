import React, { Component } from 'react';
import Proptypes from 'prop-types'
import Header from './common/Header'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.proptypes= {
  children: Proptypes.object.isRequired
}
export default App;