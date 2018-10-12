import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
      <nav>
        <Link to="/">Home</Link>
        &nbsp;{" | "}
        <Link to="/about">About</Link>
        &nbsp;{" | "}
        <Link to="/courses">Courses</Link>
        <br />
        {loading  &&  <LoadingDots interval={300} dots={5} />}
      </nav>
    )
}
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;