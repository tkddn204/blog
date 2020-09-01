import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Home from '../Pages/Home'

export const routes = [
  { path: '/', Component: Home, name: 'Home' },
  // { path: '/about', Component: About },
]

const Routes: FC = () => (
  <Switch>
    {routes.map(({ path, Component }) => (
      <Route key={path} path={path}>
        {({ match }) => (
          <CSSTransition in={match != null} timeout={300} unmountOnExit>
            <Component />
          </CSSTransition>
        )}
      </Route>
    ))}
  </Switch>
)

export default Routes
