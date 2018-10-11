import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
  };

  render() {
    return (
      <div>
        <CourseForm 
          allAuthors={[]}
          course={this.state.course}
          errors={this.state.errors} />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};


const mapStateToProps = (state, ownProps) => {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  return {
    course
  };
};

export default connect(mapStateToProps, null)(ManageCoursePage);