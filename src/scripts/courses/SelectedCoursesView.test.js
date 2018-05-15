import React from 'react'
import { shallow } from 'enzyme'

import SelectedCoursesView from './SelectedCoursesView'
import PlayTile from '../common/PlayTile'


describe('SelectedCoursesView', () => {
  describe('componentDidMount', () => {
    it('executes props.onLoad', () => {
      const props = {
        onLoad: jest.fn(),
      }

      shallow(<SelectedCoursesView {...props} />)

      expect(props.onLoad).toHaveBeenCalled()
    });
  });

  describe('render', () => {
    it('builds a PlayTile for each course that is passed', () => {
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
        ]
      }

      const view = shallow(<SelectedCoursesView {...props} />)

      expect(view.find(PlayTile).length).toBe(props.courses.length)
    });
  });
});
