import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

class AppView extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default withRouter(AppView)
