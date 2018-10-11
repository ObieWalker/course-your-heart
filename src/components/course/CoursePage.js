import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this)
  };

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  redirectToAddCoursePage() {
    this.props.history.push('/course')
  }

  render() {
    const {courses} = this.props
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage} 
        />
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