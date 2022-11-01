import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const OL = styled.ol`
  list-style:             none;
  padding:                0;
  width:                  100%;
  height:                 50vh;
  min-height:             300px;
  overflow-y:             scroll;
`

type Props = {
  children:ReactNode
}
export const ListBox:FC<Props> = ({children}) =>
  <OL>
    {children}
  </OL>
