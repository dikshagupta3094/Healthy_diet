
// import React from 'react'
import Footer from './Footer'
import Header from './Header'


// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Header/>
  <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout
