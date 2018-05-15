import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileCaption extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }

  render() {
    const {
      title,
      subtitle,
      position,
    } = this.props

    return (
      <div className={`tile-caption tile-caption--${position}`}>
        <div className='tile-caption__container'>
          <h3 className="tile-caption__title">{title}</h3>
          {subtitle && (
            <h4 className="tile-caption__subtitle">{subtitle}</h4>
          )}
        </div>
      </div>
    )
  }
}
