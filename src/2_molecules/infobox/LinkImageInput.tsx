import {FC, useId, useState} from 'react'

const STL = {
  SPAN: {
    width:               '100%',
    display:             'grid',
    gridTemplateColumns: '30px 1fr 40px',
    gridColumnGap:       '12px',
    alignItems:          'center'
  },
  LABEL_DISABLE: {
    color: 'gray'
  }
}

type Props = {
  label:string
  placeholder?:string
  disabled?:boolean
  addLink:(url:string) => void
}
export const LinkImageInput:FC<Props> = ({label, placeholder, disabled, addLink}) => {
  const id = useId()
  const [link, setLink] = useState<string>('')

  return <span style={STL.SPAN}>
    <label
      style         = {disabled ? STL.LABEL_DISABLE : undefined}
      htmlFor       = {id}
      >
      {label}
    </label>
    <input
      id            = {id}
      type          = "url"
      defaultValue  = {link}
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
  </span>
}
