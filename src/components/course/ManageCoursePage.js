import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';
import {saveCourse} from '../../actions/courseActions'

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };

  this.updateCourseState = this.updateCourseState.bind(this)
  this.saveCourse = this.saveCourse.bind(this)
  };

  componentWillReceiveProps(nextProps) {
    if (this,props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  updateCourseState(e) {
    const field = e.target.name;
      let course = this.state.course;
      course[field] = e.target.value;
    return this.setState({course});
  }

  saveCourse(e) {
    e.preventDefault();
    this.props.saveCourse(this.state.course);
    this.props.history.push('/courses')
  }

  render() {
    const { course, errors } = this.state
    const { authors } = this.props
    return (
      <div>
        <CourseForm 
          allAuthors={authors}
          onSave={this.saveCourse}
          onChange={this.updateCourseState}
          course={this.state.course}
          errors={this.state.errors} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  saveCourse: PropTypes.func
};

const getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id == id);
  if (course) return course[0]; 
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  })
  return {
    course,
    authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveCourse
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);