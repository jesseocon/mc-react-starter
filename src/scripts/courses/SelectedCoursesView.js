import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import PlayTile from '../common/PlayTile'
import TileCaption from '../common/TileCaption'


export default class SelectedCoursesView extends PureComponent {
  static propTypes = {
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        previewImage: PropTypes.string.isRequired,
        instructorName: PropTypes.string.isRequired,
      })
    ).isRequired,
    onLoad: PropTypes.func,
  }

  static defaultProps = {
    courses: [],
    onLoad: () => (undefined),
  }

  componentDidMount() {
    const {
      onLoad,
      ...otherProps,
    } = this.props

    onLoad(otherProps)
  }

  render() {
    const {
      courses,
    } = this.props;

    return (
      <div className='courses-page'>
        <section className='section-courses-header'>
          <div className='section-courses-header__gradient'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3'>
                <h2 className='heading-primary'>You're enrolled</h2>
                <p className='paragraph'>Select the class you would like to start</p>
              </div>
            </div>
          </div>
        </section>
        <section className='section-courses-grid'>
          <div className='container thirty-gutter-grid'>
            <div>
              <div className='row'>
                {courses.map((course, key) => (
                  <div className='col-xl-4 col-lg-6 col-md-6' key={key}>
                    <PlayTile
                      imageUrl={course.previewImage}
                      aspectRatio='1000x609'
                      animationStyle='hover-zoom'>
                      <TileCaption
                        title={course.instructorName}
                        subtitle='Teaches Something Interesting'
                        position='horizontal-centered'/>
                    </PlayTile>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
