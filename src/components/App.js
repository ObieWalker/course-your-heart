import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './common/Header'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
         loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.proptypes= {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 1
  };
}

export default withRouter(connect(mapStateToProps)(App));