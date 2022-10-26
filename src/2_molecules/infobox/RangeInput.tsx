import {FC, useId, ComponentProps, ChangeEventHandler} from 'react'
import {Label} from '1_atoms/Label'
import {PropertyEditor} from '4_templates/PropertyEditor'

type Props = {
  label?:string
  min?:number
  max?:number
  changeValue:(v:number) => void
} & Omit<ComponentProps<'input'>, 'id'|'type'|'onChange'>
export const RangeInput:FC<Props> = ({label, min=0, max=100, changeValue, ...props}) => {
  const id = useId()
  const listId = `list_${id}`

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    changeValue(Number(e.target.value))
  }

  return <PropertyEditor>
    {label != null && <Label htmlFor={id}>
      {label}
    </Label>}
    <input
      {...props}
      id            = {id}
      type          = "range"
      min           = {min}
      max           = {max}
      list          = {listId}
      onChange      = {handleChange}
      disabled      = {props.disabled}
    />
    <datalist id={listId}>
      <option value={min + (max - min) / 4}></option>
      <option value={min + (max - min) / 2}></option>
      <option value={min + (max - min) / 4 * 3}></option>
    </datalist>
  </PropertyEditor>
}
