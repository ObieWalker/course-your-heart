import React, { Component } from 'react';
import Proptypes from 'prop-types'
import Header from './common/Header'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

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

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 1
  };
}

export default withRouter(connect(mapStateToProps)(App));
