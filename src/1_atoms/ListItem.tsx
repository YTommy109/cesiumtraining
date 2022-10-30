import {FC, ReactNode, ChangeEventHandler, useId, useCallback} from 'react'
import styled from 'styled-components'

const Li = styled.li`
  width: 100%;

  input[type=radio] {
    display:                none;
  }
  input[type=radio]:checked + label {
    background-color:       lightskyblue;
    color:                  midnightblue;
    border-radius:          0 6px 6px 0;
  }
  label {
    width:                  100%;

    span {
      overflow:             hidden;
      white-space:          nowrap;
      text-overflow:        ellipsis;
    }
  }
`

type Props = {
  name:string
  value:string
  selectItem:(value:string) => void
  children:ReactNode
}
export const ListItem:FC<Props> = ({name, value, selectItem, children}) => {
  const id = useId()

  const handleSelect:ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => selectItem(e.target.value), [selectItem])

  return <Li>
    <input
      type      = "radio"
      id        = {id}
      name      = {name}
      value     = {value}
      onChange  = {handleSelect}
    />
    <label htmlFor={id}>
      {children}
    </label>
  </Li>
}
