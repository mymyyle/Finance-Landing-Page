import React from 'react'

import './variables.css'
import './global.css'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    )
  }
}

export default Template
