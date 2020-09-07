/** @jsx jsx */
import { FC, HTMLProps } from 'react'
import { css, jsx } from '@emotion/core'
import useStyle, { ThemedStyles } from '../../Hooks/useStyle'
import { ThemeType } from '../../Types/theme'

const style = (theme: ThemeType) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background: white;
  color: black;
  font-size: medium;
  padding: 0.25rem 1rem 0.25rem 1rem;
  border: solid 0.1rem ${theme.color.gray['3']};
  border-radius: 0.25rem;
  cursor: pointer;
  transition-property: all;
  transition-duration: 150ms;

  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: ${theme.color.blue['2']};
  }
`

const darkStyle = (theme: ThemeType) => css`
  background: black;
  color: white;

  &:active {
    background: ${theme.color.pink['6']};
  }
`

const customStyle: Record<string, ThemedStyles> = {
  circle: () => css`
    border-radius: 9999px;
  `,
}

interface Props extends HTMLProps<HTMLButtonElement> {
  submit?: boolean
  custom?: string[]
}

const Button: FC<Props> = ({
  submit = false,
  custom = [],
  children,
  className,
  onClick,
}) => {
  const customStyles = custom.map((cus) => customStyle[cus])
  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={submit ? 'submit' : 'button'}
      css={useStyle(style, darkStyle, customStyles)}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}

export default Button
