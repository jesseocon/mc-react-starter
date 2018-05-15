import {uniqBy} from 'lodash'


export const createReducers = (initState, handlers) => (
  (state = initState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
)


export const addItemToArray = (newItem, array) => (
  uniqBy(
    [...array, newItem],
    (item) => item.id
  )
)


export const updateItemInArray = (updatedItem, array) => (
  array.map((item) => (
    item.id === updatedItem.id
      ? {...item, ...updatedItem}
      : item
  ))
)


export const removeItemFromArray = (removedItem, array) => (
  array.filter((item) => item.id !== removedItem.id)
)
