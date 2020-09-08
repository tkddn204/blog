/** @jsx jsx */
import { FC, HTMLProps } from 'react'
import { css, jsx } from '@emotion/core'
import Button from '../Button'
import useStyle from '../../Hooks/useStyle'
import EditSVG from './EditSVG'

const style = () => css`
  color: black;
  padding: 0.5rem;
  border: none;

  &:hover {
    border: none;
  }
`

const darkStyle = () => css`
  color: white;
`

type Props = HTMLProps<HTMLButtonElement>

const EditButton: FC<Props> = ({ className, onClick }) => {
  return (
    <Button
      css={useStyle(style, darkStyle)}
      onClick={onClick}
      className={className}
    >
      <EditSVG />
    </Button>
  )
}

export default EditButton
