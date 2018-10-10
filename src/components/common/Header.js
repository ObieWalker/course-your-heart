import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <Link to="/" activeClassName="active">Home</Link>
        &nbsp;{" | "}
        <Link to="/about" activeClassName="active">About</Link>
        &nbsp;{" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
      </nav>
    )
}

export default Header;