import React from "react"
import Header from "./headerp"
import Footer from "./footerp"

const Layout = props => {

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
