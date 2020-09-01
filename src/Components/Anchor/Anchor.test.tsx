import React from 'react'
import { render } from '@testing-library/react'

import Anchor from '.'
import Providers from '../../Application/Providers'

test('renders correctly when there are some texts', () => {
  const someText = '텍스트'
  const { getByText, container } = render(
    <Providers>
      <Anchor>{someText}</Anchor>
    </Providers>
  )

  expect(getByText(someText).textContent).toEqual(someText)
  expect(container).toMatchSnapshot()
})
