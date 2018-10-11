import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursePage extends Component {
  constructor(props) {
    super(props);
  };

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    const {courses} = this.props
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  createCourse: PropTypes.func,
  courses: PropTypes.array
};


const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps, null)(CoursePage);