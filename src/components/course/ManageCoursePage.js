import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import validator from 'validator';
import { Prompt } from "react-router-dom";
import isEmpty from 'lodash/isEmpty';
import CourseForm from './CourseForm';
import {saveCourse, deleteCourse} from '../../actions/courseActions'
import toastr from 'toastr'

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
      deleting: false,
      incompleteForm: false
    };

  this.updateCourseState = this.updateCourseState.bind(this)
  this.saveCourse = this.saveCourse.bind(this)
  this.deleteCourse = this.deleteCourse.bind(this)
  this.validateFields = this.validateFields.bind(this)
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.course && this.props.course.id != nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  validateFields() {
    const { title, category, length, authorId } = this.state.course;
    const errors = {};
    let formIsValid = true;


      if (title.length < 3) {
        errors.title = 'The course title has to be longer';
        formIsValid = false;
      }
      if (!authorId) {
        errors.authorId = 'Course author cannot be empty';
        formIsValid = false;
      }
      if (!validator.isEmpty(length)) {
        if (length.search(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/) == -1) {
          errors.length = 'The length has to be time format only';
          formIsValid = false;
        }
      } else {
        errors.length = 'Please enter the length of the content';
        formIsValid = false;
      }
      
      if (!validator.isEmpty(category)) {
        if (!validator.isLength(category, { min: 1, max: undefined })) {
          errors.category = 'Please enter a valid category.';
          formIsValid = false;
        }
      } else {
        errors.category = 'Please enter a category';
        formIsValid = false;
      }

    this.setState({errors})
    return formIsValid;
  }

  updateCourseState(e) {
    this.blockExit()
    const field = e.target.name;
      let course = this.state.course;
      course[field] = e.target.value;
    return this.setState({course});
  }

  saveCourse(e) {
    e.preventDefault();
    if (this.validateFields() == true){
      this.setState({ saving: true, incompleteForm: false})
      this.props.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error)
        this.setState({ saving: false })
      })
    }
  }

  deleteCourse(e) {
    e.preventDefault();
    this.setState({ deleting: true })
    this.props.deleteCourse(this.state.course.id)
    .then(() => this.deleteRedirect())
    .catch(error => {
      toastr.error(error)
      this.setState({ deleting: false })
    })
  }

  deleteRedirect() {
    this.setState({ deleting: false })
    toastr.success("Course has been deleted")
    this.props.history.push('/courses')
  }

  redirect() {
    this.setState({ saving: false })
    toastr.success("Course has been saved")
    this.props.history.push('/courses')
  }

  blockExit() {
    this.setState({ incompleteForm: true })
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
          errors={this.state.errors}
          deleting={this.state.deleting}
          onDelete={this.deleteCourse}
          />
          <Prompt
          when={this.state.incompleteForm}
          message={location =>
            `You have unsaved changes. Do you really want to leave?`
          }
        />
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

  if (courseId && state.coursesData.courses.length > 0) {
    course = getCourseById(state.coursesData.courses, courseId);
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
      saveCourse,
      deleteCourse
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);