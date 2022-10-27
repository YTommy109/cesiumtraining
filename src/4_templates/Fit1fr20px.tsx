import {FC, ComponentProps} from 'react'
import styled from 'styled-components'

const Span = styled.span`
  width:                  100%;
  display:                grid;
  grid-template-columns:  1fr 20px;
  grid-column-gap:        6px;
  align-items:            center;
`

type Props = Omit<ComponentProps<'span'>, 'ref'>

export const Fit1fr20px:FC<Props> = ({children, ...props}) =>
  <Span
    {...props}
    className={'fit1fr60px'}
  >
    {children}
  </Span>
