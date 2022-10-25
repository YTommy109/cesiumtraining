import {FC, useId, ChangeEventHandler} from 'react'

const STL = {
  SPAN: {
    width:               '100%',
    display:             'grid',
    gridTemplateColumns: '70px 340px',
    alignItems:          'center'
  },
  LABEL_DISABLE: {
    color: 'gray'
  }
}

type Props = {
  label:string
  value?:number
  min?:number
  max?:number
  step?:number
  disabled?:boolean
  changeValue:(v:number) => void
}
export const RangeInput:FC<Props> = ({label, value, min = 0, max = 100, changeValue, ...props}) => {
  const id = useId()
  const listId = `list_${id}`

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    changeValue(Number(e.target.value))
  }

  return <span style={STL.SPAN}>
    <label
      style         = {props.disabled ? STL.LABEL_DISABLE : undefined}
      htmlFor       = {id}
      >
      {label}
    </label>
    <input
      id            = {id}
      type          = "range"
      min           = {min}
      max           = {max}
      step          = {props.step}
      list          = {listId}
      value         = {value}
      onChange      = {handleChange}
      disabled      = {props.disabled}
    />
    <datalist id={listId}>
      <option value={min + (max - min) / 4}></option>
      <option value={min + (max - min) / 2}></option>
      <option value={min + (max - min) / 4 * 3}></option>
    </datalist>
  </span>
}
