import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome Home</h1>
        <p>This is a page you will like.</p>
        <Link to="about" className="btn btn-primary btn-lg">View more</Link>
      </div>
    )
  }
}

export default HomePage;