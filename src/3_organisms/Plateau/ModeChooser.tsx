import {ChangeEventHandler, FC, useId} from 'react'
import styled from 'styled-components'
import {FaRegBuilding, FaCity} from 'react-icons/fa'

const RadioButtonTray = styled.span`
  display:                grid;
  grid-template-columns:  repeat(2, 18px);
  background-color:      midnightblue;
  color:                 gainsboro;

  input[type=radio]:checked + label {
    font-weight:          bold;
    color:                lightskyblue;
  }
`

const Input = styled.input.attrs({
  type: 'radio',
  name: 'choisemode'
})`
  display: none;
`

type Props = {
  value:ChoiseMode
  changeMode:(v:ChoiseMode) => void
}
export const ModeChooser:FC<Props> = ({value, changeMode}) => {
  const id = useId()

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    changeMode(e.target.value as ChoiseMode)
  }

  return <RadioButtonTray>
    <Input id={`${id}_single`}
      value     = "single"
      checked   = {value==='single'}
      onChange  = {handleChange}
      />
    <label htmlFor={`${id}_single`}><FaRegBuilding /></label>
    <Input id={`${id}_multiple`}
      value     = "multiple"
      checked   = {value==='multiple'}
      onChange  = {handleChange}
      />
    <label htmlFor={`${id}_multiple`}><FaCity /></label>
  </RadioButtonTray>
}
