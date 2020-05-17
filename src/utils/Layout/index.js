import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Header from '../../Components/Header'
import Main from './Main'
import LoadContext from '../../Shared/Loading/store'
import Loading from '../../Shared/Loading'
import GlobalStyle from './Layout.styles'

const Layout = ({ children }) => {
  const { isLoad } = useContext(LoadContext)
  return (
    <>
      <div data-testid="data-layout">
        <Header />
        <Main>
          {isLoad && <Loading />}
          {children}
        </Main>
      </div>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout
