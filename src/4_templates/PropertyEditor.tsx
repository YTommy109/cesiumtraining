import {FC, ComponentProps} from 'react'
import styled from 'styled-components'

const Span = styled.span`
  width:                    100%;
  display:                  grid;
  grid-template-columns:    70px 340px;
  align-items:              center;
`

type Props = Omit<ComponentProps<'span'>, 'ref'>

export const PropertyEditor:FC<Props> = ({className, children, ...props}) =>
  <Span
    {...props}
    className={'prop_editor'}
  >
    {children}
  </Span>
