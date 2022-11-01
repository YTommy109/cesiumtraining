import {FC, ReactNode} from 'react'
import styled from 'styled-components'

const Details = styled.details`
  position:           absolute;
  z-index:            10;
  left:               10px;
  top:                120px;
  width:              200px;
  border-radius:      8px;
  background-color: navy;
  padding:            8px;
  opacity:            .7;
  color:             gainsboro;

  summary {
    opacity:          .9;
  }
`

type Props = {
  title:ReactNode
  children:ReactNode
}

export const DataListPalet:FC<Props> = ({title, children}) =>
  <Details open>
    <summary>{title}</summary>
    {children}
  </Details>
