import React, { useState, useMemo, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './utils/Layout'
import RouteLoader from './utils/RouteLoader'
import LoadContext from './Shared/Loading/store'

const SearchUser = lazy(() => import('./Pages/SearchUser'))
const SearchHistory = lazy(() => import('./Pages/SearchHistory'))
const UserRank = lazy(() => import('./Pages/UserRank'))

const Routes = () => {
  const [isLoad, setIsLoad] = useState(false)
  const provideLoad = useMemo(() => ({ isLoad, setIsLoad }), [isLoad, setIsLoad])

  return (
    <Router>
      <Suspense fallback={<RouteLoader />}>
        <LoadContext.Provider value={provideLoad}>
          <Layout>
            <Switch>
              <Route path="/" exact component={SearchUser} />
              <Route path="/historico-busca" exact component={SearchHistory} />
              <Route path="/rank" exact component={UserRank} />
            </Switch>
          </Layout>
        </LoadContext.Provider>
      </Suspense>
    </Router>
  )
}

export default Routes
