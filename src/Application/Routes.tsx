import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'

const Routes: FC = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
)

export default Routes
