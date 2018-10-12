import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <Link to="/">Home</Link>
        &nbsp;{" | "}
        <Link to="/about">About</Link>
        &nbsp;{" | "}
        <Link to="/courses">Courses</Link>
      </nav>
    )
}

export default Header;