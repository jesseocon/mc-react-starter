import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class LoadingTile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    className: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    className: '',
  }

  render() {
    const {
      aspectRatio,
      className,
      children,
    } = this.props

    return (
      <div className={`tile tile--loading tile--${aspectRatio} ${className}`}>
        <div className='content'>{children}</div>
      </div>
    )
  }
}
