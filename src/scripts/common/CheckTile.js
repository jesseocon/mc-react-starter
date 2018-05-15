import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import ImageTile from './ImageTile'
import CheckImage from '../../images/circle-check.svg'


class CheckboxOverlay extends PureComponent {
  render() {
    const {
      onCheck,
      children,
    } = this.props

    return (
      <a className="overlay-check__checkbox-tile-overlay" onClick={onCheck}>
        {children}
        <img className='overlay-check__image'src={CheckImage} alt="checkmark" />
      </a>
    )
  }
}

export default class CheckTile extends PureComponent {
  static propTypes = {
    // ChecboxOverlay
    checked: PropTypes.bool,
    onCheck: PropTypes.func,
  }

  render() {
    const {
      checked,
      children,
    } = this.props

    const classNames = [
      'overlay-check',
      checked ? 'overlay-check--checked' : 'overlay-check--unchecked'
    ].join(' ')

    return (
      <ImageTile className={classNames} {...this.props}>
        <CheckboxOverlay {...this.props}>
          {children}
        </CheckboxOverlay>
      </ImageTile>
    )
  }
}
