import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CheckTile from '../common/CheckTile'
import TileCaption from '../common/TileCaption'


export default class CoursesList extends PureComponent {
  static propTypes = {
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        instructorName: PropTypes.string.isRequired,
      })
    ),
    onSelect: PropTypes.func,
  }

  static defaultProps = {
    courses: [],
    onSelect: () => (undefined),
  }

  handleSelect = (course) => {
    const { onSelect } = this.props

    onSelect(course)
  }

  render() {
    const { courses } = this.props

    return (
      <div className='row'>
        {courses.map((course, key) => (
          <div className='col-xl-4 col-lg-6 col-md-6' key={key}>
            <CheckTile
              imageUrl={course.previewImage}
              checked={course.selected}
              onCheck={() => this.handleSelect(course)}
              aspectRatio='1000x609'
              animationStyle='hover-zoom'>
              <TileCaption
                title={course.instructorName}
                subtitle='Teaches Something Interesting'
                position='horizontal-centered'/>
            </CheckTile>
          </div>
        ))}
      </div>
    )
  }
}
