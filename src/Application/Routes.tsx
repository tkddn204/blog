import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Post from '../Pages/Post'
import EditPost from '../Pages/EditPost'

export const routes = [
  { path: '/', exact: true, Component: Blog, name: 'Blog' },
  { path: '/post/:postId', Component: Post, name: 'Post' },
  { path: '/about', exact: true, Component: About, name: 'About' },
  { path: '/edit', exact: true, Component: EditPost, name: 'Edit' },
  { path: '*', Component: Blog, name: 'Blog' },
]

const Routes: FC = () => (
  <Switch>
    {routes.map(({ path, exact, Component }) => (
      <Route key={path} path={path} exact={exact}>
        <Component />
      </Route>
    ))}
  </Switch>
)

export default Routes
