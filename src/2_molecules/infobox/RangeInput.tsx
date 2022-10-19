import { FC, useId, ChangeEventHandler } from 'react'

const STL = {
  SPAN: {
    display:              'grid',
    gridTemplateColumns:  '40px 200px 60px',
    alignItems:           'center'
  },
  LABEL_DISABLE: {
    color:                'gray'
  }
}

type Props = {
  label:string
  value?:number
  min?:number
  max?:number
  step?:number
  disabled?:boolean
  changeValue:(v:number)=>void
}
export const RangeInput:FC<Props> = ({label, value, min=0, max=100, changeValue, ...props}) => {
  const id = useId()
  const list_id = `list_${id}`

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
      list          = {list_id}
      defaultValue  = {value}
      onChange      = {handleChange}
      disabled      = {props.disabled}
    />
    <span style={{textAlign: 'right'}}>{value}</span>
    <datalist id={list_id}>
      <option value={min+(max - min)/4}></option>
      <option value={min+(max - min)/2}></option>
      <option value={min+(max - min)/4*3}></option>
    </datalist>
  </span>
}
