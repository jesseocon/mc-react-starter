import React from 'react'
import { times } from 'lodash'

import LoadingTile from './LoadingTile'


const LoadingGrid = (props) => {
  const {
    aspectRatio,
    tiles,
  } = props

  return (
    <div className="row">
      {times(tiles, (key) => (
        <div className='col-xl-4 col-lg-6 col-md-6' key={key}>
          <LoadingTile aspectRatio={aspectRatio} />
        </div>
      ))}
    </div>
  )
}


export default LoadingGrid
