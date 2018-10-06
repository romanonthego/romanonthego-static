import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './header'
import './global'

const dotColor = 'rgba(0, 0, 0, 0.05)'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: linear-gradient(45deg, ${dotColor} 25%, transparent 25%),
    linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, ${dotColor} 75%),
    linear-gradient(-45deg, transparent 75%, ${dotColor} 75%);
  background-size: 2px 2px;
  background-position: 0 0, 1px 0, 1px -1px, 0px 1px;
  background-blend-mode: multiply;
  z-index: 9999;
`

const Layout = ({children}) => (
  <>
    <Helmet
      title="romanonthego.rocks"
      meta={[
        {name: 'description', content: 'romanonthegos person website'},
        {name: 'keywords', content: 'pesonal'},
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle="romanonthego.rocks" />
    <Overlay />
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
