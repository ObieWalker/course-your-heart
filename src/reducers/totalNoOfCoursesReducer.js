import * as types from '../actions/actionTypes';
import initialState from './initialState'

export default function totalNoOfCourses(state = initialState.totalCourses, action) {
  switch (action.type) {
    case types.NUMBER_OF_COURSES:
      return action.noOfCourses;

    case types.COURSE_ADDED:
    return state + 1;

    default:
      return state;
  }
}