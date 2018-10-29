import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions'

export const loadCoursesSuccess = (courses, totalReached) => {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses,
    totalReached
  }
}

export const createCourseSuccess = (course) => {
  return {
    type: types.CREATE_COURSES_SUCCESS,
    course
  }
}

export const updateCourseSuccess = (course) => {
  return {
    type: types.UPDATE_COURSES_SUCCESS,
    course
  }
}

export const deleteCourseSuccess = (courseId) => {
  return {
    type: types.DELETE_COURSES_SUCCESS,
    courseId
  }
}

export const noOfCourses = (noOfCourses) => {
  return {
    type: types.NUMBER_OF_COURSES,
    noOfCourses
  }
}

export const courseAdded = () => {
  return {
    type: types.COURSE_ADDED,
    noOfCourses
  }
}

export const loadCourses = (from = 0, to = 2) =>  {
  return dispatch => {
    dispatch(beginAjaxCall())
    courseApi.getAllCourses(from, to)
    .then(coursesData =>
      dispatch(loadCoursesSuccess(coursesData.sortedCourses, coursesData.totalReached)))
    .catch((error) => { throw error; });
  }
}

export const saveCourse = (course) => {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall()) 
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      // dispatch(createCourseSuccess(savedCourse))
      dispatch(courseAdded())
    }).catch((error) => {
      dispatch(ajaxCallError(error))
      throw (error);
    })
  }
}

export const deleteCourse = (course) => {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall()) 
    return courseApi.deleteCourse(course.id)
    .then(deletedCourse => {
      dispatch(deleteCourseSuccess(course.id))
    }).catch((error) => {
      dispatch(ajaxCallError(error))
      throw (error);
    })
  }
}

export const totalCourses = () => {
  return dispatch => {
    return courseApi.totalCourses()
    .then(total => {
      dispatch(noOfCourses(total))
    }).catch((error) => {
      throw (error);
    })
  }
}