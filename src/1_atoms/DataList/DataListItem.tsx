import {FC, ReactNode, ChangeEventHandler, useId, useCallback} from 'react'
import styled from 'styled-components'

const Li = styled.li`
  width: 100%;

  input[type=radio] {
    display:                none;
  }
  input[type=radio]:checked + label {
    font-weight:            bold;
    background-color:       lightskyblue;
    color:                  midnightblue;
    border-radius:          0 6px 6px 0;
  }
  input[type=checkbox] {
    display:                none;
  }
  input[type=checkbox]:checked + label {
    font-weight:            bold;
    background-color:       lightskyblue;
    color:                  midnightblue;
    border-radius:          0 6px 6px 0;
  }  label {
    width:                  100%;
    font-size:              small;
    white-space:            nowrap;
  }
  label:hover {
    font-weight:            bold;
  }
`

type Props = {
  name:string
  value:string
  checked:boolean
  pickMode:PickMode
  pickItem:(value:string) => void
  children:ReactNode
}
export const DataListItem:FC<Props> = ({name, value, checked=false, pickMode, pickItem, children}) => {
  const id = useId()

  const handleSelect:ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => pickItem(e.target.value), [pickItem])

  return <Li>
    <input
      type      = {pickMode === 'single' ? 'radio' : 'checkbox'}
      id        = {id}
      name      = {name}
      value     = {value}
      checked   = {checked}
      onChange  = {handleSelect}
    />
    <label htmlFor={id}>
      {children}
    </label>
  </Li>
}
