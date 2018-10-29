import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
import {loadCourses} from '../../actions/courseActions'

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0
    }

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.loadMoreContent = this.loadMoreContent.bind(this);
    this.getMoreCourses =  this.getMoreCourses.bind(this);
  };

  
  // componentDidMount() {
  //   this.props.loadCourses(0, 2)
  // }

  loadMoreContent() {
    this.setState(
      {
        pageNo: this.state.pageNo + 2
      },
      () => {
        this.getMoreCourses(this.state.pageNo, this.state.pageNo + 2);
      }
    );
  }

  getMoreCourses(first, end) {
    this.props.loadCourses(first, end)
  }

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
        <h1>Courses List</h1>
            <input type="submit"
            value="Add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage} 
            />
            {courses ? (
            <CourseList courses={courses}/>
        ) : (
          <div className="container text-warning text-center">There are currently no courses available.</div>)
        }

        <button
          onClick={this.loadMoreContent}
          className="btn btn-primary active center-block"
          id="loadMore"
          disabled={this.props.totalReached}
          >Load More
        </button>
      </div>
    );
  }
}
CoursePage.propTypes = {
  createCourse: PropTypes.func,
  courses: PropTypes.array
};


const mapStateToProps = state => ({
  courses: state.coursesData.courses,
  totalReached: state.coursesData.totalReached
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCourses
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);