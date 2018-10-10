import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createCourse from '../../actions/courseActions';

class CoursePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: { title: ""}
    }

  this.onTitleChange = this.onTitleChange.bind(this);
  this.onClickSave = this.onClickSave.bind(this);
  };


  onTitleChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({ course: course })
  }

  onClickSave(e) {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title} />

        <input
        type="submit"
        onClick={this.onClickSave}
        value="save" />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createCourse
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);