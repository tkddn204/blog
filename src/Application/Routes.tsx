import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Post from '../Pages/Post'
import EditPost from '../Pages/EditPost'

export const routes = [
  { path: '/', exact: true, Component: Blog, name: 'Blog' },
  { path: '/post/:postId', Component: Post, name: 'Post' },
  { path: '/about', Component: About },
  { path: '/edit', Component: EditPost },
  // { path: '*', Component: 404}
]

const Routes: FC = () => (
  <Switch>
    {routes.map(({ path, exact, Component }) => (
      <Route key={path} path={path} exact={exact}>
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
