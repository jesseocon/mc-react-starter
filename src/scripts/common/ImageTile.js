import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class ImageTile extends PureComponent {
  static propTypes = {
    animationStyle: PropTypes.string,
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    className: PropTypes.string,
    children: PropTypes.node,
    imageUrl: PropTypes.string.isRequired,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    className: '',
  }

  backgroundStyle(imagePath) {
    const backgroundImageStyle = `
      linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),
      url('${imagePath}')`
    return {
      backgroundImage: backgroundImageStyle,
    }
  }

  animationStyles(style) {
    switch (style) {
      case 'hover-zoom':
        return 'tile--hover-zoom'
      default:
        return 'tile--no-hover'
    }
  }

  render() {
    const {
      animationStyle,
      aspectRatio,
      className,
      children,
      imageUrl,
    } = this.props

    return (
      <div className={`tile tile--${aspectRatio} ${className} ${this.animationStyles(animationStyle)}`}>
        <div className='background' style={this.backgroundStyle(imageUrl)}></div>
        <div className='content'>{children}</div>
      </div>
    )
  }
}
