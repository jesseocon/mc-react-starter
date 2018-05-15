import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import CoursesGrid from './CoursesGrid'
import LoadingGrid from '../common/LoadingGrid'

import {
  STATE_READY,
  STATE_LOADING,
  STATE_LOADED,
  STATE_PROP_TYPE,
} from '../constants'

import FooterImage from '../../images/logo-footer.svg'


export default class CoursesView extends PureComponent {
  static propTypes = {
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        instructorName: PropTypes.string.isRequired,
      })
    ),
    onLoad: PropTypes.func,
    onSelect: PropTypes.func,
    state: STATE_PROP_TYPE,
  }

  static defaultProps = {
    courses: [],
    onLoad: () => (undefined),
    onSelect: () => (undefined),
    state: STATE_READY,
  }

  componentDidMount() {
    const { onLoad, ...otherProps } = this.props

    onLoad(otherProps)
  }

  render() {
    const {
      courses,
      onSelect,
      state,
    } = this.props

    const selectedCourses = courses.filter((course) => course.selected)
    const hasSelectedCourses = !!selectedCourses.length

    return (
      <div className='courses-page'>
        <section className='section-courses-header'>
          <div className='section-courses-header__gradient'></div>
          <div className='container'>
            <h2 className='heading-primary'>Get started with MasterClass</h2>
            <p className='paragraph'>Choose two or more classes to get going</p>
          </div>
        </section>
        <section className='section-courses-grid'>
          <div className='container thirty-gutter-grid'>
            {state === STATE_LOADING && (
              <LoadingGrid tiles={9} />
            )}

            {state === STATE_LOADED && (
              <CoursesGrid
                courses={courses}
                onSelect={onSelect}
              />
            )}
          </div>
        </section>

        {hasSelectedCourses && (
          <section className='section-courses-footer active'>
            <Link to="/courses/selected" className='c-button c-button--wide c-button--primary'>
              Continue
            </Link>
          </section>
        )}

        <footer className='footer-minimal active'>
          <img
            src={FooterImage}
            className='footer-minimal__brand'
            alt='MasterClass Branding'
          />
        </footer>
      </div>
    )
  }
}
