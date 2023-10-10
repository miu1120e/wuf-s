import React from 'react'
import Footer from './footer/footer'
import Header from './header/Header'

const Layout = (props) => {
  return(
    <>
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout