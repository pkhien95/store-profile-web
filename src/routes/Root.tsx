import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as StoreProfileRoutes from './store-profile'

const Root: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} exact>
        <StoreProfileRoutes.ViewStore />
      </Route>
      <Route path={'/edit'}>
        <StoreProfileRoutes.EditStore />
      </Route>
    </Switch>
  )
}

export default Root
