import { combineReducers } from 'redux'
import coursesData from './courseReducer'
import totalNoOfCourses from './totalNoOfCoursesReducer'
import authors from './authorReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  coursesData,
  totalNoOfCourses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;