import { map } from 'lodash'
import  { getSelectedCourses } from './actions'


describe('SELECTORS', () => {
  describe('getSelectedCourses', () => {
    test('get selected courses to return only selected courses', () => {
      const state = {
        courses: {
          entities: {
            1: { id: 1, selected: false },
            2: { id: 2, selected: true },
            3: { id: 3, selected: true },
            4: { id: 4, selected: false },
          },
        },
      }

      expect(getSelectedCourses(state)).toEqual([
        { id: 2, selected: true },
        { id: 3, selected: true },
      ])
    })
  })
})
