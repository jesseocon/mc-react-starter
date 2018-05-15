import { connect } from 'react-redux'

import SelectedCoursesView from './SelectedCoursesView'

import { getSelectedCourses } from '../courses/actions'


export default connect(
  (state) => ({
    courses: getSelectedCourses(state),
  }),
  (dispatch) => ({
    onLoad: (props) => {
      const {
        courses,
        history,
      } = props

      if (!courses.length) {
        history.push('/courses')
      }
    }
  }),
)(SelectedCoursesView)
