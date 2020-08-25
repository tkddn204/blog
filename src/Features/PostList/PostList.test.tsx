import React from 'react'
import { render } from '@testing-library/react'
import Providers from '../../Application/Providers'
import PostList from './PostList'

test('Should test the Post List Component', () => {
  const { getByText } = render(
    <Providers>
      <PostList />
    </Providers>
  )
  expect(getByText('로딩중')).toBeInTheDocument()
})
