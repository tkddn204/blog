import React from 'react'
import { render } from '@testing-library/react'
import App from '../../Application'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  expect(getByText('로딩중')).toBeInTheDocument()
})
