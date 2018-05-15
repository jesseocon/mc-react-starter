import React from 'react'
import { shallow } from 'enzyme'

import CoursesView from './CoursesView'
import CoursesGrid from './CoursesGrid'
import LoadingGrid from '../common/LoadingGrid'

import {
  STATE_LOADING,
  STATE_LOADED,
} from '../constants'


describe('CoursesView', () => {
  describe('componentDidMount', () => {
    it('executes props.onLoad', () => {
      const props = {
        onLoad: jest.fn(),
        testProp: true,
      }

      shallow(<CoursesView {...props} />)

      expect(props.onLoad).toHaveBeenCalled()
    });
  });

  describe('render', () => {
    describe('when props.state is STATE_LOADING', () => {
      it('renders a LoadingGrid', () => {
        const props = {
          state: STATE_LOADING,
        }

        const view = shallow(<CoursesView {...props} />)
        const grid = view.find(LoadingGrid)

        expect(grid.exists()).toBe(true)
        expect(grid.props()).toEqual({ tiles: 9 })
      })
    })

    describe('when props.state is STATE_LOADED', () => {
      it('utilizes CoursesGrid and passes the correct props', () => {
        const props = {
          courses: [
            {
              instructorName: 'Barack Obama',
              previewImage: 'some.jpg',
            },
            {
              instructorName: 'Joe Biden',
              previewImage: 'some.jpg',
            }
          ],
          onSelect: jest.fn(),
          state: STATE_LOADED,
        }

        const view = shallow(<CoursesView {...props} />)
        const grid = view.find(CoursesGrid)

        expect(grid.exists()).toBe(true)
        expect(grid.props()).toEqual({
          courses: props.courses,
          onSelect: props.onSelect,
        })
      })
    })
  })

  describe('when props.courses has selected courses', () => {
    it('renders the CTA', () => {
      const props = {
        courses: [
          { instructorName: 'Bob', selected: true },
          { instructorName: 'Bob', selected: false },
          { instructorName: 'Bob', selected: false },
          { instructorName: 'Bob', selected: true },
        ]
      }

      const view = shallow(<CoursesView {...props} />)
      const cta = view.find('.section-courses-footer .c-button')

      expect(cta.exists()).toBe(true)
    })
  })

  describe('when props.courses has no selected courses', () => {
    it('renders the CTA', () => {
      const props = {
        courses: [
          { instructorName: 'Bob', selected: false },
          { instructorName: 'Bob', selected: false },
        ]
      }

      const view = shallow(<CoursesView {...props} />)
      const cta = view.find('.section-courses-footer .c-button')

      expect(cta.exists()).toBe(false)
    })
  })
})
