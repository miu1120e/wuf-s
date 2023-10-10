import React from 'react'
import Footer from './footer/footer'
import Header from './header/Header'

const Layout = (props) => {
  return(
    <div className="wrap">
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout