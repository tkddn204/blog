import React from 'react'
import { render } from '@testing-library/react'
import Providers from '../../Application/Providers'
import Index from './index'

test('Should test the Post List Component', () => {
  const { container } = render(
    <Providers>
      <Index />
    </Providers>
  )
  expect(container).pass('temp pass')
})
