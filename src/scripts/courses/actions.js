import { keyBy } from 'lodash'
import { combineReducers } from 'redux'
import { fetchCourses, bookmarkCourse } from './api'
import { createReducers } from '../utils'
import {
  STATE_READY,
  STATE_LOADING,
  STATE_LOADED,
} from '../constants'


// ACTIONS
const COURSES_REQUESTED = 'COURSES_REQUESTED'
const COURSES_RECEIVED = 'COURSES_RECEIVED'

const COURSE_SELECTING = 'COURSE_SELECTING'
const COURSE_SELECTED = 'COURSE_SELECTED'


// CREATORS
const coursesRequested = () => ({
  type: COURSES_REQUESTED,
})

const coursesReceived = (courses) => ({
  type: COURSES_RECEIVED,
  courses: keyBy(courses, 'id'),
})

export const getCourses = () => (dispatch) => {
  dispatch(coursesRequested())

  return fetchCourses()
    .then(({ courses }) => {
      dispatch(coursesReceived(courses))
    })
}

const courseSelecting = (course) => ({
  type: COURSE_SELECTING,
  course,
})

const courseSelected = (course) => ({
  type: COURSE_SELECTED,
  course,
})

export const selectCourse = (course) => (dispatch) => {
  dispatch(courseSelecting(course))

  return bookmarkCourse(course)
    .then(() => dispatch(courseSelected(course)))
}

export const navigateToCourse = ({ id: courseId }) => (
  window.location = `/courses/${courseId}`
)

// REDUCERS
const state = createReducers(STATE_READY, {
  [COURSES_REQUESTED]: () => STATE_LOADING,
  [COURSES_RECEIVED]: () => STATE_LOADED,
})

const entities = createReducers({}, {
  [COURSES_RECEIVED]: (prevCourses, { courses }) => courses,
  [COURSE_SELECTED]: (prevCourses, { course }) => ({
    ...prevCourses,
    [course.id]: {
      ...course,
      selected: !course.selected,
    }
  })
})

export default combineReducers({
  state,
  entities,
})

// SELECTORS
export const getSelectedCourses = ({ courses: { entities }}) => (
  Object.values(entities).filter((course) => course.selected)
)
