import { connect } from 'react-redux'

import CoursesView from './CoursesView'

import { getCourses, selectCourse } from './actions'


export default connect(
  ({ courses: { entities, state }}) => ({
    courses: Object.values(entities),
    state,
  }),
  {
    onLoad: getCourses,
    onSelect: selectCourse,
  },
)(CoursesView)
