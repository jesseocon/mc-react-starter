import React from 'react'

import LogoImage from '../../images/logo-name.svg'


export default (props) => (
  <header className='header-nav-minimal'>
    <img
      src={LogoImage}
      className='header-nav-minimal__brand'
      alt="MasterClass Logo Type"
    />
  </header>
)
