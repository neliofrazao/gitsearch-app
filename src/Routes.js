import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RouteLoader from './utils/RouteLoader'

const SearchUser = lazy(() => import('./Pages/SearchUser'))
const SearchHistory = lazy(() => import('./Pages/SearchHistory'))
const UserRank = lazy(() => import('./Pages/UserRank'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<RouteLoader />}>
        <Switch>
          <Route path="/" exact component={SearchUser} />
          <Route path="/historico-busca" exact component={SearchHistory} />
          <Route path="/rank" exact component={UserRank} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
