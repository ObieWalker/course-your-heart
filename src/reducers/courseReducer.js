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
      return [
        ...state.courses.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ]

    case types.DELETE_COURSES_SUCCESS:
      return [
        ...state.courses.filter(course => course.id !== action.courseId)
      ];

    default:
      return state;
  }
}
