import React from "react"
import Header from "./headerj"
import Footer from "./footerj"

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
