import {FC, ComponentProps} from 'react'
import styled from 'styled-components'

const Span = styled.span`
  width:                  100%;
  display:                grid;
  grid-template-columns:  1fr 50px 50px;
  grid-column-gap:        6px;
`

type Props = Omit<ComponentProps<'span'>, 'ref'>

export const Fit1fr50px50px:FC<Props> = ({children, ...props}) =>
  <Span
    {...props}
    className={'fit1fr50px50px'}
  >
    {children}
  </Span>
