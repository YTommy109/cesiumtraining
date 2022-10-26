import {FC, useId, useState} from 'react'
import {Label} from '1_atoms/Label'
import {PropertyEditor} from '4_templates/PropertyEditor'
import {Fit1fr60px} from '4_templates/Fit1fr60px'

type Props = {
  label:string
  placeholder?:string
  disabled?:boolean
  addLink:(url:string) => void
}
export const LinkImageInput:FC<Props> = ({label, placeholder, disabled, addLink}) => {
  const id = useId()
  const [link, setLink] = useState<string>('')

  return <PropertyEditor>
    <Label htmlFor = {id}>
      {label}
    </Label>
    <Fit1fr60px>
      <input
        id            = {id}
        type          = "url"
        value         = {link}
        onChange      = {(e) => setLink(e.target.value)}
        disabled      = {disabled}
        placeholder   = {placeholder}
      />
      <button
        disabled      = {link.length < 1}
        onClick       = {() => {
          addLink(link)
          setLink('')
        }}
      >Add</button>
    </Fit1fr60px>
  </PropertyEditor>
}
