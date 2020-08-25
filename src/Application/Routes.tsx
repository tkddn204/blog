import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
