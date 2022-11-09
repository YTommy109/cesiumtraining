import {FC} from 'react'
import styled from 'styled-components'
import {RangeInput} from '2_molecules/infobox/RangeInput'
import {LatLonInput} from '2_molecules/infobox/LatLonInput'

const UlVertical = styled.ul`
  listStyle:  none;
  padding:    0;
`

type Props = {
  location:GeoLocation
  area:AreaBox
  changeLocation:(location:GeoLocation) => void
}
export const LocationEntry:FC<Props> = ({location, area, changeLocation}) => {
  const setLon    = (val:number):void => changeLocation({...location, lon: val})
  const setLat    = (val:number):void => changeLocation({...location, lat: val})
  const setHeight = (val:number):void => changeLocation({...location, height: val})
  const setLatLon = (val:GeoLocation):void => changeLocation({...location, lon: val.lon, lat: val.lat})

  return <fieldset>
    <legend>位置</legend>
    <UlVertical className="vertical">
      <li>
        <RangeInput
          label         = "経度:"
          value         = {location.lon}
          changeValue   = {setLon}
          min           = {area.west}
          max           = {area.east}
          step          = {0.0001}
        />
      </li>
      <li>
        <RangeInput
          label         = "緯度:"
          value         = {location.lat}
          changeValue   = {setLat}
          min           = {area.south}
          max           = {area.north}
          step          = {0.0001}
        />
      </li>
      <li>
        {location.height != null && <RangeInput
          label         = "標高:"
          changeValue   = {setHeight}
          value         = {location.height}
          min           = {0}
          max           = {10000}
          step          = {10}
        />}
      </li>
      <li>
        <LatLonInput
          label         = "緯度経度:"
          value         = {location}
          enter         = {setLatLon}
      />
      </li>
    </UlVertical>
  </fieldset>
}
