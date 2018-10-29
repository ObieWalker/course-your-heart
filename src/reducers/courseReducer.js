import * as types from '../actions/actionTypes';
// import initialState from './initialState'
import _ from 'lodash'

const initialState = {
    courses: [],
    totalReached: false
};
let newState;

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      newState = Object.assign({}, state);
      newState.courses = newState.courses.concat(action.courses);
      newState.totalReached = action.totalReached
      return newState;


    case types.CREATE_COURSES_SUCCESS:
      return state;

    case types.UPDATE_COURSES_SUCCESS:
      const afterUpdateState = Object.assign({}, state);
      const indexOfCourseToUpdate = state.courses.findIndex(course => {
        return course.id == action.course.id
      })
      afterUpdateState.courses.splice(indexOfCourseToUpdate, 1);
      afterUpdateState.courses.push(action.course)
      afterUpdateState.courses = _.orderBy(afterUpdateState.courses, ['title'], ['asc']);
      return afterUpdateState

    case types.DELETE_COURSES_SUCCESS:
      {
        const afterDelState = Object.assign({}, state);
        const indexOfCourseToDelete = state.courses.findIndex(course => {
          return course.id == action.courseId
        })
        afterDelState.courses.splice(indexOfCourseToDelete, 1);
        return afterDelState;
      }
      
    default:
      return state;
  }
}
