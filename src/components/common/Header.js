import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import LoadingDots from './LoadingDots';

const Header = ({loading, courses, totalNoOfCourses}) => {
    return (
      <nav>
        <Link to="/">Home</Link>
        &nbsp;{" | "}
        <Link to="/about">About</Link>
        &nbsp;{" | "}
        <Link to="/courses">Courses{totalNoOfCourses ? `(${totalNoOfCourses})` : <LoadingDots interval={300} dots={5} />} </Link>
        &nbsp;{" | "}
        <Link to="/authors">Authors</Link>
        <br />
        {loading  &&  <LoadingDots interval={300} dots={5} />}
      </nav>
    )
}
Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses,
  totalNoOfCourses: state.totalNoOfCourses
});

export default connect(mapStateToProps)(Header);