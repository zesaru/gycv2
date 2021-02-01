import React from "react"
import Header from "../pages/jp/components/header"
import Footer from "../pages/jp/components/footer"

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
