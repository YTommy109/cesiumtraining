import {FC, useId, useState, ChangeEventHandler, KeyboardEventHandler, MouseEventHandler} from 'react'
import {Label} from '1_atoms/Label'
import {PropertyEditor} from '4_templates/PropertyEditor'
import {Fit1fr50px50px} from '4_templates/Fit1fr50px50px'
import {FaPen} from 'react-icons/fa'

const LATLON_REGEXP = /^(?<lat>[0-9\\.]+),\s*(?<lon>[0-9\\.]+)$/

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
    console.log(latlon)
    if (e.key === 'Enter' && LATLON_REGEXP.test(latlon)) {
      setLocation()
      setEditable(false)
    }
    if (e.key === 'Escape') setEditable(false)
  }

  return <>
    {editable &&
      <PropertyEditor>
        <Label htmlFor={id}>{label}</Label>
        <Fit1fr50px50px>
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
          <button
            onClick       = {handleClick}
            disabled      = {disabled || !LATLON_REGEXP.test(latlon)}
          >
            OK
          </button>
          <button
            onClick       = {() => setEditable(false)}>
            Cancel
          </button>
        </Fit1fr50px50px>
      </PropertyEditor>}
    {!editable &&
      <PropertyEditor>
        <span>{label}</span>
        <span
          style           = {{whiteSpace: 'nowrap'}}
          onClick         = {() => setEditable(true)}
        >
          {latlonView}
          &nbsp;
          <FaPen />
        </span>
      </PropertyEditor>}
  </>
}
