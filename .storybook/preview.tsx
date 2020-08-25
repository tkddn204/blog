import React from 'react';
import Providers  from '../src/Application/Providers'
import { themes } from '@storybook/theming'

export const decorators = [
  (Story: any) => <Providers><Story/></Providers>
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  theme: themes.normal,
  // controls: { expanded: true },
}