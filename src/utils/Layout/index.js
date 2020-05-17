import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../Components/Header'
import Main from './Main'
import GlobalStyle from './Layout.styles'

const Layout = ({ children }) => {
  return (
    <>
      <div data-testid="data-layout">
        <Header />
        <Main>{children}</Main>
      </div>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
