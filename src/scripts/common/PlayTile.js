import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ImageTile from './ImageTile'

import PlayImage from '../../images/play-with-circle.svg'


class PlayOverlay extends PureComponent {
    static propTypes = {
      children: PropTypes.node,
      onClick: PropTypes.func,
    }

    static defaultProps = {
      onClick: () => (undefined)
    }

  render() {
    const {
      children,
      onClick,
    } = this.props

    return (
      <a
        className="overlay-play"
        onClick={onClick}
      >
        {children}
        <img src={PlayImage} className='overlay-play__image' alt='Play' />
      </a>
    )
  }
}


export default class PlayTile extends PureComponent {
  render() {
    const {
      aspectRatio,
      imageUrl,
      videoId,
      children,
      animationStyle,
    } = this.props

    return (
      <ImageTile
        aspectRatio={aspectRatio}
        imageUrl={imageUrl}
        animationStyle={animationStyle}
      >
        <PlayOverlay videoId={videoId}>
          {children}
        </PlayOverlay>
      </ImageTile>
    )
  }
}
