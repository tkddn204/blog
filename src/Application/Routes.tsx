import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Post from '../Pages/Post'
import EditPost from '../Pages/EditPost'
import EditAbout from '../Pages/EditAbout'

export const routes = [
  { path: ['/', '/blog'], exact: true, Component: Blog, name: 'Blog' },
  { path: '/blog/:listPage?', Component: Blog, name: 'Blog' },
  { path: '/post/edit/:postId', Component: EditPost, name: 'EditPost' },
  { path: '/post/:postId', Component: Post, name: 'Post' },
  { path: '/about', exact: true, Component: About, name: 'About' },
  { path: '/about/edit', exact: true, Component: EditAbout, name: 'EditAbout' },
  { path: '*', Component: Blog, name: 'Blog' },
]

const Routes: FC = () => (
  <Switch>
    {routes.map(({ path, exact, Component }) => (
      <Route key={`${path}`} path={path} exact={exact}>
        <Component />
      </Route>
    ))}
  </Switch>
)

export default Routes
