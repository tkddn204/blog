/// <reference types="react-scripts" />
import { FC, HTMLProps } from 'react'

declare module 'react' {
  export type FCEP<T = unknown> = FC<HTMLProps<HTMLElement> & T>
}
