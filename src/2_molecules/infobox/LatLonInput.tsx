import {FC, useId, useState, ChangeEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react'

const STL = {
  SPAN: {
    display:             'grid',
    gridTemplateColumns: '70px 1fr 10px 100px',
    alignItems:          'center'
  },
  LABEL_DISABLE: {
    color: 'gray'
  }
}

const LATLON_REGEXP = /(?<lat>[0-9\\.]+),\s*(?<lon>[0-9\\.]+)/

type Props = {
  label:string
  value:GeoLocation
  disabled?:boolean
  enter:(v:GeoLocation) => void
}
export const LatLonInput:FC<Props> = ({label, value, enter, disabled=false, ...props}) => {
  const id = useId()
  const latlonView:string = `${value.lat}, ${value.lon}`
  const [editable, setEditable] = useState<boolean>(false)
  const [latlon, setLatLon] = useState<string>('')

  const setLocation = ():void => {
    const result = latlon.match(LATLON_REGEXP)
    enter({lon: Number(result?.groups?.lon), lat: Number(result?.groups?.lat)})
  }

  const handleChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    setLatLon(e.target.value)
  }

  const handleClick:MouseEventHandler = () => {
    setLocation()
    setEditable(false)
  }

  const handleKeyDown:KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') setLocation()
    if (['Escape', 'Enter'].includes(e.key)) setEditable(false)
  }

  return <span style={STL.SPAN}>
    {editable && <>
      <label
        style         = {disabled ? STL.LABEL_DISABLE : undefined}
        htmlFor       = {id}
        >
        {label}
      </label>
      <input
        id            = {id}
        type          = "text"
        pattern       = {LATLON_REGEXP.toString()}
        value         = {latlon}
        maxLength     = {50}
        placeholder   = "e.g. 35.6658, 139.6375"
        onChange      = {handleChange}
        onKeyDown     = {handleKeyDown}
        disabled      = {disabled}
        autoFocus     = {true}
      />
      &nbsp;
      <span>
        <button
          onClick       = {handleClick}
          disabled      = {disabled || !LATLON_REGEXP.test(latlon)}
        >
          OK
        </button>
        <button onClick = {() => setEditable(false)}>
          Cancel
        </button>
      </span>
    </>}
    {!editable && <>
      <span>{label}</span>
      <span
        style   = {{whiteSpace: 'nowrap'}}
        onClick = {() => setEditable(true)}
      >
        {latlonView}
      </span>
    </>}
  </span>
}
