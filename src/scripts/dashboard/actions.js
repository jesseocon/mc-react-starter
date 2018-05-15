import { keyBy } from 'lodash'
import { combineReducers } from 'redux'
import { fetchMyCourses } from './api'
import { createReducers } from '../utils'
import {
  STATE_READY,
  STATE_LOADING,
  STATE_LOADED,
} from '../constants'


// ACTIONS
const USER_COURSES_REQUESTED = 'USER_COURSES_REQUESTED'
const USER_COURSES_RECEIVED = 'USER_COURSES_RECEIVED'


// CREATORS
const userCoursesRequested = () => ({
  type: USER_COURSES_REQUESTED,
})

const userCoursesReceived = (courses) => ({
  type: USER_COURSES_RECEIVED,
  courses: keyBy(courses, 'id'),
})

export const getUserCourses = () => (dispatch) => {
  dispatch(userCoursesRequested())

  return fetchMyCourses()
    .then(({ courses }) => {
      dispatch(userCoursesReceived(courses))
    })
}

// REDUCERS
const state = createReducers(STATE_READY, {
  [USER_COURSES_REQUESTED]: () => STATE_LOADING,
  [USER_COURSES_RECEIVED]: () => STATE_LOADED,
})

const entities = createReducers({}, {
  [USER_COURSES_RECEIVED]: (prevCourses, { courses }) => courses,
})

const courses = combineReducers({
  state: state,
  entities: entities,
})

export default combineReducers({
  courses,
})
