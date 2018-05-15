import PropTypes from 'prop-types'


export const STATE_READY = 'STATE_READY'
export const STATE_LOADING = 'STATE_LOADING'
export const STATE_LOADED = 'STATE_LOADED'

export const STATE_PROP_TYPE = PropTypes.oneOf([
  STATE_READY,
  STATE_LOADING,
  STATE_LOADED,
])
