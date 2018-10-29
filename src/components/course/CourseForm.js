import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CourseForm= ({course, allAuthors, onSave, onChange, saving, onDelete, deleting, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
        />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} 
        error={errors.authorId}
        />

        <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category} />

        <TextInput
        name="length"
        label="Length (mins)"
        value={course.length}
        onChange={onChange}
        placeholder="7:66"
        error={errors.length} />

        <span>
          <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />

          &nbsp;&nbsp;&nbsp;
          { course.id &&
                    <input
                    type="submit"
                    disabled={deleting}
                    value={deleting ? 'Deleting...' : 'Delete'}
                    className="btn btn-danger"
                    onClick={onDelete} />
          }
        </span>
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  deleting: PropTypes.bool,
}

export default CourseForm;