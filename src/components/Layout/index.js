import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './GlobalStyles'
import Header from './header'
import Overlay from './Overlay'
import Wrap from './Wrap'

const Layout = ({children}) => (
  <>
    <Helmet title="romanonthego.rocks">
      <html lang="en" />
    </Helmet>
    <Wrap>
      <Header siteTitle="romanonthego.rocks" />
      {children}
    </Wrap>
    <Overlay />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
